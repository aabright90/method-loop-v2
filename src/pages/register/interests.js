import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Typography,
  Container,
  Button,
  IconButton,
} from "@mui/material";

import { ActionButton, ActionCall } from "@/components/buttons";
import BusinessAnalyst from "@/assets/vectors/illustrations/interests/buildAnalyst.svg";
import Developer from "@/assets/vectors/illustrations/interests/developer.svg";
import Researcher from "@/assets/vectors/illustrations/interests/researcher.svg";
import Architect from "@/assets/vectors/illustrations/interests/architect.svg";
import UXDesigner from "@/assets/vectors/illustrations/interests/uxDesigner.svg";
import UIDesigner from "@/assets/vectors/illustrations/interests/uiDesigner.svg";
import Marketing from "@/assets/vectors/illustrations/interests/marketing.svg";
import ContentWriter from "@/assets/vectors/illustrations/interests/contentWriter.svg";

import CircleCheck from "@/assets/vectors/illustrations/interests/circleCheck.svg";

import Image from "next/image";
import Link from "next/link";
import { width } from "@mui/system";

const Interest = () => {
  const handleClick = () => {};

  const cards = [
    {
      title: "Business Analyst",
      img: BusinessAnalyst,
    },
    {
      title: "Developer",
      img: Developer,
    },
    {
      title: "Researcher",
      img: Researcher,
    },
    {
      title: "Architect",
      img: Architect,
    },
    {
      title: "UX Designer",
      img: UXDesigner,
    },
    {
      title: "UI Designer",
      img: UIDesigner,
    },
    {
      title: "Marketing",
      img: Marketing,
    },
    {
      title: "Content Writer",
      img: ContentWriter,
    },
  ];

  return (
    <Box
      className="interests-page"
      disableGutters
      sx={{
        display: "flex",
        width: "100vw",
      }}
    >
      <Box
        className="nav-wrapper"
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <nav className="nav-register">
          <Link href={"/"}>
            <h4>methodloop</h4>
          </Link>
        </nav>
      </Box>

      <Box
        className="interests-page-container"
        sx={{
          width: "100vw",
          height: "100vh",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          className="interests-page-box"
          sx={{
            width: "40vw",
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
            },
            flexDirection: "column",
          }}
        >
          <Box className="heading">
            <h1>Your areas of interest</h1>
          </Box>
          <Box className="sub-heading">
            <p>
              Choose your area of interests below so we can better match methods
              to your immediate needs
            </p>
          </Box>

          <Box className="interest-box">
            <Box
              className="interest-grid"
              sx={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: {
                  xl: "repeat(4, 1fr)",
                  lg: "repeat(4, 1fr)",
                  md: "repeat(4, 1fr)",
                  sm: "repeat(4, 1fr)",
                  xs: "repeat(2, 1fr)",
                },
              }}
            >
              {cards.map((card, index) => (
                <InterestCard key={index} card={card} />
              ))}
            </Box>
            <Box
              className="button-box"
              sx={{
                marginTop: "1rem",
              }}
            >
              <div className="top">
                <ActionButton
                  className="add-photo"
                  text="Finish"
                  onClick={handleClick}
                />
              </div>
              <div className="bottom">
                <Link href="/">Skip</Link>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Interest;

const InterestCard = ({ card }) => {

  const [active, setActive] = useState(false)  

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div
      onClick={handleClick}
      className={`${active ? "interest-card active" : "interest-card"}`}
    >
      <div
        style={{
          position: "absolute",
          display: active ? "block" : "none",
          top: '5px',
          right: '10px'
        }}
      >
        <Image src={CircleCheck} />
      </div>
      <div className="illustration">
        <Image src={card.img} />
      </div>
      <div className="title">
        <p>{card.title}</p>
      </div>
    </div>
  );
};
