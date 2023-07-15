import React, { useEffect, useState } from "react";
import axios from "axios";
import { mobileUserPasswordChangeDivStyle } from "../styles/mobileUserPasswordChangeDiv";
import { textInput } from "../styles/mobileTextInput";

import { loginButton } from "../styles/mobileLoginButton";

const MobileUserPasswordChangeDiv = (props: any) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>("");

  const onChangeNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const onChangeNewPasswordCheck = (e: any) => {
    setNewPasswordCheck(e.target.value);
  };

  useEffect(() => {
  }, [newPassword]);

  useEffect(() => {}, [newPasswordCheck]);

  const onClickChangePassword = async () => {
    if (newPassword !== newPasswordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    axios
      .post("http://localhost:8800/api/auth/change-password", {
        username: props.user.login.username,
        newPassword: newPassword,
      })
      .then((res) => {
        if (res.data.success) {
          alert("비밀번호 변경 완료, 다시 로그인해주세요.");
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        alert("에러 발생");
      });
  };

  return (
    <>
      <div style={mobileUserPasswordChangeDivStyle}>
        <h1>비밀번호 변경</h1>
        <input
          style={textInput}
          type="password"
          placeholder="새로운 비밀번호"
          value={newPassword}
          onChange={onChangeNewPassword}
        />
        <input
          style={textInput}
          type="password"
          placeholder="새로운 비밀번호 확인"
          value={newPasswordCheck}
          onChange={onChangeNewPasswordCheck}
        />
        <button style={loginButton} onClick={onClickChangePassword}>확인</button>
      </div>
    </>
  );
};

export default MobileUserPasswordChangeDiv;
