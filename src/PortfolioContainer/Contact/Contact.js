import "./Contact.css";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n13msmq",
        "template_naqrmkp",
        formRef.current,
        "AtJspw-6OqNHFVG88"
      )
      .then(
        (result) => {
          if (result) {
            toast.success(`Thank You! Successfully Received Your Email. Zannatul Binta Bahar will reply very soon.`)
    }
    e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              01836059047
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              zannatulbintabahar@yahoo.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Dhaka,Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;