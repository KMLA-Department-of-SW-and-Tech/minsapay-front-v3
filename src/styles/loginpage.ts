import { CSSProperties } from "react";

export const loginForm: CSSProperties = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  fontFamily: "Noto Sans KR",
};

export const loginFormInput: CSSProperties = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  border: "3px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  transition: "all 0.5s ease",
};

export const loginFormInputOnFocus: CSSProperties = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  border: "3px solid orange",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  outline: "none",
  transition: "all 0.5s ease",
};

export const loginFormButton: CSSProperties = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  cursor: "pointer",
  transition: "all 0.4s ease",
};

export const loginFormButtonOnHover: CSSProperties = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.5rem",
  border: "1px solid orange",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "1rem",
  fontWeight: "bold",
  lineHeight: "1.5",
  color: "#fff",
  backgroundColor: "orange",
  backgroundClip: "padding-box",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.4s ease",
};
