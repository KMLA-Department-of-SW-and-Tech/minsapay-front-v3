import React, { useState } from "react";

import {
  loginForm,
  loginFormButton,
  loginFormInput,
  loginFormInputOnFocus,
  loginFormButtonOnHover,
} from "../styles/loginpage";

const Login = () => {
  const [idFormStyle, setIdFormStyle] = useState(loginFormInput);
  const [passwordFormStyle, setPasswordFormStyle] = useState(loginFormInput);
  const [loginFormButtonStyle, setLoginFormButtonStyle] = useState(loginFormButton);

  const handleIdFormOnFocus = () => {
    setIdFormStyle(loginFormInputOnFocus);
  };

  const handleIdFormOnBlur = () => {
    setIdFormStyle(loginFormInput);
  };

  const handlePasswordFormOnFocus = () => {
    setPasswordFormStyle(loginFormInputOnFocus);
  };

  const handlePasswordFormOnBlur = () => {
    setPasswordFormStyle(loginFormInput);
  };

  const handleLoginFormButtonOnMouseEnter = () => {
    setLoginFormButtonStyle(loginFormButtonOnHover);
  };

  const handleLoginFormButtonOnMouseLeave = () => {
    setLoginFormButtonStyle(loginFormButton);
  };

  return (
    <div style={loginForm}>
      <h1>민사페이</h1>
      <input
        type="text"
        placeholder="아이디"
        style={idFormStyle}
        onFocus={handleIdFormOnFocus}
        onBlur={handleIdFormOnBlur}
      ></input>
      <input
        type="password"
        placeholder="비밀번호"
        style={passwordFormStyle}
        onFocus={handlePasswordFormOnFocus}
        onBlur={handlePasswordFormOnBlur}
      ></input>
      <button
        style={loginFormButtonStyle}
        onMouseEnter={handleLoginFormButtonOnMouseEnter}
        onMouseLeave={handleLoginFormButtonOnMouseLeave}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
