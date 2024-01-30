import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
	return (
		<main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">{children}</main>
	);
};
