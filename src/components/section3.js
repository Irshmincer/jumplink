import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import coins from "../Assets/coins.svg";
import cricket from "../Assets/2cricket.png";
import play from "../Assets/play.svg";
import playground from "../Assets/playground.png";
import batsman from "../Assets/batsman.png"

function section3() {
  return (
    <>
      <div
        style={{
          marginTop: "8rem",
          background: "#020024",
          height: "80vh",
          padding: "5rem",
          textAlign: "left",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", color: "white" }}>
            <h1
              style={{
                color: "#c4af63",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              GET.PLAY.EARN ✦
            </h1>
            <h1>
              HOW TO <br />
            </h1>
            <h1>GET. PLAY. EARN?</h1>
          </div>

          <p style={{ textAlign: "center", color: "white" }}>
            With MCL, earning made simple with just two steps. By playing your
            favourite <br></br>cricket game, you can win huge real cash.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Card sx={{ width: 450, borderRadius: "20px" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                style={{
                  background: `linear-gradient(131deg, rgb(13 0 76) 0%, rgba(137,0,222,1) 102%)`,
                  height: "300px",
                  borderRaduis: "20px",
                }}
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 10,
                  left: "10%",
                  textAlign: "left",
                  padding: "20px",
                }}
              >
                <h1 style={{ color: "gold" }}>01.</h1>
                <br />
                <h3
                  style={{
                    fontSize: "30px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  Get your NFTs from market place
                </h3>
                <h3
                  style={{
                    fontSize: "20px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  You can explore remarkable NFTs from Jump.Trade market place.
                </h3>
              </div>
            </div>

            <CardContent
              style={{
                background: "black",
                color: "white",
                textAlign: "center",
                height: "200px",
                padding: "3rem",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                <img src={play} alt="play"></img>
              </Typography>
              <Typography variant="body2" color="white">
                How to Get NFTs from market Place?
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: 450, borderRadius: "20px" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                style={{
                  background: ` linear-gradient(136deg, rgba(42,64,0,1) 0%, rgba(0,58,83,1) 83%)
                `,
                  height: "300px",
                  borderRaduis: "20px",
                }}
                src={cricket}
                component="img"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 10,
                  left: "10%",
                  textAlign: "left",
                  padding: "20px",
                }}
              >
                <h1 style={{ color: "gold" }}>02.</h1>
                <br />
                <h3
                  style={{
                    fontSize: "30px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  Play our cricket game in MCL App
                </h3>
                <h3
                  style={{
                    fontSize: "20px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  With MCL, earning made simple with just two steps.
                </h3>
              </div>
            </div>
            <CardContent
              style={{
                background: "black",
                color: "white",
                textAlign: "center",
                height: "200px",
                padding: "3rem",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                <img src={play} alt="play"></img>{" "}
              </Typography>
              <Typography variant="body2" color="white">
                How to play in MCL with NFTs?
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: 450, borderRadius: "20px" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                style={{
                  background: `linear-gradient(131deg, rgba(93,14,78,1) 0%, rgba(114,40,7,1) 33%)`,
                  height: "300px",
                }}
                src={coins}
                height="12"
                component="img"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 10,
                  left: "10%",
                  textAlign: "left",
                  padding: "20px",
                }}
              >
                <h1 style={{ color: "gold" }}>03.</h1>
                <br />
                <h3
                  style={{
                    fontSize: "30px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  Win real cash worth of ₹10 lakhs daily
                </h3>
                <h3
                  style={{
                    fontSize: "20px",
                    fontFamily: `'Nunito Sans', sans-serif`,
                  }}
                >
                  With MCL, earning made simple with just two steps.
                </h3>
              </div>
            </div>
            <CardContent
              style={{
                background: "black",
                color: "white",
                textAlign: "center",
                height: "200px",
                padding: "3rem",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                <img src={play} alt="play"></img>
              </Typography>
              <Typography variant="body2" color="white">
                How to win cash from MCL?
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <div style={{marginTop:'13rem '}}>
        <div style={{position:'relative'}} >
          <img width="100%"src={playground} alt="playground"></img>
          <div style={{  position: 'absolute', 
          top: '10rem', 
          left:'30rem', 
         
         }} >
 <h1
              style={{
                color: "#c4af63",
                textAlign: "left",
                fontSize: "1.2rem",
                
              }}
            >
              HOT STUFF ✦
            </h1>
            <h1 style={{color:'white'}}>
              RARE COLLECTIONS
            </h1>
            <h6 style={{color:'#E2E2E2'}}>
            Rare collections of bats available for trading. Bat collections signed by legends <br/> like Sir DON BRADMAN, SACHIN TENDULKAR…
            </h6>
            <div style={{display:'Flex', gap:"10px", marginTop:'10rem'}}>
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
          
        </Card>

            </div>


              
                    </div>
        </div>
      </div>
    </>
  );
}

export default section3;
