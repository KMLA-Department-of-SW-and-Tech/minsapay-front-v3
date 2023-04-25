import React from "react";

// import { userSideNav } from "../styles/usersidenav";
import minsapay from "../assets/images/minsapay.png";
import home from "../assets/images/home.svg";
import settings from "../assets/images/settings.svg";

import { userSideNavBar, navBarLogo } from "../styles/usersidenavbar";

const UserSideNav = () => {
  return (
    <div style={userSideNavBar}>
      <img src={minsapay} alt="민족제 현황" style={navBarLogo}></img>
      <div>
        <img src={home} alt="민족제 현황" style={navBarLogo}></img>
        <img src={settings} alt="설정" style={navBarLogo}></img>
      </div>
    </div>
  );
};

export default UserSideNav;
