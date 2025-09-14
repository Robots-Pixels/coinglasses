"use server";

import { FormState, SignInFormSchema, SignupFormSchema } from "@/lib/types";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/emailVerification";
import { auth, signOut } from "@/auth";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { deleteFromDatabase } from "@/lib/utils/signup_utils";

const sql = postgres(process.env.APP_POSTGRES_URL!, {ssl: "require"});

export async function signup(state: FormState, formData: FormData) {
    const validatedFileds = SignupFormSchema.safeParse({
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if(!validatedFileds.success){
        return{
            errors: validatedFileds.error.flatten().fieldErrors,
        }
    }

    const {fullname, email, password} = validatedFileds.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const email_token = crypto.randomBytes(32).toString("hex");
    const email_expires = new Date(Date.now() + 1000 * 60 * 30); //  30 minutes

    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

        await sql`
        CREATE TABLE IF NOT EXISTS users(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            fullname VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            balance NUMERIC(12, 2) DEFAULT 0,
            email_verified BOOLEAN DEFAULT false,
            email_token TEXT,
            email_expires TIMESTAMPZ
        );
    `;

        const [user] = await sql`
        INSERT INTO users (fullname, email, password, email_token, email_expires)
        VALUES (${fullname}, ${email}, ${hashedPassword},  ${email_token}, ${email_expires})
        ON CONFLICT (email) DO NOTHING
        RETURNING id, email, email_token;
        `;

        if(!user){
            return {errors: {email: ["Email already exists."]}};
        }
   
        await sendVerificationEmail(user.email, user.email_token);

        return ({success: true});

    } catch (error) {
        console.error(error);
    }
}

export async function signin(state: FormState, formaData: FormData){
    const validatedFields = SignInFormSchema.safeParse({
        email: formaData.get("email"),
        password: formaData.get("password"),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }        
    }

    const {email, password} = validatedFields.data;

    try {
        const [foundUser] = await sql`
            SELECT * FROM users WHERE email = ${email};
        `
        if(!foundUser){
            return {errors: {email: ["No user found with this email"]}};
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const validatedPassword = bcrypt.compare(hashedPassword, foundUser.password);
        if(!validatedPassword){
            return {errors: {password: ["Incorrect password"]}};
        }

        if (!foundUser.email_verified){
            if(!foundUser.email_token){
                return {errors: {email: ["The email you provided was used to connect using Google or Twitter. Please, login using one of them of create a new account."]}};
            }
            
            if (new Date(foundUser.email_expires) < new Date()){
                return {errors: {email: ["The verification link has expired. Please, sign up again."]}};
            }

            return {errors: {email: ["Please verify your email to sign in."]}};
        }

        // Delete existing sessions

        deleteSession();
        const session = await auth();

        if (session?.user?.id) {
            await signOut();
            await deleteFromDatabase(session.user?.id);
        }

        // Create Session Cookie

        console.log("User signed in:", foundUser);
        await createSession(foundUser.id);

        redirect("/dashboard");
    } 
    catch (error) {
        return {errors: {password: ["Something went wrong. Please try again later."]}};
    }
}
