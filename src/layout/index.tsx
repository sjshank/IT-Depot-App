import React from "react";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import MainNavigation from "./main-navigation";
import dynamic from "next/dynamic";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): JSX.Element => {
  const ToastContainerComp = dynamic(
    () => import("react-toastify").then((mod) => mod.ToastContainer),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>IT Garage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainNavigation />
        <main style={{ marginTop: "40px" }}>
          <>
            {children}
            <React.Suspense fallback={<span>loading...</span>}>
              <ToastContainerComp />
            </React.Suspense>
          </>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
