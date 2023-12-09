import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Root } from "~/components/layout";
import clsx from "clsx";
import { fontSans } from "~/lib/fonts";

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
    <html lang="en" className="h-full light" suppressHydrationWarning>
      <body
        className={clsx(
          "antialiased bg-gray-50 dark:bg-black min-h-screen",
          fontSans.variable
        )}
      >
        <Root>{children}</Root>
      </body>
    </html>
  );
}
