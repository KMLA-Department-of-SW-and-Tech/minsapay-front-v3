import React from "react";

import {
  mobileNav,
  logoStyle,
  smallLogoStyle,
  logoDiv,
} from "../styles/mobileNavMain";

import logo from "../assets/images/minsapay.png";
import arrow from "../assets/images/arrow.png";
import settings from '../assets/images/settings.png'

const MobileNavMain = (props: any) => {
  const onClickSettings = () => {
    window.location.href = "/settings";
  }

  return (
    <div style={mobileNav}>
      <div>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div style={logoDiv}>
        <img src={settings} alt="settings" style={smallLogoStyle} onClick={onClickSettings} />
      </div>
    </div>
  );
};

export default MobileNavMain;
