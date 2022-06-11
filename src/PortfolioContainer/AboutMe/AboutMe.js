import React from "react";
import "./About.css";
// import Award from "../../img/award.png";
// import profile from "../assests/images/profile.png";
// import about from "../../assets/logo.png";
// import bg from "../../assets/animate.png";
import img from "../../assets/img.jpg";
const AboutMe = () => {
  return (
    <>
        <h1 className="a-title">About Me</h1>
     <div className="a">
            
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src={img}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 >Zannatul Binta Bahar</h1>
            <p className="a-sub">
            React Developer || Frontend Web Developer || Web Developer

            </p>
            <p className="a-desc">
            Hello Dear, I'm Zannat with solid knowledge of Frontend Web
              Development. My knowledge enables me to create modern &
              eye-catching responsive websites. I am looking to start my career
              as an entry-level software engineer with a reputed firm driven by
              technology.
            </p>
            <div className="a-award">
              {/* <img src={Award} alt="" className="a-award-img" /> */}
              <div className="a-award-texts">
                {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
                {/* <p className="a-award-desc">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                  and fugit.
                </p> */}
              </div>
            </div>
          </div>
        </div>

    </>
        
    
  );
};

export default AboutMe;
