import React from "react";

import {
  mobileNav,
  logoStyle,
  smallLogoStyle,
  logoDiv,
} from "../styles/mobileNavMain";

import logo from "../assets/images/minsapay.png";
import arrow from "../assets/images/arrow.png";

const MobileNavMain = () => {
  return (
    <div style={mobileNav}>
      <div>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
      <div>
        <h1>211033</h1>
      </div>
      <div style={logoDiv}>
        <img src={arrow} alt="arrow" style={smallLogoStyle} />
      </div>
    </div>
  );
};

export default MobileNavMain;