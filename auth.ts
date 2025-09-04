import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import { saveUserIntoDB } from "./lib/utils/signup_utils";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Twitter],
  callbacks: {
    async signIn({ user, account, profile,  email, credentials }) {
      try {
        await saveUserIntoDB({ name: user.name!, email: user.email! });
        console.log("User saved ✅");
        return true;
      } catch (err) {
        console.error("Error in saveUserIntoDB:", err);
        return false;
      }
    },
  },
});
