import React, { useEffect, useState } from "react";
import axios from "axios";

import MobileNavLogin from "./MobileNavLogin";

import { textInput } from "../styles/mobileTextInput";
import { loginButton } from "../styles/mobileLoginButton";
import { mobileLoginDiv } from "../styles/mobileLoginDiv";
import MobileLoginTitle from "./MobileLoginTitle";

const TempMobileLoginDiv = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeID = (e: any) => {
    setId(e.target.value);
  };
  const onChangePW = (e: any) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(pw);
  }, [pw]);

  useEffect(() => {}, [pw]);

  const onClickLogin = () => {
    if (id === "" || pw === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    axios
      .post("https://minsapay-backend-c1deff28ec91.herokuapp.com/api/auth/login", {
        username: id,
        password: pw,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        } else {
          alert("로그인에 실패했습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
          if (err.response.status === 401) {
            alert("비밀번호를 확인해주세요.");
            window.location.reload();
          } else if (err.response.status === 404) {
            alert("존재하지 않는 아이디입니다.");
            window.location.reload();
          } else {
            alert("로그인에 실패했습니다.");
            window.location.reload();
          }
        } else {
          console.log(err);
        }
      });
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <div>
      <MobileLoginTitle />
      <div style={mobileLoginDiv}>
        <div>
          <div>
            <input
              style={textInput}
              placeholder="아이디"
              onChange={onChangeID}
              value={id}
              type="text"
              onKeyPress={handleEnterPress}
            />
          </div>
        </div>
        <div>
          <div>
            <input
              style={textInput}
              placeholder="비밀번호"
              onChange={onChangePW}
              value={pw}
              type="password"
              onKeyPress={handleEnterPress}
            />
          </div>
        </div>
        <div>
          <button style={loginButton} onClick={onClickLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempMobileLoginDiv;
