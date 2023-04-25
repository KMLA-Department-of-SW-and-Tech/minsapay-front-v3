import React, { useState } from "react";

import {
  loginForm,
  loginFormButton,
  loginFormInput,
  loginFormInputOnFocus,
} from "../styles/loginpage";

const Login = () => {
  const [isIdFormOnFocus, setIsIdFormOnFocus] = useState(false);
  const [isPasswordFormOnFocus, setIsPasswordFormOnFocus] = useState(false);
  const [idFormStyle, setIdFormStyle] = useState(loginFormInput);
  const [passwordFormStyle, setPasswordFormStyle] = useState(loginFormInput);

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
      <button style={loginFormButton}>로그인</button>
    </div>
  );
};

export default Login;
