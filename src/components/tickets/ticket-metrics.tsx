import Stack from "@mui/material/Stack";
import React from "react";
import TicketMetricItem from "./ticket-metric-item";
import MuiAvatar from "@/ui/MuiAvatar";

const TicketMetrics = () => {
  return (
    <Stack
      component="div"
      direction="row"
      justifyContent={{ md: "flex-start", xs: "center" }}
      flexWrap="wrap"
      gap={2}
    >
      <TicketMetricItem
        label="Total Tickets"
        avatar={<MuiAvatar>15</MuiAvatar>}
      />
      <TicketMetricItem label="Categories" avatar={<MuiAvatar>3</MuiAvatar>} />
      <TicketMetricItem
        label="In Progress"
        avatar={<MuiAvatar>10</MuiAvatar>}
      />
      <TicketMetricItem label="Completed" avatar={<MuiAvatar>5</MuiAvatar>} />
    </Stack>
  );
};

export default TicketMetrics;
