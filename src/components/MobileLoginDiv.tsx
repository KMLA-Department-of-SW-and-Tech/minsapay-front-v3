import React from "react";

import MobileTextInput from "./MobileTextInput";
import MobileLoginButton from "./MobileLoginButton";
import MobileLoginTitle from "./MobileLoginTitle";

import { mobileLoginDiv } from "../styles/mobileLoginDiv";

const MobileLoginDiv = () => {
  return (
    <div style={mobileLoginDiv}>
      <MobileLoginTitle />
      <MobileTextInput placeholder="아이디" type="text" data="username" />
      <MobileTextInput placeholder="비밀번호" type="password" data="password" />
      <MobileLoginButton />
    </div>
  );
};

export default MobileLoginDiv;
