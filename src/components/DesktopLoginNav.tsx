import React from "react";

import { mobileNav, logoStyle } from "../styles/desktopLoginNav";

import logo from "../assets/images/minsapay.png";

const DesktopLoginNav = () => {
  return (
    <div style={mobileNav}>
      <div>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
    </div>
  );
};

export default DesktopLoginNav;
