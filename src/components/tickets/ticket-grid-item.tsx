import React from "react";
import Grid from "@mui/material/Grid";
import { TTicket } from "@/types/ticket";
import TicketCard from "./ticket-card";

const TicketGridItem = (ticket: TTicket) => {
  return (
    <Grid
      container
      direction="row"
      rowSpacing={3}
      columnSpacing={3}
      justifyContent={{ md: "flex-start", xs: "center" }}
      alignItems="center"
    >
      <Grid item>
        <TicketCard {...ticket} />
      </Grid>
      <Grid item>
        <TicketCard
          title="title"
          priority={3}
          description="Ticket description"
          category="Hardware"
        />
      </Grid>
      <Grid item>
        <TicketCard
          title="title"
          priority={3}
          description="Ticket description"
          category="Hardware"
        />
      </Grid>
      <Grid item>
        <TicketCard
          title="title"
          priority={3}
          description="Ticket description"
          category="Hardware"
        />
      </Grid>
      <Grid item>
        <TicketCard
          title="title"
          priority={3}
          description="Ticket description"
          category="Hardware"
        />
      </Grid>
    </Grid>
  );
};

export default TicketGridItem;
