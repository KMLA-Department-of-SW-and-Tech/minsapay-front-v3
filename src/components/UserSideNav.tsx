import React, { useState } from "react";

// import { userSideNav } from "../styles/usersidenav";
import minsapay from "../assets/images/minsapay.png";
import home from "../assets/images/home.svg";
import settings from "../assets/images/settings.svg";
import dollar from "../assets/images/dollar.svg";

import {
  userSideNavBar,
  navBarLogo,
  navBarLogoRegion,
  navBarLogoRegionOnHover,
} from "../styles/usersidenavbar";

const UserSideNav = () => {
  const [mainLogoStyle, setMainLogoStyle] = useState(navBarLogoRegion);
  const [settingLogoStyle, setSettingLogoStyle] = useState(navBarLogoRegion);
  const [profileLogoStyle, setProfileLogoStyle] = useState(navBarLogoRegion);

  const handleMainLogoHover = () => {
    setMainLogoStyle(navBarLogoRegionOnHover);
  };

  const handleSettingLogoHover = () => {
    setSettingLogoStyle(navBarLogoRegionOnHover);
  };

  const handleProfileLogoHover = () => {
    setProfileLogoStyle(navBarLogoRegionOnHover);
  };

  const handleMainLogoMouseOut = () => {
    setMainLogoStyle(navBarLogoRegion);
  };

  const handleSettingLogoMouseOut = () => {
    setSettingLogoStyle(navBarLogoRegion);
  };

  const handleProfileLogoMouseOut = () => {
    setProfileLogoStyle(navBarLogoRegion);
  };

  return (
    <div style={userSideNavBar}>
      <img
        src={minsapay}
        alt="로고"
        style={{
          ...navBarLogo,
          width: "120px",
          height: "120px",
        }}
      ></img>
      <div>
        <div
          style={mainLogoStyle}
          onMouseEnter={handleMainLogoHover}
          onMouseLeave={handleMainLogoMouseOut}
        >
          <img src={home} alt="민족제 현황" style={navBarLogo}></img>
        </div>
        <div
          style={profileLogoStyle}
          onMouseEnter={handleProfileLogoHover}
          onMouseLeave={handleProfileLogoMouseOut}
        >
          <img src={dollar} alt="설정" style={navBarLogo}></img>
        </div>
        <div
          style={settingLogoStyle}
          onMouseEnter={handleSettingLogoHover}
          onMouseLeave={handleSettingLogoMouseOut}
        >
          <img src={settings} alt="내 프로필" style={navBarLogo}></img>
        </div>
      </div>
    </div>
  );
};

export default UserSideNav;
