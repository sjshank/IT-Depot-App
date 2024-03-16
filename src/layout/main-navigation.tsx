import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AppLogo from "./app-logo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Typography } from "@mui/material";

const MainNavigation: React.FunctionComponent<{}> = (): JSX.Element => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleCloseNavMenu = () => {};
  return (
    <AppBar position="static" sx={{ padding: 0.5 }}>
      <Toolbar>
        <AppLogo />
        {router.pathname !== "/" && session && (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: { xs: 1, md: 2 },
            }}
          >
            <Link
              href="/dashboard"
              component={NextLink}
              role="link"
              tabIndex={1}
              title="Dashboard"
              sx={{ marginTop: 1, color: "#ffffff" }}
            >
              <DashboardIcon fontSize="large" />
            </Link>
            <Link
              href="/ticket/create"
              component={NextLink}
              role="link"
              tabIndex={1}
              title="Report Incident"
              sx={{ marginTop: 1, color: "#ffffff" }}
            >
              <AddBoxIcon fontSize="large" />
            </Link>
            {session && (
              <Typography
                onClick={() =>
                  signOut({ callbackUrl: process.env.NEXTAUTH_URL })
                }
                variant="subtitle2"
                role="button"
                tabIndex={1}
                title="Logout"
                sx={{
                  marginBottom: 1,
                  color: "#ffffff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Logout
              </Typography>
            )}
            {/* <Avatar
            variant="circular"
            sx={{
              my: 1.4,
              cursor: "pointer",
            }}
          >
            SS
          </Avatar> */}
          </Box>
        )}

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
