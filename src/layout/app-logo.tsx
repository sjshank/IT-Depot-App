import React from "react";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";
import { Box } from "@mui/material";

const AppLogo: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <Box
      component="div"
      tabIndex={0}
      sx={{
        color: "#ffffff",
        display: "inline-flex",
        textDecoration: "none",
      }}
    >
      <NextImage
        alt="app logo"
        src="/images/app_logo.png"
        width={40}
        height={40}
        priority
      />
      <Typography variant="h5" padding={0.5} noWrap>
        IT Garage
      </Typography>
    </Box>
  );
};

const Logo = React.memo(AppLogo);

export default Logo;
