import Layout from "@/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React, { useEffect } from "react";

const WithPageLayout = (
  WrapperComponent: React.ElementType
): React.ElementType => {
  const PageWithRootLayout = (props: any) => {
    const router = useRouter();
    const { data: session, status }: { data: any; status: any } = useSession();

    useEffect(() => {
      if (status == "unauthenticated" && !session && router.pathname !== "/") {
        router.replace("/");
      }
    }, [status, session, router]);
    return <WrapperComponent {...props} />;
  };
  PageWithRootLayout.getLayout = function (page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
  return PageWithRootLayout;
};

export default WithPageLayout;
