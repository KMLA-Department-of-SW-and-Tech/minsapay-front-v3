import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  passwordResetButton,
  passwordResetButtonOnHover,
  passwordResetInput,
  passwordResetInputForm,
  userSettingForm,
} from "../styles/usersetting";

const UserSettings = () => {
  const [passwordResetButtonStyle, setPasswordResetButtonStyle] =
    useState<Object>(passwordResetButton);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [passwordMatchElement, setPasswordMatchElement] = useState<JSX.Element>(
    <label></label>
  );
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);

  const [passwordResetInputValue, setPasswordResetInputValue] =
    useState<string>("");
  const [passwordResetCheckValue, setPasswordResetCheckValue] =
    useState<string>("");

  useEffect(() => {
    if (passwordResetInputValue === "" || passwordResetCheckValue === "") {
      setPasswordMatchElement(<label></label>);
    } else if (passwordResetInputValue === passwordResetCheckValue) {
      setPasswordMatchElement(
        <label style={{ color: "green" }}>✅ 비밀번호가 일치합니다.</label>
      );
      setIsPasswordMatch(true);
    } else {
      setPasswordMatchElement(
        <label style={{ color: "red" }}>❌ 비밀번호가 일치하지 않습니다.</label>
      );
      setIsPasswordMatch(false);
    }
  }, [passwordResetInputValue, passwordResetCheckValue]);

  const handlePasswordResetButtonHover = () => {
    setPasswordResetButtonStyle(passwordResetButtonOnHover);
  };

  const handlePasswordResetButtonMouseOut = () => {
    setPasswordResetButtonStyle(passwordResetButton);
  };

  const onPasswordResetButtonClick = () => {
    if (!isPasswordMatch) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handlePasswordResetInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordResetInputValue(e.target.value);
  };

  const handlePasswordResetCheckValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordResetCheckValue(e.target.value);
  };

  return (
    <>
      <div style={userSettingForm}>
        <h1>Account Settings</h1>
        <div>
          {/* 비밀번호 */}
          <h2>비밀번호</h2>
          <div style={passwordResetInputForm}>
            <input
              type="password"
              placeholder="새로운 비밀번호"
              style={passwordResetInput}
              onChange={handlePasswordResetInputValue}
            />
            <input
              type="password"
              placeholder="새로운 비밀번호 확인"
              style={passwordResetInput}
              onChange={handlePasswordResetCheckValue}
            />
          </div>
          <div>{passwordMatchElement}</div>
          <button
            style={passwordResetButtonStyle}
            onMouseEnter={handlePasswordResetButtonHover}
            onMouseLeave={handlePasswordResetButtonMouseOut}
            onClick={onPasswordResetButtonClick}
          >
            비밀번호 변경하기
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
