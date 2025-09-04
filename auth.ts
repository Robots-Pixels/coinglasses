import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Nodemailer from "next-auth/providers/nodemailer";
import Postmark from "next-auth/providers/postmark";
import { saveUserIntoDB } from "./lib/utils/signup_utils";
 
export const {handlers, signIn, signOut, auth} = NextAuth({
    providers:[
        Google, 
        Twitter, 
        // Nodemailer({
        //     server:{
        //         host: process.env.EMAIL_SERVER_HOST,
        //         port: Number(process.env.EMAIL_SERVER_PORT),
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER,
        //             pass: process.env.EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_FROM,
        // }),
        // Credentials ({
        //     credentials: {
        //         firstname: {
        //             type: "text",
        //             label: "Email",
        //             placeholder: "Your Firstname",
        //         },
        //         lastname: {
        //             type: "text",
        //             label: "Email",
        //             placeholder: "Your Lastname",
        //         },
        //         email: {
        //             type: "email",
        //             label: "Your Email"
        //         },
        //         password: {
        //             type: "password",
        //             label: "Your password"
        //         },
        //     },
        //     authorize: 
        // })
        ],
    // pages: {
    //     signIn: "/signin"
    // },
    // callbacks: {
    //     async signIn() {
    //     await saveUserIntoDB();
    //     console.log("Worked");
    //     return true; // allow sign-in
    // }
}
}
);
