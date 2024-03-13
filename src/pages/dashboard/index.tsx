import { NextPageWithLayout } from "@/layout";
import WithPageLayout from "@/hoc/withPageLayout";
import Grid from "@mui/material/Grid";
import WithFormLayout from "@/hoc/withFormLayout";
import TicketMetrics from "@/components/tickets/ticket-metrics";
import type { GetServerSideProps } from "next";
import { retrieveDashboardDataForUser } from "@/services/dashboard-api";
import TicketGrid from "@/components/tickets/ticket-grid";

const Overview: NextPageWithLayout = (props) => {
  const { ticketsGroupedByCategory, metrics } = props as any;
  return (
    <>
      <TicketMetrics {...metrics} categories={metrics.categories.length} />
      <Grid container direction="column" rowSpacing={4} columnSpacing={4}>
        {metrics &&
          metrics.categories.map((category: string, index: number) => {
            return (
              <TicketGrid
                key={`${category}-${index}`}
                tickets={ticketsGroupedByCategory[category]}
                category={category}
              />
            );
          })}
      </Grid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=59"
  );
  const result = await retrieveDashboardDataForUser();

  return {
    props: {
      ...result,
    },
  };
};

const Dashboard = WithFormLayout(Overview, {
  header: "Ticket Dashboard",
});

export default WithPageLayout(Dashboard);
