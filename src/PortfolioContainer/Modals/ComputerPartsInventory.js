import React from 'react';
import image1 from "../../assets/project-1/computer-parts.PNG";
import image2 from "../../assets/project-1/services.PNG";
import image3 from "../../assets/project-1/flash-sale.PNG";
import image4 from "../../assets/project-1/business-summary.PNG";

const ComputerPartsInventory = () => {
    return (
<div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag  */}
      <input type="checkbox" id="cyclex-project-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box sm:max-w-xl lg:max-w-4xl">
          <label
            for="cyclex-project-modal"
            class="btn btn-sm border-0 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-semibold text-2xl text-center">Computer Parts</h3>
          <p class="py-4 text-center">
            Product Manufacturer Portal for managing orders
          </p>
          <div>
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <img className="border" src={image1} />
              </div>
              <div id="item2" class="carousel-item w-full">
                <img className="border" src={image2} />
              </div>
              <div id="item3" class="carousel-item w-full">
                <img className="border" src={image3} />
              </div>
              <div id="item4" class="carousel-item w-full">
                <img className="border" src={image4} />
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#item1" class="btn btn-xs bg-[#207561] border-0">
                1
              </a>
              <a href="#item2" class="btn btn-xs bg-[#207561] border-0">
                2
              </a>
              <a href="#item3" class="btn btn-xs bg-[#207561] border-0">
                3
              </a>
              <a href="#item4" class="btn btn-xs bg-[#207561] border-0">
                4
              </a>
            </div>
            <div className="my-3">
              <h3 className="font-normal text-lg">Technology Used</h3>
              <div className="flex flex-wrap gap-2 mt-3 mb-6">
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  React
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  Express
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  MongoDB
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  daisyUI
                </span>
                <span class="badge md:badge-md border-[#207561] bg-white text-[#207561]">
                  Firebase
                </span>
              </div>
            </div>
            <div className="my-3">
              <h3 className="font-normal text-lg">Features</h3>
              <ul className="px-3 lg:px-6 py-4 font-light">
                <li className="" style={{ listStyleType: "disc" }}>
                  Admin dashboard, manage user, add product, delete product,
                  manage orders
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Client dashboard, place order, post review, cancel order,
                  payment
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Register, login, social login, password reset, profile update
                </li>
              </ul>
            </div>
          </div>
          <div class="py-3 text-center md:text-left">
            <a
              href="https://manufacturer-website-57646.web.app/"
              target="_blank"
              class="btn font-medium btn-sm bg-[#207561]"
            >
              Live View
            </a>
            <a
              href="https://github.com/zannatreya/manufacturer-client-side"
              target="_blank"
              class="btn font-medium btn-sm bg-[#207561] mx-3"
            >
              Client Repo
            </a>
            <a
              href="https://github.com/zannatreya/manufacturer-server-side"
              target="_blank"
              class="btn font-medium btn-sm bg-[#207561]"
            >
              Server Repo
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ComputerPartsInventory;