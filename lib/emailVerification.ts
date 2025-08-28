import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
});

export async function sendVerificationEmail(to:string, token: string){
    // const verifyUrl = `http://localhost:3000/api/verifyEmail?token=${token}`;
    const verifyUrl = `https://coinglasses-tracker.vercel.app/api/verifyEmail?token=${token}`;
    
    await transporter.sendMail({
        from: `"Coinglasses" <${process.env.SMTP_USER}>`,
        to,
        subject: "Verify Your Email",
        text: "Click here",
        html: `
        <h1>Verify your email</h1>
        <p>Click below to verify your account:</p>
        <a href="${verifyUrl}">Verify Email</a>
        `
    })
}