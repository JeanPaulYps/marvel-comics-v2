import React from "react";
import { Header } from ".";
import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export { Layout };
