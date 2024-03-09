import Layout from "@/layout";
import type { ReactElement } from "react";

const WithPageLayout = (Component: any) => {
  const PageWithLayoutComponent = (props: any) => {
    return <Component />;
  };
  PageWithLayoutComponent.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
  return PageWithLayoutComponent;
};

export default WithPageLayout;
