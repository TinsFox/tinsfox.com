import clsx from "clsx";
import type { Metadata } from "next";
import React from "react";
import { Root } from "~/components/layout";
import { ThemeProvider } from "~/components/theme-provider";
import { fontSans } from "~/lib/fonts";
import "./globals.css";

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
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Root>{children}</Root>
				</ThemeProvider>
			</body>
		</html>
	);
}
