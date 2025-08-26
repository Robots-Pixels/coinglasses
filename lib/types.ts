import { LucideIcon } from "lucide-react";
import { z } from "zod";

export type NavItem = {
    name: string;
    href: string;
    icon: LucideIcon;
}

export const SignupFormSchema = z.object({
    firstname: z
    .string()
    .min(2, {message: "Firstname must be at least 2 charachters long."})
    .trim(),

    lastname: z
    .string()
    .min(2, {message: "Lastname must be at least 2 charachters long."})
    .trim(),

    email: z.email().trim(),

    password: z
    .string()
    .min(8, {message: "Must be at least 8 characters long"})
    .regex(/[a-zA-Z]/, { message: "Must contain at least one letter."})
    .regex(/[0-9]/, { message: "Must contain at least one number."})
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Must contain at least one special character.',
    })
    .trim(),
})

export type FormState =
|   {
    errors?: {
        firstname?: string[]
        lastname?: string[]
        email?: string[]
        password?: string[]
    }
    message?: string
    }
| undefined