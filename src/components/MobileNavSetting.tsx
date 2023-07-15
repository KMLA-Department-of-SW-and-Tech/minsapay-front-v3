import React from "react";

import {
  mobileNav,
  logoStyle,
  smallLogoStyle,
  logoDiv,
} from "../styles/mobileNavMain";

import logo from "../assets/images/minsapay.png";
import arrow from "../assets/images/arrow.png";
import settings from "../assets/images/settings.png";

const MobileNavSetting = () => {
  const onArrowClick = () => {
    window.location.href = "/";
  };
  return (
    <div style={mobileNav}>
      <div>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
      <div>
        <h1>211033</h1>
      </div>
      <div style={logoDiv}>
        <img src={arrow} alt="arrow" style={smallLogoStyle} onClick={onArrowClick}/>
      </div>
    </div>
  );
};

export default MobileNavSetting;
