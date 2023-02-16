import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import discord from "../Assets/discord.svg";
import linkedIn from "../Assets/linkedIn.svg";
import twitter from "../Assets/twitter.svg";
import instagram from "../Assets/insta.svg";
import youtube from "../Assets/youtube.svg";
import logo from "../Assets/logo.svg";
import googleplay from "../Assets/googleplay.svg";
import apple from "../Assets/apple.svg";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const UseStyless = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: `rgb(239, 158, 94)`,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: `rgb(239, 158, 94)`,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: `rgb(239, 158, 94)`,
    },
    "& .MuiOutlinedInput-input": {
      color: `rgb(239, 158, 94)`,
    },
    "&:hover .MuiOutlinedInput-input": {
      color: `rgb(239, 158, 94)`,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: `rgb(239, 158, 94)`,
    },
    "& .MuiInputLabel-outlined": {
      color: `rgb(239, 158, 94)`,
    },
    "&:hover .MuiInputLabel-outlined": {
      color: `rgb(239, 158, 94)`,
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: `rgb(239, 158, 94)`,
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: " #141321",
  ...theme.typography.body2,
  padding: "20px",
  textAlign: "center",
}));

function footer() {
  const classes = UseStyless();

  return (
    <>
      <div style={{ background: "#141321", height: "60vh", padding: "3rem" }}>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
              <Item
                style={{
                  color: "white",
                  fontSize: "60px",
                  fontFamily: `'Nunito Sans', sans-serif`,
                }}
              >
                JOIN THE COMMUNITY
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Item
                style={{
                  color: "white",
                  fontFamily: `'Nunito Sans', sans-serif`,
                  fontSize: "20px",
                  fontWeight: "300",
                }}
              >
                Rare collections of bats available for trading. Bat collections{" "}
                <br />
                signed by legends like Sir DON BRADMAN, SACHIN TENDULKAR…
              </Item>
            </Box>
            <Box gridColumn="span 12">
              <Stack
                spacing={4}
                direction="row"
                style={{ justifyContent: "center" }}
              >
                <Item>
                  <img src={discord} alt="discord" />
                </Item>
                <Item>
                  <img src={linkedIn} alt="linkedIn" />
                </Item>
                <Item>
                  <img src={twitter} alt="twitter" />
                </Item>
                <Item>
                  <img src={instagram} alt="instagram" />
                </Item>
                <Item>
                  <img src={youtube} alt="youtube" />
                </Item>
              </Stack>
            </Box>
          </Box>
        </Box>
      </div>

      <div
        style={{
          background: "#020024",
          height: "50vh",
          padding: "3rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <div style={{ width: "50%", color: "white" , paddingLeft: '100px'}}>
          <img src={logo} alt="logo"></img>

          <h6
            style={{
              marginTop: "2rem",
              fontFamily: `'Nunito Sans', sans-serif`,
              lineHeight: "1.5",
            }}
          >
            Jump.trade is one of the world's largest NFT marketplace where you{" "}
            <br />
            can buy & trade a lot of top digital collectibles including MCL
            cricket
            <br />
            game NFTs and other sports NFTs
          </h6>

          <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
            <div
              style={{
                color: `rgb(239, 158, 94)`,
                border: ` 1px solid rgb(239, 158, 94)`,
                borderRadius: "50px",
                padding: "14px",
                width: "160px",
              }}
            >
              <img src={googleplay} alt="googleplay" />
              &nbsp; Google play
            </div>

            <div
              style={{
                color: `rgb(239, 158, 94)`,
                border: ` 1px solid rgb(239, 158, 94)`,
                borderRadius: "50px",
                padding: "14px",
                width: "160px",
              }}
            >
              <img src={apple} alt="googleplay" />
              &nbsp; Apple
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid white", height: "30vh" }}></hr>
        <div style={{ width: "50%" , paddingLeft:"50px"}}>
          <h1 style={{ color: "white", fontSize: "20px" }}>
            Get the Latest Updates on Jump.trade <br />
            NFT Marketplace
          </h1>
          <div>
            <TextField
              style={{ marginTop: "1rem" }}
              className={classes.root}
              variant="outlined"
              label="Enter your email"
            />
          </div>

          <div
            style={{
              display: "flex",
              textDecoration: "underline",
              marginTop: "1rem",
              color: "white",
              fontFamily: `'Nunito Sans', sans-serif`,
              fontSize: "1.1rem",
              lineHeight: "2.2",
              paddingLeft: "0px",
            }}
          >
            <ul style={{ listStyleType: "none", padding: "0px" }}>
              <li>Marketplace</li>
              <li>MCL Game</li>
              <li>Terms & Condiditons</li>
              <li>Privacy Policy</li>
            </ul>

            <ul style={{ listStyleType: "none" }}>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Instruction</li>
            </ul>

            <ul style={{ listStyleType: "none" }}>
              <li>Release Notes</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
