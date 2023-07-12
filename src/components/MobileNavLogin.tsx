import React from "react";

import { mobileNav, logoStyle } from "../styles/mobileNavLogin";

import logo from "../assets/images/minsapay.png";

const MobileNavLogin = () => {
  return (
    <div style={mobileNav}>
      <div>
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
    </div>
  );
};

export default MobileNavLogin;
