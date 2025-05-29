import type { Metadata } from "next";
import "./globals.css";
import { inter, lato, poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "AI Chatbot - Talk, Learn, and Engage with AI-Powered Conversations.",
  description:
    "Experience human-like voice interactions, learn through flashcards, and connect with a global community—all in one AI-driven platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
