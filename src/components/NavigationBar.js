import { useEffect, useState } from "react";
import { LoginButton, TrialButton } from "./buttons";
import Link from "next/link";
import Image from "next/image";
// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   NavDropdown,
//   Offcanvas,
//   Navbar,
//   Col,
// } from "react-bootstrap";
import navButton from "../assets/icons/navButton.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Methods", "Workspace"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavigationBar({ global }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  console.log(global);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="navbar-main">
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className="logo"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              methodloop
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                justifyContent: {
                  xs: "flex-end",
                  sm: "flex-end",
                  md: "flex-end",
                },
              }}
            >
              <LoginButton id={"login"} route={"/login"} />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon onClick={() => global.toggleDrawer()} />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { lg: "flex", xs: "none" },
                justifyContent: { lg: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={{ mt: 1, color: "white", display: "block" }}
                >
                  <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                </MenuItem>
              ))}
              <LoginButton id={"login"} route={"/login"} />
              <TrialButton
                id={"free-trial"}
                text={"Start Free Trial"}
                route={"/free-trial"}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavigationBar;

