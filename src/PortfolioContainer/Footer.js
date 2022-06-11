import React from "react";
import footerImg from "../assets/logo (1).png";
function Footer() {
  return (
    <div
      className="footer container mx-auto d-flex align-items-center justify-content-space-between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "black", fontSize: "14px", opacity: "0.75", margin:"auto" }}
      >
        Copyright © 2022 Zannatul Binta Bahar. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;