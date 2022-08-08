import type { AppProps } from "next/app";
import "@assets/main.css";
import 'keen-slider/keen-slider.min.css'
import { FC, ReactNode } from "react";
import UIProvider from "@components/ui/context";

interface Props {
  children: ReactNode | ReactNode[]
}

const Noop: FC<Props> = ({ children }:Props) => <>{children}</>;

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
