import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import batsman from "../Assets/batsman.png";
import batsman2 from "../Assets/batman3.png";
import batsman3 from "../Assets/batsman3.png";
import heart from "../Assets/heart.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";



function section5() {
  return (
    <>
        <div style={{display: 'flex' , justifyContent: 'center', textAlign:"center", marginTop:'5rem'}}>
            <div>

            <h1 style={{color:'#c4af63', textAlign:'center', fontSize:'1.2rem'}} >REFFERAL✦</h1>
            <h1 style={{color:'white', fontFamily: `'Nunito Sans', sans-serif`, marginTop:'1rem'}}>DISCOVER NFTS</h1>
            <Stack
                spacing={4}
                direction="row"
                style={{ justifyContent: "center", marginTop: '2rem' }}
              >
                <Button
                style={{
                  background: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="contained"
              >
            Live Auction
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Sold
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Batsman
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Bowler
              </Button>
              <Button
                style={{
                  color: "#ed8a52",
                  borderColor: "#ed8a52",
                  borderRadius: "50px",
                }}
                variant="outlined"
              >
                Bat
              </Button>
             
              </Stack>
            </div>
        </div>

      <div
        style={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "center",
          gap: "2rem",
          paddingBottom:'5rem'
        }}
      >
        <Card sx={{ width: 300, borderRadius: "20px" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                background: `linear-gradient(131deg, rgb(13 0 76) 0%, rgba(137,0,222,1) 102%)`,
                height: "300px",
                borderRaduis: "20px",
              }}
              image={batsman}
              component="img"
            />
          </div>

          <CardContent
            style={{
              background: "#1D1C2C",
              color: "white",
              textAlign: "center",
              height: "200px",
              padding: "2rem",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              <div style={{ display: "flex", justifyContent: "space-between" ,  }}>
                <div>
                  <h6 style={{ textAlign: "left" }}>@MR K</h6>
                  <h6 style={{ textAlign: "left" }}>Meta Genuis #472</h6>
                </div>
                <div style={{ justifyContent: "end" }}>
                  <img  width="16" src={heart} alt="heart" />
                </div>
              </div>
              <hr></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
              </div>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 300, borderRadius: "20px" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                background: ` linear-gradient(136deg, rgba(42,64,0,1) 0%, rgba(0,58,83,1) 83%)
                `,
                height: "300px",
                borderRaduis: "20px",
              }}
              image={batsman2}
              component="img"
            />
          </div>
          <CardContent
            style={{
              background: "#1D1C2C",
              color: "white",
              textAlign: "center",
              height: "200px",
              padding: "2rem",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6 style={{ textAlign: "left" }}>@MR K</h6>
                  <h6 style={{ textAlign: "left" }}>Meta Genuis #472</h6>
                </div>
                <div style={{ justifyContent: "end" }}>
                  <img width="16" src={heart} alt="heart" />
                </div>
              </div>
              <hr></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
              </div>
            </Typography>
            
          </CardContent>
        </Card>

        <Card sx={{ width: 300, borderRadius: "20px" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                background: `linear-gradient(131deg, rgba(93,14,78,1) 0%, rgba(114,40,7,1) 33%)`,
                height: "300px",
              }}
              image={batsman3}
              height="12"
              component="img"
            />
          </div>
          <CardContent
            style={{
              background: "#1D1C2C",
              color: "white",
              textAlign: "center",
              height: "200px",
              padding: "2rem",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6 style={{ textAlign: "left" }}>@MR K</h6>
                  <h6 style={{ textAlign: "left" }}>Meta Genuis #472</h6>
                </div>
                <div style={{ justifyContent: "end" }}>
                  <img width="16" src={heart} alt="heart" />
                </div>
              </div>
              <hr></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
              </div>
            </Typography>
            
          </CardContent>
        </Card>
        <Card sx={{ width: 300, borderRadius: "20px" }}>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{
                background: `linear-gradient(131deg, rgba(93,14,78,1) 0%, rgba(114,40,7,1) 33%)`,
                height: "300px",
              }}
              image={batsman}
              height="12"
              component="img"
            />
          </div>
          <CardContent
            style={{
              background: "#1D1C2C",
              color: "white",
              textAlign: "center",
              height: "200px",
              padding: "2rem",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6 style={{ textAlign: "left" }}>@MR K</h6>
                  <h6 style={{ textAlign: "left" }}>Meta Genuis #472</h6>
                </div>
                <div style={{ justifyContent: "end" }}>
                  <img width="16" src={heart} alt="heart" />
                </div>
              </div>
              <hr></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>Bid Price</h6>
                  <h6>$49</h6>
                </div>
              </div>
            </Typography>
           
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default section5;
