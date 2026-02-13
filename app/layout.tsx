// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../component/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/component/ConvexClientProvider";
import SyncUserWithConvex from "@/component/SyncUserWithConvex";
import { Toaster } from "sonner";
import ChatbaseWidget from "@/component/ChatbaseWidget"; // مكون Chatbase مستقل

// Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata (Server-side)
export const metadata: Metadata = {
  title: "TICKETR",
  description: "your ticket here",
};

// RootLayout (Server Component)
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConvexClientProvider>
          <ClerkProvider>
            <Header />
            <SyncUserWithConvex />
            {children}
            {/* مكون Chatbase العميل */}
            <ChatbaseWidget />
            <Toaster />
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
