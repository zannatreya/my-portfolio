import React from "react";

import mine from "../../assets/img.jpg";
const AboutMe = () => {
  return (
    <div id='about'>
    <p className='text-center text-3xl text-primary font-bold uppercase mt-10'>About Me</p>
    <div className='flex flex-col lg:flex-row my-10 items-center'>
        <div className='w-5/6 lg:w-1/2 mx-auto order-2 lg:order-1'>
            <p className='lg:w-3/4 text-xl m-auto text-justify py-5 first-line:uppercase first-line:tracking-widest
first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
first-letter:mr-3 first-letter:float-left'>
Hello Dear, I'm Zannat with solid knowledge of Frontend Web
              Development. My knowledge enables me to create modern &
              eye-catching responsive websites. I am looking to start my career
              as an entry-level software engineer with a reputed firm driven by
              technology.
            </p>
        </div>
        <div className='w-3/4 lg:w-1/3 mx-auto order-1 '><img className='w-3/4 mx-auto rounded-lg' src={mine} alt="" /></div>

    </div>
</div>


  );
};

export default AboutMe;
