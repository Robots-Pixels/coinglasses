import "./globals.css";
import {Fredoka} from "next/font/google";
import type { Metadata } from "next";

const fredoka = Fredoka({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CoinGlasses",
  description: "PWA Expense Tracker using Glassmorphism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} antialiased`}>{children}</body>
    </html>
  )
}