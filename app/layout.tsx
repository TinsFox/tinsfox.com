import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Root } from "~/components/layout";
import clsx from "clsx";

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
        className={clsx(
          inter.className,
          "antialiased bg-gray-50 dark:bg-black min-h-screen"
        )}
      >
        <Root>{children}</Root>
      </body>
    </html>
  );
}
