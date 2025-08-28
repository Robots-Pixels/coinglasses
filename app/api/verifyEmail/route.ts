import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.SUPABASE_URL!, {ssl: "require"});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Invalid link" }, { status: 400 });
    }

    const [user] = await sql`
      SELECT * FROM users
      WHERE email_token = ${token}
      AND email_expires > NOW();
    `;

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE users
      SET email_verified = true, email_token = null, email_expires = null
      WHERE id = ${user.id};
    `;

    return NextResponse.redirect(
      "https://coinglasses-tracker.vercel.app/signin"
    );
  } catch (err) {
    console.error("VERIFY ROUTE ERROR:", err);
    return NextResponse.json({ error: "Server error", details: String(err) }, { status: 500 });
  }
}
