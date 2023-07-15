import { CSSProperties } from "react";

export const desktopNavMain: CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  borderBottom: "1px solid #000",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const logoStyle: CSSProperties = {
  width: "100px",
  height: "100px",
  margin: "0",
  display: "block",
};

export const logoDiv: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
  width: "75px",
  height: "75px",
  // put the div in the center
  marginRight: "50px",
};

export const smallLogoStyle: CSSProperties = {
  width: "50px",
  height: "50px",
};

export const mainLogoDiv: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
};
