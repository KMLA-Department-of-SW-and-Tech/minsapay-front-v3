import React from "react";

import logo from "../assets/images/minsapay.png";
import settings from "../assets/images/settings.png";
import {
  desktopNavMain,
  logoStyle,
  logoDiv,
  smallLogoStyle,
  mainLogoDiv,
} from "../styles/desktopNavMain";

const DesktopNavMain = (props: any) => {
  return (
    <div style={desktopNavMain}>
      <div style={logoDiv}></div>
      <div style={mainLogoDiv}>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
      <div style={logoDiv}>
        <img src={settings} alt="settings" style={smallLogoStyle} />
      </div>
    </div>
  );
};

export default DesktopNavMain;
