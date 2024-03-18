import { NextPageWithLayout } from "@/layout";
import WithPageLayout from "@/hoc/withPageLayout";
import Grid from "@mui/material/Grid";
import WithFormLayout from "@/hoc/withFormLayout";
import TicketMetrics from "@/components/tickets/ticket-metrics";
import type { GetServerSideProps } from "next";
import { retrieveDashboardDataForUser } from "@/services/dashboard-api";
import TicketGrid from "@/components/tickets/ticket-grid";
import ViewTicketContainer from "@/components/view-ticket";
import TicketContextProvider from "@/context/ticket-context";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import dynamic from "next/dynamic";

const Overview: NextPageWithLayout = (props) => {
  const { ticketsGroupedByCategory, metrics } = props as any;
  let NotFoundLazyComponent = null;
  if (metrics.categories.length < 1) {
    NotFoundLazyComponent = dynamic(
      () => import("@/components/tickets/not-found-alert"),
      {
        ssr: false,
      }
    );
  }

  return (
    <TicketContextProvider>
      <>
        <Head>
          <title>IT Garage : Dashboard</title>
          <meta name="description" content="User specific ticket dashboard" />
        </Head>
        <TicketMetrics {...metrics} categories={metrics.categories.length} />
        <Grid container direction="column" rowSpacing={4} columnSpacing={4}>
          {metrics?.categories.length > 0 &&
            metrics.categories.map((category: string, index: number) => {
              return (
                <TicketGrid
                  key={`${category}-${index}`}
                  tickets={ticketsGroupedByCategory[category]}
                  category={category}
                />
              );
            })}
          {NotFoundLazyComponent && <NotFoundLazyComponent />}
        </Grid>
        <ViewTicketContainer />
      </>
    </TicketContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { res, req } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=30"
  );

  const session = await getServerSession(req, res, authOptions as any);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { user } = session as any;
  const result = await retrieveDashboardDataForUser(user);

  return {
    props: {
      ...result,
    },
  };
};

const Dashboard = WithFormLayout(Overview, {
  header: "Incident Dashboard",
  subHeader:
    "A visual representations of real-time incident data that help users to monitor progress, and make smarter, data-driven decisions",
});

export default WithPageLayout(Dashboard);
