"use server";
import postgres from "postgres";
const sql = postgres(process.env.APP_POSTGRES_URL!, {ssl: "require"});

export const saveUserIntoDB = async ({ name, email }: { name: string; email: string }) => {
  if (!email || !name) {
    throw new Error("User email or name is missing");
  }

  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await sql`
      CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone VARCHAR(255),
        freestyle TEXT,
        password TEXT,
        balance NUMERIC(12, 2) DEFAULT 0,
        email_verified BOOLEAN DEFAULT false,
        email_token TEXT,
        email_expires timestamptz
      );
    `;

    const [user] = await sql`
      INSERT INTO users (fullname, email)
      VALUES (${name}, ${email})
      ON CONFLICT (email) DO NOTHING
      RETURNING id, fullname, email;`;

    await sql`
    CREATE TABLE IF NOT EXISTS sessions(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      expires timestamptz NOT NULL
  );`;

  let finalUser = user;
  if (!finalUser) {
    [finalUser] = await sql`
    SELECT id, fullname, email
    FROM users
    WHERE email = ${email};
  `;
  }
    const session = createUserSession(finalUser.id);
    return {user, session};

  } catch (error) {
    console.log("Error saving user: ", error);
    throw error;
  }
};

const createUserSession = async (userId: string) => {
    if (!userId) {
        throw new Error("User ID is required to create a session");
    }
    const [session] = await sql`
    INSERT INTO sessions (user_id, expires)
    VALUES(${userId}, NOW() + INTERVAL '7 days')
    RETURNING *; 
    `;

    return session;
}


export const deleteFromDatabase = async (userId: string) => {
    if (!userId) {
        throw new Error("User ID is required to delete a user");
    }
    await sql`
    DELETE FROM sessions WHERE user_id = ${userId};
    `;
    return;
}