import React from "react";
import NavigationBar from "./NavigationBar";
import Image from "next/image";
import { Box, Container } from "@mui/material";

import group from "../assets/img/group.png";
import groupMobile from "../assets/img/meetingMobile.png";

const Header = ({ global }) => {
  return (
    <section className="header-grid">
      <NavigationBar global={global} />
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <div className="hero-grabber">
            <h1>Every Design</h1>
            <h1> Method.</h1>
            <h1> Ever Made.</h1>
          </div>
          <div className="hero-text">
            <p>
              Create a playbook that informs your design process and <br />{" "}
              keeps you and your team on-point. MethodLoop® brings <br /> all
              your design processes into a single platform.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Image src={group} alt="group"/>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            justifyContent: 'center',
            alignItems: "center"
          }}
        >
          <Image src={groupMobile} alt="group-mobile" />
        </Box>
      </div>
    </section>
  );
};

export default Header;
