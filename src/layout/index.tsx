import React from "react";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import MainNavigation from "./main-navigation";
import { SessionProvider } from "next-auth/react";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
  session?: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  session,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>IT Garage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainNavigation />
          <main style={{ marginTop: "40px", minHeight: "36vw" }}>
            <>{children}</>
          </main>
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default Layout;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
