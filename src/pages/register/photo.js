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
import { FileUploader } from "react-drag-drop-files";

import profile from "../../assets/vectors/avatars/profile.svg";
import cloud from "../../assets/icons/cloud.svg";

import ebayIcon from "@/assets/icons/ebay.svg";
import appleIcon from "@/assets/icons/apple.svg";
import googleIcon from "@/assets/icons/google.svg";
import ibmIcon from "@/assets/icons/ibm.svg";
import evositeIcon from "@/assets/icons/evosite.svg";
import aconexIcon from "@/assets/icons/aconex.svg";

import Image from "next/image";
import Link from "next/link";
import { width } from "@mui/system";

const Photo = () => {
  const handleClick = () => {};

  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState();
  const handleChange = (file) => {
    setFile(file);
  };

  const handleClickChange = (file) => {
    setFile(file.target.files[0]);
  }

  useEffect(() => {
    if (!file) {
      setFile(undefined);
      return;
    }

    const objectUrl = window.URL.createObjectURL(file)
    
    setFilePreview(objectUrl);

  },[file])
  
  return (
    <Box
      className="photo-page"
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
        className="photo-page-container"
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
          className="photo-page-box"
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
            <h1>Upload your photo</h1>
          </Box>
          <Box className="sub-heading">
            <p>Adding a photo helps people recognize you</p>
          </Box>
          <Box
            className="content-wrapper"
            sx={{
              position: "relative",
            }}
          >
            <Box
              className="drag-drop-wrapper"
              sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={["JPG", "PNG", "JPEG"]}
              />
            </Box>
            <Box
              className="upload-box"
              sx={{
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                },
              }}
            >
              <Box
                className="photo"
                sx={{
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <Box className="profile-wrapper">
                  <Image
                    src={filePreview ? filePreview : profile}
                    alt="profile"
                    width={"130"}
                    height={"130"}
                  />
                </Box>
              </Box>
              <Box
                className="input"
                sx={{
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <span className="drop-button">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(file) => handleClickChange(file)}
                    />
                    <Image src={cloud} alt="cloud" /> <p>Click to upload</p>
                  </IconButton>
                </span>
                <span className="drop-text">
                  <p className="light">or drag and drop</p>
                </span>
                <span className="file-text">{file && file.name}</span>
              </Box>
            </Box>
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
                text="Add photo"
                onClick={handleClick}
              />
            </div>
            <div className="bottom">
              <Link href="/register/interests">Skip</Link>
            </div>
          </Box>
        </Box>
        <Box
          className="brand-box"
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "none",
              xs: "flex",
            },
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="heading">
            <p>
              Trusted by different organizations <br /> worldwide
            </p>
          </div>

          <Box
            className="brands"
            sx={{
              display: {
                xs: "grid",
              },
              marginTop: "2rem",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "12px",
            }}
          >
            <div className="brand-wrapper">
              <Image src={ebayIcon} />
            </div>
            <div className="brand-wrapper">
              <Image src={appleIcon} />
            </div>
            <div className="brand-wrapper">
              <Image src={googleIcon} />
            </div>
            <div className="brand-wrapper">
              <Image src={ibmIcon} />
            </div>
            <div className="brand-wrapper">
              <Image src={evositeIcon} />
            </div>
            <div className="brand-wrapper">
              <Image src={aconexIcon} />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Photo;
