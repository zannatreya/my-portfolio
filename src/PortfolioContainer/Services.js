import {
    AdjustmentsIcon,
    ClipboardListIcon,
    CodeIcon,
    DesktopComputerIcon,
    DeviceMobileIcon,
    PuzzleIcon,
    TerminalIcon,
  } from "@heroicons/react/solid";
  import React from "react";
  import './services.css';
  
  const Services = () => {
    return (
      <div className="bg-[#EFEFEF]">
        <div className="bg-[#EFEFEF] container pb-20 pt-16 font-ralway">
          <div className="mb-16  flex flex-col items-start  ">
            <h1 className="text-5xl  font-bold  text-[#112B3C]">
              My <span className="text-orange-600">Services</span>{" "}
            </h1>
            <p className="ml-1 mt-2 text-center  text-gray-600 font-semibold">
              What type of service i can offer?
              {/* <p className="w-full   bg-orange-500 rounded-full mt-2 h-[2px]"></p> */}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body bg-neutral">
  <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
     <DesktopComputerIcon className="icon w-10 h-10 font-bold " />
  </span>
    <h2 class="card-title"> Web Design</h2>
    <p className="text-center text-gray-300 font-semibold mt-3 "> I design attractive , modern and eye catching websites which
                  catches Visitor's Eye.</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
              
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                {/* <img class="mask mask-circle" src="https://api.lorem.space/image/shoes?w=160&h=160" /> */}
                  <DesktopComputerIcon className="icon w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">
                  Web Design
                </h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I design attractive , modern and eye catching websites which
                  catches Visitor's Eye.
                </p>
              </div>
            </div>
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                  <CodeIcon className="w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">
                  Web Development
                </h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I also work with backend so I can make web applications for
                  making website functionalities which makes a great experience
                </p>
              </div>
            </div>
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                  <DeviceMobileIcon className="w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">
                  Responsive Design
                </h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I also design Responsive Websites for that You can use your
                  website in any devices
                </p>
              </div>
            </div>
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                  <ClipboardListIcon className="w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">SPA</h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I can create single-page applications using React JS. Currently,
                  the demand for single-page applications is much higher in the
                  marketplace
                </p>
              </div>
            </div>
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                  <PuzzleIcon className="w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">Bugs Fix</h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I can fix any bug in any of the technologies mentioned above. Or
                  any other problem I can fix
                </p>
              </div>
            </div>
  
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold p-3 rounded-full">
                  <AdjustmentsIcon className="w-10 h-10 font-bold " />
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl font-bold text-center mt-3 ">
                  Frontend Support
                </h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                  I can help in anything related to front-end web development and
                  if there is any problem, I can solve it. So don't hesitate to
                  knock me out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  