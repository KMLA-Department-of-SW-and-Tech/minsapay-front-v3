import React from "react";

import {
    mobileUseLogoutDivStyle,
  logoutButton,
} from "../styles/mobileUserPasswordChangeDiv";

const MobileUserLogoutButton = () => {
  const onLogoutClick = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  return (
    <div style={mobileUseLogoutDivStyle}>
      <button style={logoutButton} onClick={onLogoutClick}>
        로그아웃
      </button>
    </div>
  );
};

export default MobileUserLogoutButton;
