import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

type TPageHeaderProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

const MuiPageHeader = ({ sx, children }: TPageHeaderProps) => {
  return (
    <Typography variant="h4" component="h1" fontWeight={500} sx={sx}>
      {children}
    </Typography>
  );
};

export default MuiPageHeader;
