import React from "react";
import c from "../../assets/logos/c.png";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import bootstrap from "../../assets/logos/bootstrap.png";
import tailwind from "../../assets/logos/tailwind.png";
import javascript from "../../assets/logos/javascript.png";
import es6 from "../../assets/logos/es6.png";
import react from "../../assets/logos/react.png";
import express from "../../assets/logos/express.png";
import node from "../../assets/logos/node.png";
import mongodb from "../../assets/logos/mongodb.png";
import figma from "../../assets/logos/figma.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import vscode from "../../assets/logos/vs-code.png";
import firebase from "../../assets/logos/firebase.png";
import heroku from "../../assets/logos/heroku.png";
import netlify from "../../assets/logos/netlify.png";
import api from "../../assets/logos/api.png";
import stripe from "../../assets/logos/stripe.png";

const MySkills = () => {
  return (
    // <div className="bg-[#207561] bg-opacity-10 py-20">
    <div id="skills" className="bg-opacity-10 py-20">
      <div className="container px-3 lg:px-0 mx-auto">
        <h1 className="text-center text-[#207561] text-4xl lg:text-5xl">
          My Skills
        </h1>
        <div className="flex justify-center">
          <span className="inline-block h-1 w-20 rounded-3xl bg-[#207561] mt-6 mb-4"></span>
        </div>
        <p className="text-center w-full sm:w-3/4 lg:w-2/3 mx-auto my-5 lg:my-8 text-base md:text-xl font-light">
          Here are some major industry standard skills that I use for my
          projects and development works.
        </p>

        <section className="text-gray-600 pt-8 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap">
              <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                  Language
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={c} />
                      </div>
                    </div>
                    <span className="text-lg font-light">C</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    {/* <div className="avatar">
                      <div className="w-14">
                        <img src={cpp} />
                      </div>
                    </div>
                    <span className="text-lg font-light">C++</span> */}
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={javascript} />
                      </div>
                    </div>
                    <span className="text-lg font-light">JavaScript</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={es6} />
                      </div>
                    </div>
                    <span className="text-lg font-light">ES6</span>
                  </div>
                </nav>
              </div>
              <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                  Frontend
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={react} />
                      </div>
                    </div>
                    <span className="text-lg font-light">React</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={html} />
                      </div>
                    </div>
                    <span className="text-lg font-light">HTML5</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={css} />
                      </div>
                    </div>
                    <span className="text-lg font-light">CSS3</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={bootstrap} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Bootstrap 5</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={tailwind} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Tailwind CSS</span>
                  </div>
                </nav>
              </div>
              <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                  Backend
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={mongodb} />
                      </div>
                    </div>
                    <span className="text-lg font-light">MongoDB</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={node} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Node.js</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={express} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Express.js</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={api} />
                      </div>
                    </div>
                    <span className="text-lg font-light">REST API</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={stripe} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Stripe Payment</span>
                  </div>
                </nav>
              </div>
              <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                  Platform
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={firebase} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Firebase</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={git} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Git</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={github} />
                      </div>
                    </div>
                    <span className="text-lg font-light">GitHub</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={heroku} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Heroku</span>
                  </div>

                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={netlify} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Netlify</span>
                  </div>
                </nav>
              </div>
              <div className="p-4 lg:w-1/5 sm:w-1/2 w-full">
                <h2 className="font-normal title-font tracking-widest text-gray-900 mb-4 mt-3 md:mt-0 text-2xl text-center sm:text-left">
                  Tools
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={vscode} />
                      </div>
                    </div>
                    <span className="text-lg font-light">
                      Visual Studio Code
                    </span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    {/* <div className="avatar">
                      <div className="w-14">
                        <img src={chrome} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Chrome Dev Tool</span> */}
                  </div>

                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    <div className="avatar">
                      <div className="w-14">
                        <img src={figma} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Figma</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-2 w-full p-2 rounded-md"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                  >
                    {/* <div className="avatar">
                      <div className="w-14">
                        <img src={photoshop} />
                      </div>
                    </div>
                    <span className="text-lg font-light">Photoshop</span> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MySkills;