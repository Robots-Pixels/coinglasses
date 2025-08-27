"use server";

import { FormState, SignupFormSchema } from "@/lib/types";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.SUPABASE_URL!, {ssl: "require"});

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

    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

        await sql 
        `
        CREATE TABLE IF NOT EXISTS users(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `;

        const [user] = await sql `
        INSERT INTO users (firstname, lastname, email, password)
        VALUES (${firstname}, ${lastname}, ${email}, ${hashedPassword})
        ON CONFLICT (email) DO NOTHING
        RETURNING id, email;
        `;

        if(!user){
            return {errors: {email: ["Email already exists."]}};
        }

        redirect("/signin");

    } catch (error) {
        console.error(error);
    }
}