import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AppLogo from "./app-logo";

const MainNavigation: React.FunctionComponent<{}> = (): JSX.Element => {
  const handleCloseNavMenu = () => {};
  return (
    <AppBar position="static" sx={{ padding: 0.5 }}>
      <Toolbar>
        <AppLogo />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          <Link
            href="/ticket/create"
            component={NextLink}
            onClick={handleCloseNavMenu}
            role="navigation"
            sx={{ my: 2, color: "#ffffff", display: "block" }}
          >
            Submit Ticket
          </Link>
          <Avatar
            variant="circular"
            sx={{
              my: 1.4,
              cursor: "pointer",
            }}
          >
            SS
          </Avatar>
        </Box>

        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
