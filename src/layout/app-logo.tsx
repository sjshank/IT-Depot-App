import React from "react";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import NextImage from "next/image";
import Link from "@mui/material/Link";

const AppLogo: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <Link
      href="/"
      component={NextLink}
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
      />
      <Typography variant="h5" padding={0.5} noWrap>
        IT Garage
      </Typography>
    </Link>
  );
};

const Logo = React.memo(AppLogo);

export default Logo;
