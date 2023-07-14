import { CSSProperties } from "react";

export const wallet: CSSProperties = {
  width: "100%",
  height: "300px",
  borderRadius: "10px 10px 10px 10px",
  background: "#ffac4a",
  // place items vertically
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // make div not covered by nav bar
  marginTop: "80px",
};

export const walletBalance: CSSProperties = {
  color: "#fff",
  fontSize: "54px",
  fontWeight: "700",
  // place text at the center of the div
    textAlign: "center",
    marginTop: "auto",
};

export const allowButton: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  color: "#fff",
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "700",
  border: "none",
  width: "90%",
  height: "50px",
  borderRadius: "10px",
  // place button at the bottom of the div
  marginTop: "auto",
  marginBottom: "20px",
};
