"use server";

import { FormState, SignInFormSchema, SignupFormSchema } from "@/lib/types";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/emailVerification";

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
            return {error: {email: ["No user found with this email"]}};
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const validatedPassword = bcrypt.compare(hashedPassword, foundUser.password);
        if(!validatedPassword){
            return {error: {password: ["Incorrect password"]}};
        }

        if (!foundUser.email_verified){
            return {error: {email: ["Please verify your email to sign in."]}};
        }

        return ({success: true});
        
    } 
    catch (error) {
        return {error: {password: ["Something went wrong. Please try again later."]}};
    }
}
