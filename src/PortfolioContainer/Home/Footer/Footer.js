import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={require("../../../assets/shape-bg.png").default}
          alt=""/>
      </div>
    </div>
  );
}