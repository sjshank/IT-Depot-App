import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type TCategoryHeaderProps = {
  heading: string;
};

const TicketGridHeader: React.FunctionComponent<TCategoryHeaderProps> = ({
  heading,
}): JSX.Element => {
  return (
    <Divider textAlign="center" role="presentation" sx={{ my: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ textTransform: "capitalize" }}
      >
        {heading}
      </Typography>
    </Divider>
  );
};

export default TicketGridHeader;
