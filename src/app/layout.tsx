import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Nancy Product Website",
    absolute: "World class Product ",
  },
  description:
    "Build a strong Mindset with sprituality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="relative w-full flex items-center justify-center">
          
          </div>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
