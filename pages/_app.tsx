import type { AppProps } from "next/app";
import "@assets/main.css"

import { FC } from "react";

const Noop: FC<any> = ({children}) => <>{children}</>

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<any> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
