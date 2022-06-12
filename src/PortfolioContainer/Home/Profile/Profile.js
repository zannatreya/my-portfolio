import React from "react";
// import Typical from "react-typical";
// import ScrollService from "../../../utilities/ScrollService";
import { Typewriter } from "react-simple-typewriter"
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://github.com/zannatreya">
                                <i className="fa fa-github" />
                            </a>
                            <a href="https://www.linkedin.com/in/zannatul-binta-bahar/">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="#">
                                <i className="fa fa-google-plus-square" />
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube-square" />
                            </a>
                            <a href="#">
                                <i className="fa fa-facebook-square" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Zannatul Binta Bahar</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                            <Typewriter words={["Frontend Developer", "ReactJS Developer", " Professional Coder.", "Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={10} />
                                {/* <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Frontend Developer 💻",
                                        1000,
                                        "ReactJS Developer 🌐",
                                        1000,
                                        "Javascript Developer",
                                        1000,
                                        
                                        
                                    ]}
                                /> */}
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            Knack of building applications with Frontend operations.
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn"
                            // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>

                        <a href="https://drive.google.com/file/d/1cqdUMi50JS36OyW645zqbr7Oq_RyfAgq/view?usp=sharing" target="_blank" rel="noreferrer">
                            <button className="btn primary-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
