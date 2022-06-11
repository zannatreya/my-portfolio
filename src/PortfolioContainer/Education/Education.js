import React from "react";
import edu from "../../assets/logos/iiuc_logo.jpg";
// import cpi from "../../assets/logos/cpi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div id="education">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-[#207561] text-4xl lg:text-5xl">
            My Education
          </h1>
          <div className="flex justify-center">
            <span className="inline-block h-1 w-20 rounded-3xl bg-[#207561] mt-6 mb-3"></span>
          </div>
          <p className="text-center w-full sm:w-3/4 lg:w-2/4 mx-auto mt-5 lg:my-8 text-base md:text-xl font-light">
            I started my engineering journey with Bachelor of Science in Computer Science and Engineering.
          </p>
          <div className="flex flex-wrap -m-4 pt-8 mt-0 md:mt-5 mb-12">
            <div className="p-4 lg:w-1/2 my-3 mx-auto">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover object-center sm:mb-0 mb-4"
                  src={edu}
                />
                <div className="flex-grow sm:pl-4">
                  <h2 className="title-font font-medium text-2xl text-gray-900">
                    B.Sc in Computer Science and Engineering
                  </h2>
                  <h3 className="text-gray-800 text-lg font-medium mb-3">
                    International Islamic University Chittagong
                  </h3>
                  <a href="https://www.iiuc.ac.bd/" target="_blank">
                    <span className="inline-flex items-center gap-2 text-[#207561] font-medium">
                      <FontAwesomeIcon icon={faGlobe} />
                      Website
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;