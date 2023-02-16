import ellipse from "../Assets/Ellipse.png";
import line from "../Assets/mainprofileline.svg";
import insidellipse from "../Assets/insidecircle.svg";
import mainprofile from "../Assets/mainprofile.svg";
import profile1 from "../Assets/profile1.svg";
import profile2 from "../Assets/profile2.svg";
import profile3 from "../Assets/profile3.svg";
import profile4 from "../Assets/profile4.svg";
import profile5 from "../Assets/profile5.svg";
import profile6 from "../Assets/profile6.svg";








function section4() {
  return (
    <>
      <div
        style={{
          background: "#020024",
          paddingTop: "2rem",
          height: "90vh",
          textAlign: "left",
          marginTop: '10rem'
        }}
      >
        <div style={{ display: "flex", padding: "5rem", gap: "3rem" }}>
          <div style={{ width: "50%" , paddingLeft:"10rem"}}>
            <h1
              style={{
                color: "#c4af63",
                fontSize: "1.2rem",
                textAlign: "left",
              }}
            >
              REFFERAL✦
            </h1>
            <br />
            <h1 style={{ color: "#ee9a5b" }}>EARN REWARDS</h1>
            <br />
            <h1 style={{ color: "#fff" }}>FOR EVERY FRIENDS</h1>
            <h1 style={{ color: "#fff" }}>YOU REFER</h1>
            <div style={{ marginTop: "10rem" }}>
              <p
                style={{
                  borderStyle: "dashed",
                  height: "109px",
                  padding: "30px",
                  color: "#82828b",
                  textAlign: "left",
                  width: "350px",
                }}
              >
                Your invited :{" "}
                <span style={{ color: "#ee9a5b" }}>HXTRF12GV</span>{" "}
              </p>
            </div>
          </div>
          <div style={{ width: "50%", position: "relative" }}>
            <div style={{ position: "abosolute" }}>
              <img src={ellipse} alt="sdf" width={500} height={500}></img>

              <div style={{ position: "absolute", top: "50px" , left:"50px"}}>
                <img src={insidellipse} alt="sdf" width={400} height={400}></img>

                <div
                  style={{ position: "absolute", top: "-50px", left: "-30px" }}
                >
                  <img
                    src={line}
                    alt="sdf"
                    width={500}
                    height={500}
                  ></img>

                  <div
                    style={{ position: "absolute", top: "140px", left: "135px" }}
                  >
                    <img
                      src={insidellipse}
                      alt="sdf"
                      width={200}
                      height={200}
                    ></img>
                    <div
                    style={{ position: "absolute", top: "60px", left: "20px" }}
                  >
                    <img
                      src={mainprofile}
                      alt="sdf"
                      width={150}
                      height={100}
                    ></img>
                      <img
                      src={profile3}
                      alt="sdf"
                      style={{top:"12rem", left:"10rem", position:"absolute"}}
                      width={80}
                      height={100}
                    ></img>
                     <img
                      src={profile4}
                      alt="sdf"
                      style={{top:"-12rem", position:"absolute", left:"-6rem"}}
                      width={150}
                      height={100}
                    ></img>

<img
                      src={profile5}
                      alt="sdf"
                      style={{top:"13rem", position:"absolute", left:"-6rem"}}
                      width={150}
                      height={100}
                    ></img>



<img
                      src={profile6}
                      alt="sdf"
                      style={{top:"0rem", position:"absolute", left:"-15rem"}}
                      width={150}
                      height={100}
                    ></img>
                     
                    <div
                    style={{ position: "absolute", top: "-180px", left: "155px" }}
                  >
                    <img
                      src={profile1}
                      alt="sdf"
                      width={80}
                      height={100}
                    ></img>
                  </div>
                  <div
                    style={{ position: "absolute", top: "0px", left: "225px" }}
                  >
                    <img
                      src={profile2}
                      alt="sdf"
                      width={150}
                      height={100}
                    ></img>
                    
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default section4;
