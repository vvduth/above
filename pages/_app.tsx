import type { AppProps } from "next/app";
import "@assets/main.css";

import { FC } from "react";
import UIProvider from "@components/ui/context";

const Noop: FC<any> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<any> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
