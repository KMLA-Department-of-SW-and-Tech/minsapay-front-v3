import React from "react";

import { useLoginStore } from "../store/useLoginStore";

import { loginButton } from "../styles/mobileLoginButton"

const state = useLoginStore.getState();

const onClickLogin = () => {
  console.log("login");
  console.log(state.id);
  console.log(state.pw);
}

const LoginButton = () => {
  return (
    <div>
      <button style={loginButton} onClick={onClickLogin}>LOGIN</button>
    </div>
  );
};

export default LoginButton;
