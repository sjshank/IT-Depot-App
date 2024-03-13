import { NextPageWithLayout } from "@/layout";
import WithPageLayout from "@/hoc/withPageLayout";
import Grid from "@mui/material/Grid";
import TicketGrid from "@/components/tickets/ticket-grid";
import WithFormLayout from "@/hoc/withFormLayout";
import TicketMetrics from "@/components/tickets/ticket-metrics";

const Overview: NextPageWithLayout = () => {
  return (
    <>
      <TicketMetrics />
      <Grid container direction="column" rowSpacing={4} columnSpacing={4}>
        {/* render list of tickets grouped by category */}
        <TicketGrid />
        <TicketGrid />
        <TicketGrid />
      </Grid>
    </>
  );
};

const Dashboard = WithFormLayout(Overview, {
  header: "Ticket Dashboard",
});

export default WithPageLayout(Dashboard);
