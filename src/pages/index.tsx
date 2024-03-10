import React from "react";
import { NextPageWithLayout } from "@/layout";
import WithPageLayout from "@/hoc/withPageLayout";
import StartingPage from "@/components/starting-page";

const HomePage: NextPageWithLayout = (): JSX.Element => {
  return <StartingPage />;
};

export default WithPageLayout(HomePage);
