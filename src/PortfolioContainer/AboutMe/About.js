import React from 'react';
import img from "../../assets/img.jpg";
import "./About.css";

const About = () => {
    return (
        <>
        <h1 className="text-center text-[#207561] text-4xl lg:text-5xl">
                About Me
          </h1>
          <div className="flex justify-center">
            <span className="inline-block h-1 w-20 rounded-3xl bg-[#207561] mt-6 mb-6"></span>
          </div> 
          <div class="hero  bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-30'>
    <h1 className="text-3xl font-semibold">Zannatul Binta Bahar</h1>
            <p className="a-sub text-xl">
            React Developer || Frontend Web Developer || Web Developer

            </p>
            <p className="a-desc">
            Hello Dear, I'm Zannat with solid knowledge of Frontend Web
              Development. My knowledge enables me to create modern &
              eye-catching responsive websites. I am looking to start my career
              as an entry-level software engineer with a reputed firm driven by
              technology.
            </p>
    </div>
  </div>
</div>
        </>
        
  );
};
export default About;