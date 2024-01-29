import { PropsWithChildren } from "react";

import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";

export const Root = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<Content>{children}</Content>
			<div className="h-32" />
			<Footer />
		</>
	);
};
