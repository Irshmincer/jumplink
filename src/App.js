import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Assets/logo.svg";
import DiscordIcon from "./Assets/smaldiscord.svg";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import video from "./Assets/video1.mp4";
import star from "./Assets/star.svg";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  color: "white",

  background: "transparent",
  textAlign: "left",
  alignItems: "center",
  display: "flex",
  marginTop: "5rem",
  padding: `0px 10px 0px 75px`,
  fontWeight: "800",
  fontFamily: `'Nunito Sans', sans-serif`,
  fontSize: "40px",
}));

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          background: "#020024",
          padding: "10px 6rem ",
          fontFamily: "Montserrat",
          fontSize: "1.15rem",
          fontWeight: "400",
        }}
      >
        <img src={logo} alt="Logo SVG" />

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ml-auto">
            <Stack spacing={4} direction="row">
              <li className="nav-item active">
                <a className="nav-link" href="# " style={{ color: "white",                 fontFamily: `'Nunito Sans', sans-serif`, }}>
                  Drop
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="# " style={{ color: "white",                 fontFamily: `'Nunito Sans', sans-serif`, }}>
                  MCL Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="# " style={{ color: "white",                 fontFamily: `'Nunito Sans', sans-serif`, }}>
                  Contest
                </a>
              </li>

              <Button
                style={{
                  background: "#ed8a52",
                  borderRadius: "50px",
                  fontFamily: `'Nunito Sans', sans-serif`,
                }}
                variant="contained"
              >
                Market Place
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                  fontFamily: `'Nunito Sans', sans-serif`,
                }}
                variant="outlined"
              >
                Login
              </Button>
              <Button
                style={{
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                {" "}
                <img src={DiscordIcon} alt="discordIcon" />
              </Button>
            </Stack>
          </ul>
        </div>
      </nav>

      <div style={{ height: "90vh", width: "100%", position: "relative" }}>
        <video
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            zIndex: 0,
          }}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            zIndex: 1,
            position: "relative",
            textAlign: "left",
            color: "#dc0000",
            padding: " 10px",
            height: "90vh",
            background: `linear-gradient(90deg, rgba(2,0,36,1) 26%, rgba(9,10,121,0) 100%)`,
          }}
        >
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid item xs={4}>
                  <Item>
                    <img src={star} alt="stars"></img>
                  </Item>
                  <Item style={{ marginTop: "1rem" }}>
                    DISCOVER. <br />
                    COLLECT. AND &nbsp; TRADE
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ marginTop: "2rem" }}>REMARKABLE NFTS</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item
                    style={{
                      fontSize: "20px",
                      fontWeight: 300,
                      marginTop: "2rem",
                    }}
                  >
                    Discover your favourite NFTs from the wide range of
                    collection, purchase from our Market place and trade to
                    earn.
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Stack
              spacing={6}
              direction="row"
              style={{
                padding: `20px 0px 0px 70px`,
                fontFamily: `'Nunito Sans', sans-serif`,
                marginTop: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{ borderLeft: `2px solid #44414a`, height: " 80px" }}
                ></div>
                <div>
                  <h1 style={{ color: "white" }}>50k</h1>
                  <h3 style={{ color: "#8c8c93", fontSize: "20px" }}>
                    Collections
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{ borderLeft: `2px solid #44414a`, height: " 80px" }}
                ></div>
                <div>
                  <h1 style={{ color: "white" }}>20k+</h1>
                  <h3 style={{ color: "#8c8c93", fontSize: "20px" }}>
                    Uniques
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  style={{ borderLeft: `2px solid #44414a`, height: " 80px" }}
                ></div>
                <div>
                  <h1 style={{ color: "white" }}>99k+</h1>
                  <h3 style={{ color: "#8c8c93", fontSize: "20px" }}>
                    Auctions
                  </h3>
                </div>
              </div>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              style={{
                padding: `20px 0px 0px 70px`,
                fontFamily: `'Nunito Sans', sans-serif`,
                marginTop: "1rem",
              }}
            >
              <Button
                style={{
                  background: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="contained"
              >
                Explore NFTs
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                }}
                variant="text"
              >
                Watch Video
              </Button>
            </Stack>
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
