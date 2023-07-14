import React, { useEffect, useState } from "react";

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
    
  };

  return (
    <div>
      <MobileNavLogin />
      <MobileLoginTitle />
      <div style={mobileLoginDiv}>
        <div>
          <div>
            <input
              style={textInput}
              placeholder="아이디"
              onChange={onChangeID}
              value={id}
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
