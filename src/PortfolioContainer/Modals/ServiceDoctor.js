import React from 'react';
import image1 from "../../assets/project-3/image1.PNG";
import image2 from "../../assets/project-3/image2.PNG";
import image3 from "../../assets/project-3/image3.PNG";

const ServiceDoctor = () => {
    return (
        <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag  */}
      <input type="checkbox" id="service-project-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box sm:max-w-xl lg:max-w-4xl">
          <label
            for="service-project-modal"
            class="btn btn-sm border-0 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-semibold text-2xl text-center">
            Individual Service Provider
          </h3>
          <p class="py-4 text-center">
            Service booking website for individual service provider's
          </p>
          <div>
            <div class="carousel w-full">
              <div id="serviceitem1" class="carousel-item w-full">
                <img className="border" src={image1} />
              </div>
              <div id="serviceitem2" class="carousel-item w-full">
                <img className="border" src={image2} />
              </div>
              <div id="serviceitem3" class="carousel-item w-full">
                <img className="border" src={image3} />
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#serviceitem1" class="btn btn-xs bg-[#207561] border-0">
                1
              </a>
              <a href="#serviceitem2" class="btn btn-xs bg-[#207561] border-0">
                2
              </a>
              <a href="#serviceitem3" class="btn btn-xs bg-[#207561] border-0">
                3
              </a>
            </div>
            <div className="my-3">
              <h3 className="font-normal text-lg">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mt-3 mb-6">
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  React
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  Firebase
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  API
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  Bootstrap
                </span>
              </div>
            </div>
            <div className="my-3">
              <h3 className="font-normal text-lg">Features</h3>
              <ul className="px-3 lg:px-6 py-4 font-light">
                <li className="" style={{ listStyleType: "disc" }}>
                  Register, login, social login, email verification, password
                  reset
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Show service card, clicking on card will take to service
                  details page
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Fill up form with necessary information for booking
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Subscribe section to get email notification.
                </li>
              </ul>
            </div>
          </div>
          <div class="py-3 text-center md:text-left">
            <a
              href="https://individual-service-provider.web.app/"
              target="_blank"
              class="btn font-medium btn-sm bg-[#207561]"
            >
              Live View
            </a>
            <a
              href="https://github.com/zannatreya/independent-service-provider"
              target="_blank"
              class="btn font-medium btn-sm bg-[#207561] mx-3"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceDoctor;