import { CSSProperties } from "react";

export const userSettingForm: CSSProperties = {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  fontFamily: "Noto Sans KR",
  marginLeft: "auto",
  marginRight: "auto",
};

export const passwordResetButton: CSSProperties = {
  width: "20%",
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

export const passwordResetButtonOnHover: CSSProperties = {
  ...passwordResetButton,
  width: "22%",
  height: "53px",
};

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
