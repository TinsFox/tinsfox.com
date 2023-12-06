import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TinsFox",
  description: "Person website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full light">
      <body
        className={cn(
          inter.className,
          "antialiased bg-gray-50 dark:bg-black min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
