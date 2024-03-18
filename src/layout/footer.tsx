import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Stack marginTop={8}>
      <Divider
        variant="fullWidth"
        flexItem
        aria-hidden="true"
        sx={{ borderWidth: "2px" }}
      />
      <Typography variant="subtitle2" padding={3}>
        Copyright@2024
        <FavoriteIcon
          fontSize="small"
          sx={{ color: "#FF0000", margin: "0 4px" }}
        />
        <Link
          component="a"
          href="https://github.com/sjshank"
          target="_blank"
          color="primary"
          tabIndex={0}
          sx={{ cursor: "pointer", fontWeight: 600 }}
        >
          SJSHANK
        </Link>
      </Typography>
    </Stack>
  );
};

export default Footer;
