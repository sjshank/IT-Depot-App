import Stack from "@mui/material/Stack";
import React from "react";
import MuiAvatar from "@/ui/MuiAvatar";
import MuiChip from "@/ui/MuiChip";

type TMetricProps = {
  numberOfTickets: number;
  categories: number;
  progress: number;
  completed: number;
};

const TicketMetrics: React.FunctionComponent<TMetricProps> = ({
  numberOfTickets,
  categories,
  completed,
  progress,
}: TMetricProps): JSX.Element => {
  return (
    <Stack
      component="div"
      direction="row"
      justifyContent={{ md: "flex-start", xs: "center" }}
      flexWrap="wrap"
      gap={2}
    >
      <MuiChip
        label="Total Tickets"
        avatar={<MuiAvatar>{numberOfTickets}</MuiAvatar>}
      />
      <MuiChip
        label="Categories"
        avatar={<MuiAvatar>{categories}</MuiAvatar>}
      />
      <MuiChip label="In Progress" avatar={<MuiAvatar>{progress}</MuiAvatar>} />
      <MuiChip label="Completed" avatar={<MuiAvatar>{completed}</MuiAvatar>} />
    </Stack>
  );
};

export default TicketMetrics;
