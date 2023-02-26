import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import NavigationBar from "./NavigationBar";

import { Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <div className="banner-bg"></div>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          position: "relative",
          margin: "auto",
        }}
      >
        <div className="app-container">{children}</div>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
