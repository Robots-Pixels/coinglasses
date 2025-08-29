"use server";

import { FormState, SignupFormSchema } from "@/lib/types";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/emailVerification";

const sql = postgres(process.env.APP_POSTGRES_URL!, {ssl: "require"});

export async function signup(state: FormState, formData: FormData) {
    const validatedFileds = SignupFormSchema.safeParse({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if(!validatedFileds.success){
        return{
            errors: validatedFileds.error.flatten().fieldErrors,
        }
    }

    const {firstname, lastname, email, password} = validatedFileds.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const email_token = crypto.randomBytes(32).toString("hex");
    const email_expires = new Date(Date.now() + 1000 * 60 * 30); //  30 minutes

    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

        await sql`
        CREATE TABLE IF NOT EXISTS users(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            email_verified BOOLEAN DEFAULT false,
            email_token TEXT,
            email_expires TIMESTAMP
        );
    `;

        const [user] = await sql`
        INSERT INTO users (firstname, lastname, email, password, email_token, email_expires)
        VALUES (${firstname}, ${lastname}, ${email}, ${hashedPassword},  ${email_token}, ${email_expires})
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