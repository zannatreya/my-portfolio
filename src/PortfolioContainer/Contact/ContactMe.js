import React from 'react';
import "./ContactMe.css";
import me from "../../assets/img.jpg";

const ContactMe = () => {
    return (
        <>
        <section className='Contact' id='contact'>
          <div className='container top'>
            <div className='heading text-center'>
              <h4>YOU CAN EASILY SEND ME A MESSAGE</h4>
              <h1 className="font-bold">Contact Me</h1>
            </div>
            <div className='content ml-5 md:ml-0 d_flex'>
              <div className='left'>
                <div className='box flex items-center flex-col'>
                  <div className='img'>
                    <img className="rounded-2xl" width='200px' src={me} alt='' />
                  </div>
                  <div className='details'>
                    <h1>Md. Rakibul Hassan Robin</h1>
                    <p>Web Developer</p>
                    <p>Phone: +8801403214161</p>
                    <p>Email: robinrakibulhassan@gmail.com</p> <br />
                  </div>
                </div>
              </div>
  
                <form className="w-max-full mb-5 md:ml-16 lg:w-full max-w-xl bg-white p-5 rounded-2xl h-1/3" action="https://formspree.io/f/xknykqzy"
                  method="POST">
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Your Name
                      </label>
                      <input className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Enter Your Full Name" name="name" required />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        E-mail
                      </label>
                      <input className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" placeholder="Enter Your Email Address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Message
                      </label>
                      <textarea className="no-resize appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" placeholder="Enter Your Inquiry" required></textarea>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-mdb-ripple="true" data-mdb-ripple-color="light">Send&nbsp;Message</button>
                    </div>
                    <div className="md:w-2/3"></div>
                  </div>
                </form>
            </div>
          </div>
        </section>
      </>
    );
};

export default ContactMe;