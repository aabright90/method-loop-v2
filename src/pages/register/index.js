import { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Typography,
  Container,
} from "@mui/material";
import { ActionButton, ActionCall } from "@/components/buttons";
import google from "../../assets/icons/googleButton.svg";
import facebook from "../../assets/icons/fbButton.svg";
import linkedin from "../../assets/icons/linkedinButton.svg";
import twitter from "../../assets/icons/twitterButton.svg";
import launch from "../../assets/vectors/illustrations/launch.svg";
import check from "../../assets/icons/check.svg";

import Image from "next/image";
import Link from "next/link";
import { width } from "@mui/system";

const register = () => {
  const handleClick = () => {};

  const [error, setError] = useState(true);

  return (
    <Box
      className="register-page"
      disableGutters
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        className="register-left"
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          className="nav-wrapper"
          sx={{
            position: "absolute",
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <nav className="nav-register">
            <h4>methodloop</h4>
          </nav>
        </Box>
        <Box
          className="form-box"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            className="register-wrapper"
            sx={{
              marginTop: "3.5rem",
              maxWidth: "560px",
              width: "75vw",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "36px",
                  md: "36px",
                  lg: "36px",
                  xl: "36px",
                },
                fontWeight: "700",
              }}
              className="heading"
            >
              Create an account
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <InputLabel
                required
                sx={{
                  color: "black",
                  fontSize: "14px",
                }}
                htmlFor="standard-adornment-amount"
              >
                Full name
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  placeholder="John Smith"
                  size="small"
                  sx={{
                    width: "100%",
                    minWidth: {
                      sm: "270px",
                      xs: "270px",
                    },
                  }}
                  variant="outlined"
                />
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginTop: {
                    xl: "1.5rem",
                    lg: "1.5rem",
                  },
                }}
              >
                <Box>
                  <InputLabel
                    required
                    sx={{
                      color: "black",
                      fontSize: "14px",
                    }}
                    htmlFor="standard-adornment-amount"
                  >
                    Email
                  </InputLabel>
                  <TextField
                    error={error}
                    placeholder="email@email.com"
                    helperText={error && "Invalid email. Try again?"}
                    size="small"
                    sx={{
                      width: "100%",
                      minWidth: {
                        sm: "270px",
                        xs: "270px",
                      },
                    }}
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <InputLabel
                    sx={{
                      color: "black",
                      fontSize: "14px",
                    }}
                    htmlFor="standard-adornment-amount"
                  >
                    Phone number
                  </InputLabel>
                  <TextField
                    size="small"
                    placeholder="xxx-xxx-xxxx"
                    sx={{
                      width: "100%",
                      minWidth: {
                        sm: "270px",
                        xs: "270px",
                      },
                    }}
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: {
                    xl: "1.5rem",
                    lg: "1.5rem",
                  },
                }}
              >
                <InputLabel
                  required
                  sx={{
                    color: "black",
                    fontSize: "14px",
                  }}
                  htmlFor="standard-adornment-amount"
                >
                  Password
                </InputLabel>
                <FormControl fullWidth>
                  <TextField
                    size="small"
                    placeholder="At least 8 characters"
                    sx={{
                      width: "100%",
                      minWidth: {
                        sm: "270px",
                        xs: "270px",
                      },
                    }}
                    variant="outlined"
                  />
                </FormControl>
              </Box>
              <Box
                className="action-box"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: {
                    xl: "1.5rem",
                    lg: "1.5rem",
                  },
                }}
              >
                <ActionButton text={"continue"} onClick={handleClick} />
              </Box>
              <div className="hr">
                <hr className="hr-text" />
                <p>or</p>
                <hr className="hr-text" />
              </div>
              <Box className="login-section-bottom">
                <Image src={google} alt="Google" />
                <Image src={facebook} alt="facebook" />
                <Image src={linkedin} alt="linkedin" />
                <Image src={twitter} alt="twitter" />
              </Box>
            </Box>
            <Box
              className="sign-up-wrapper"
              sx={{
                marginTop: "40px",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="text">Already have an account?</p>
              <ActionCall text={"Login"} route={"/login"} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="register-right"
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none",
          },
          width: "100%",
          background: "linear-gradient(#205DD3, #0F44AC)",
        }}
      >
        <Box
          className="wrapper"
          sx={{
            width: "100%",
          }}
        >
          <div className="vector-box">
            <Image src={launch} />
          </div>
          <div className="text-box">
            <div className="heading">
              <h1>
                Accelerate Your UX <br /> Design Process
              </h1>
            </div>
            <div className="grabber">
              <p>
                Create an account to get access to <br /> comprehensive library
                of:
              </p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Image src={check} />
                  Streamlined workspace for your projects
                </li>
                <li>
                  <Image src={check} />
                  Tested and proven method mini-guides
                </li>
                <li>
                  <li>
                    <Image src={check} />
                    Fantastic done-for-you templates
                  </li>
                </li>
              </ul>
            </div>
            <div className="close">
              <p>And so much more!</p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default register;
