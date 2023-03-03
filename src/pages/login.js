import { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { ActionButton, ActionCall } from "@/components/buttons";
import google from "../assets/icons/googleButton.svg";
import facebook from "../assets/icons/fbButton.svg";
import linkedin from "../assets/icons/linkedinButton.svg";
import twitter from "../assets/icons/twitterButton.svg";
import eye from "../assets/icons/eye.svg";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const handleLogin = () => {};

  const [error, setError] = useState(false)

  return (
    <div className="login-page">
      <nav className="login-header">
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <h5>methodloop</h5>
        </Box>
        <Box
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "flex",
              xs: "flex",
            },
            justifyContent: "flex-end",
            marginTop: "12px",
          }}
        >
          <ActionCall text={"Sign Up"} route={"/register"} />
        </Box>
      </nav>
      <section className="login-section-top">
        <Box
          className="section-top"
          component="form"
          sx={{
            marginTop: {
              xl: "unset",
              lg: "unset",
              md: "5rem",
              sm: "5rem",
              xs: "5rem",
            },
            width: {
              xl: "46vw",
              lg: "46vw",
              md: "46vw",
            },
            minWidth: {
              sm: "270px",
              xs: "270px",
            },
            maxWidth: "550px"
          }}
          noValidate
          autoComplete="off"
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
            }}
            className="heading"
          >
            Login
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <InputLabel
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "14px",
              }}
              htmlFor="standard-adornment-amount"
            >
              Email address
            </InputLabel>
            <FormControl fullWidth>
              <TextField
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
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <InputLabel
              sx={{
                fontWeight: "bold",
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
                variant="outlined"
                error={error}
                helperText={error && "Incorrect password. Try again?"}
                sx={{
                  width: "100%",
                  minWidth: {
                    sm: "270px",
                    xs: "270px",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Image src={eye} alt="eye"/>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="password-reset">
                <p>
                  Forgot your password?{" "}
                  <Link href="/reset-password">Reset password</Link>
                </p>
              </div>
            </FormControl>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ActionButton text={"Login"} onClick={handleLogin} />
          </Box>
        </Box>
      </section>
      <div className="hr">
        <hr className="hr-text" />
        <p>or</p>
        <hr className="hr-text" />
      </div>
      <section className="login-section-bottom">
        <Image src={google} alt="Google" />
        <Image src={facebook} alt="facebook" />
        <Image src={linkedin} alt="linkedin" />
        <Image src={twitter} alt="twitter" />
      </section>
      <section className="login-signup">
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
          <p className="text">Don`t have an account?</p>
          <ActionCall text={"Sign Up"} route={"/register"} />
        </Box>
      </section>
    </div>
  );
};

export default Login;
