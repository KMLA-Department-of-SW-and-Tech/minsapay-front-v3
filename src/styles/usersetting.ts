import { CSSProperties } from "react";

let settingForm: CSSProperties = {};
let resetButton: CSSProperties = {};
let resetButtonOnHover: CSSProperties = {};

if (window.innerWidth < 600) {
  settingForm = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Noto Sans KR",
    marginLeft: "auto",
    marginRight: "auto",
  };
} else {
  settingForm = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Noto Sans KR",
    marginLeft: "auto",
    marginRight: "auto",
  };
}

export const userSettingForm: CSSProperties = settingForm;

if (window.innerWidth < 600) {
  resetButton = {
    width: "160px",
    height: "50px",
    backgroundColor: "#1D1F21",
    border: "none",
    borderRadius: "10px",
    color: "#F5F5F5",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
} else {
  resetButton = {
    width: "160px",
    height: "50px",
    backgroundColor: "#1D1F21",
    border: "none",
    borderRadius: "10px",
    color: "#F5F5F5",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };
}

export const passwordResetButton: CSSProperties = resetButton;

if (window.innerWidth < 600) {
  resetButtonOnHover = {
    ...resetButton,
    width: "165px",
    height: "52px",
  };
} else {
  resetButtonOnHover = {
    ...resetButton,
    width: "165px",
    height: "52px",
  };
}

export const passwordResetButtonOnHover: CSSProperties = resetButtonOnHover

export const passwordResetInputForm: CSSProperties = {
  // align items horizontally
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};

export const passwordResetInput: CSSProperties = {
  width: "40%",
  height: "40px",
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "bold",
  paddingLeft: "10px",
  outline: "none",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
  marginRight: "10px",
};
