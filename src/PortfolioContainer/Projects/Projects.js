import React from "react";
import project1 from "../../assets/project-1/computer-parts.PNG";
import project2 from "../../assets/project-2/image1.PNG";
import project3 from "../../assets/project-3/image1.PNG";
import ComputerPartsInventory from "../Modals/ComputerPartsInventory";
import FruitsLabInventory from "../Modals/FruitsLabInventory";
import ServiceDoctor from "../Modals/ServiceDoctor";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-emerald-200 bg-opacity-25">
      <div id="aboutMe" className="container mx-auto py-12 md:py-14 lg:py-20">
        <h1 className="text-center text-[#207561] text-4xl lg:text-5xl mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-5 md:px-6 gap-8">
          {/* project-1 */}
          <div className=" card border shadow-md border-gray-200 rounded-md bg-white">
            <div className="p-3">
              <img
                src={project1}
                alt=""
                className="shadow-md border rounded-sm border-gray-100"
              />
            </div>
            <div className="card-body pt-3 pb-3 px-0">
              <div className="px-5">
                <h2 className="text-2xl text-center mt-2">
                  Computer parts
                  {/* <div className="badge badge-success">NEW</div> */}
                </h2>
                <p className="text-sm text-center mt-4">
                  Product Manufacturer Portal for managing orders
                </p>
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
                    Register, login, social login, password reset, profile
                    update
                  </li>
                </ul>
              </div>
              <div className="card-actions flex-col items-center justify-center">
                <div className="flex flex-row mb-3">
                  <label
                    htmlFor="cyclex-project-modal"
                    className="btn modal-button px-3 rounded-lg bg-[#207561] text-white font-medium border-0"
                  >
                    VIEW DETAILS
                  </label>
                </div>
                <div className="border-t pt-3 pb-0 px-0 flex flex-wrap gap-3 justify-center w-full">
                  <div className="badge bg-[#207561] px-3 border-0 py-2">
                    React
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    Express
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    MongoDB
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    daisyUI
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project-2 */}
          <div className="card border shadow-md border-gray-200 rounded-md bg-white">
            <div className="p-3">
              <img
                src={project2}
                alt=""
                className="shadow-md border rounded-sm border-gray-100"
              />
            </div>
            <div className="card-body pt-3 pb-3 px-0">
              <div className="px-5">
                <h2 className="text-2xl text-center mt-2">
                  FruitLab Inventory
                  {/* <div className="badge badge-success">NEW</div> */}
                </h2>
                <p className="text-sm text-center font-medium mt-4">
                  Inventory system for fruits
                </p>
                <ul className="px-3 lg:px-6 py-4 font-light">
                  <li style={{ listStyleType: "disc" }}>
                    Add inventory item, delete inventory item, update item
                    quantity, update shipment
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Register, login, social login, email verification, password
                    reset, profile update
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Awesome user interface, statistics in home page
                  </li>
                </ul>
              </div>
              <div className="card-actions flex-col items-center justify-center">
                <div className="flex flex-row mb-3 gap-4">
                  <label
                    htmlFor="automobile-project-modal"
                    className="btn modal-button px-3 rounded-lg bg-[#207561] text-white font-medium border-0"
                  >
                    VIEW DETAILS
                  </label>
                </div>
                <div className="border-t pt-3 pb-0 px-0 flex flex-wrap gap-3 justify-center w-full">
                  <div className="badge bg-[#207561] px-3 border-0 py-2">
                    React
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    Express
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    MongoDB
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project-3 */}
          <div className="card border shadow-md border-gray-200 rounded-md bg-white">
            <div className="p-3">
              <img
                src={project3}
                alt="Cyclex Tools"
                className="shadow-md border rounded-sm border-gray-100"
              />
            </div>
            <div className="card-body pt-3 pb-3 px-0">
              <div className="px-5">
                <h2 className="text-2xl text-center mt-2">
                  Individual Service Provider
                  {/* <div className="badge badge-success">NEW</div> */}
                </h2>
                <p className="text-sm text-center font-medium mt-4">
                  Service booking website for individual service provider's
                </p>
                <ul className="px-3 lg:px-6 py-4 font-light">
                  <li style={{ listStyleType: "disc" }}>
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
              <div className="card-actions flex-col items-center justify-center">
                <div className="flex flex-row mb-3 gap-4">
                  <label
                    htmlFor="service-project-modal"
                    className="btn modal-button px-3 rounded-lg bg-[#207561] text-white font-medium border-0"
                  >
                    VIEW DETAILS
                  </label>
                </div>
                <div className="border-t pt-3 pb-0 px-0 flex flex-wrap gap-3 justify-center w-full">
                  <div className="badge bg-[#207561] px-3 border-0 py-2">
                    React
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    Firebase
                  </div>
                  <div className="badge bg-[#207561] border-0 py-2">API</div>
                  <div className="badge bg-[#207561] border-0 py-2">
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <ComputerPartsInventory />
        <FruitsLabInventory />
        <ServiceDoctor />
      </div>
    </div>
  );
};

export default Projects;