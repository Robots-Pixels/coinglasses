import { LucideIcon } from "lucide-react";
import { z } from "zod";

export type NavItem = {
    name: string;
    href: string;
    icon: LucideIcon;
}

export const SignupFormSchema = z.object({
    fullname: z
    .string()
    .min(2, {message: "Fullname must be at least 2 charachters long."})
    .trim(),

    email: z.email().trim(),

    password: z
    .string()
    .min(8, {message: "Be at least 8 characters long"})
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter."})
    .regex(/[0-9]/, { message: "Contain at least one number."})
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export type FormState =
|   {
    errors?: {
        fullname?: string[]
        email?: string[]
        password?: string[]
    }
    message?: string
    }
| undefined