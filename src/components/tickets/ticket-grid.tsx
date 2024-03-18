import React from "react";
import Grid from "@mui/material/Grid";
import TicketGridHeader from "./ticket-grid-header";
import TicketGridItem from "./ticket-grid-item";
import { TTicket } from "@/types/ticket";

type TTicketGridProps = {
  tickets: TTicket[];
  category: string;
};

const TicketGrid: React.FunctionComponent<TTicketGridProps> = ({
  tickets,
  category,
}: TTicketGridProps): JSX.Element => {
  return (
    <Grid item>
      <TicketGridHeader heading={category} />
      <Grid
        container
        direction="row"
        rowSpacing={3}
        columnSpacing={3}
        justifyContent={{ md: "flex-start", xs: "center" }}
        alignItems="center"
      >
        {tickets.map((ticketGridData: TTicket) => (
          <TicketGridItem key={ticketGridData.ticketId} {...ticketGridData} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TicketGrid;
