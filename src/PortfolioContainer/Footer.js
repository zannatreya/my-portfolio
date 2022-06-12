import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer class="bg-emerald-200 bg-opacity-25 body-font">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-col md:flex-row justify-center py-5 text-center gap-2 md:gap-8">
            <div className="col">
              <a className="font-medium" href="#navbar-section">
                Home
              </a>
            </div>
            <div className="col">
              <a className="font-medium" href="#aboutMe">
                About
              </a>
            </div>
            <div className="col">
              <a className="font-medium" href="#skills">
                Skills
              </a>
            </div>
            <div className="col">
              <a className="font-medium" href="#education">
                Education
              </a>
            </div>
            <div className="col">
              <a className="font-medium" href="#projects">
                Projects
              </a>
            </div>
            <div className="col">
              <a className="font-medium" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-center text-center mt-3 mb-6 gap-8">
            <div className="col">
              <a target="_blank" href="https://github.com/zannatreya">
                <FontAwesomeIcon
                  className="text-[#207561] text-3xl"
                  icon={faFacebook}
                />
              </a>
            </div>
            <div className="col">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/zannatul-binta-bahar/"
              >
                <FontAwesomeIcon
                  className="text-[#207561] text-3xl"
                  icon={faLinkedin}
                />
              </a>
            </div>
            <div className="col">
              <a target="_blank" href="https://github.com/zannatreya">
                <FontAwesomeIcon
                  className="text-[#207561] text-3xl"
                  icon={faTwitter}
                />
              </a>
            </div>
            <div className="col">
              <a target="_blank" href="https://github.com/zannatreya">
                <FontAwesomeIcon
                  className="text-[#207561] text-3xl"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
          <div className="text-center pb-3">
            <p className="">
               copyright &copy; 2022 Zannatul Binta Bahar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;