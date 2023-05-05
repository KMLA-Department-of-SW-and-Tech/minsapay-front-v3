import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [loginFormButtonStyle, setLoginFormButtonStyle] =
    useState(loginFormButton);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoginButtonClick = () => {
    axios
      .post("http://localhost:8800/api/auth/login", {
        username: id,
        password: password,
      })
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.token);
          return window.location.href = "/";
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div style={loginForm}>
      <h1>민사페이</h1>
      <input
        type="text"
        placeholder="아이디"
        style={idFormStyle}
        onFocus={handleIdFormOnFocus}
        onBlur={handleIdFormOnBlur}
        onChange={handleIdChange}
      ></input>
      <input
        type="password"
        placeholder="비밀번호"
        style={passwordFormStyle}
        onFocus={handlePasswordFormOnFocus}
        onBlur={handlePasswordFormOnBlur}
        onChange={handlePasswordChange}
      ></input>
      <button
        style={loginFormButtonStyle}
        onMouseEnter={handleLoginFormButtonOnMouseEnter}
        onMouseLeave={handleLoginFormButtonOnMouseLeave}
        onClick={onLoginButtonClick}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
