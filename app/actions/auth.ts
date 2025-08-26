import { FormState, SignupFormSchema } from "@/lib/types";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

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

    const hashedPassword = await bcrypt.hash(password, 10)

    console.log("Creating a user...");
    console.log("Added!");

    redirect("/dashboard");
}