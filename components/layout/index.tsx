import { PropsWithChildren } from "react";

import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Root = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <div className="h-32"></div>
      <Footer></Footer>
    </>
  );
};
