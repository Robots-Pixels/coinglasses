## I'm going to change my technique for authentication, starting with OAuth and following NextAuth.js Documentation + Next.js

1 - First of all, don't use ChatGPT, it made me turn around.... 

2 - Instead, follow this NextAuth.js docs : 
https://authjs.dev/getting-started/authentication/oauth

If you are redirected on the error page like me : http://localhost:3000/api/auth/error?error=Configuration
just switch from 3000 to 4000 for example. I don't know why 3000 is cursed and ChatGPT didn't satisfied me. 

3 - What happens is that we have a button to signIn with google. On click, or on form submit we will trigger a function called signIn coming from Auth.js (See auth.ts). This function will do the Google Auth, and when we are successfully signed in, the auth (also check auth.ts) will be filled with the current user session. 
Now, let's use it. 
