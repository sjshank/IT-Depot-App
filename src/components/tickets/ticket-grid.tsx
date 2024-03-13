import React from "react";
import Grid from "@mui/material/Grid";
import TicketGridHeader from "./ticket-grid-header";
import TicketGridItem from "./ticket-grid-item";
import { TTicket } from "@/types/ticket";

const TicketGrid = (ticket: TTicket) => {
  return (
    <Grid item>
      <TicketGridHeader heading="Hardware" />
      {/* render list of tickets under each category */}
      <TicketGridItem {...ticket} />
    </Grid>
  );
};

export default TicketGrid;
