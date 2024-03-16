import React from "react";
import { NextPageWithLayout } from "@/layout";
import WithPageLayout from "@/hoc/withPageLayout";
import StartingPage from "@/components/starting-page";
import Head from "next/head";

const HomePage: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>IT Garage : Login</title>
        <meta
          name="description"
          content="Authenticate & authorize user allow to manage incident tickets"
        />
      </Head>

      <StartingPage />
    </>
  );
};

export default WithPageLayout(HomePage);
