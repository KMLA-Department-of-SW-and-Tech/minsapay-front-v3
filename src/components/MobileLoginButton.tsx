import React from "react";

import { useLoginStore } from "../store/useLoginStore";

import { loginButton } from "../styles/mobileLoginButton"

const state = useLoginStore.getState();

const onClickLogin = () => {
}

const LoginButton = () => {
  return (
    <div>
      <button style={loginButton} onClick={onClickLogin}>LOGIN</button>
    </div>
  );
};

export default LoginButton;
