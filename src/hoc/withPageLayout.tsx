import Layout from "@/layout";
import type { ReactElement } from "react";
import React from "react";

const WithPageLayout = (
  WrapperComponent: React.ElementType
): React.ElementType => {
  const PageWithRootLayout = (props: any) => {
    return <WrapperComponent {...props} />;
  };
  PageWithRootLayout.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
  return PageWithRootLayout;
};

export default WithPageLayout;
