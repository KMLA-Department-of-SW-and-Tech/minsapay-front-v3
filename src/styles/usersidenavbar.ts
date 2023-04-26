import { CSSProperties } from "react";

export const userSideNavBar: CSSProperties = {
  // make side nav bar
  height: "100vh",
  width: "120px",
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: "#fff",
  overflowX: "hidden",
  paddingTop: "20px",
  // align items in the horizontal center
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // border to the right
  borderRight: "3px solid #aaa",
};

export const navBarLogo: CSSProperties = {
  width: "80px",
  height: "80px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const navBarLogoRegion: CSSProperties = {
  width: "120px",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  transition: "all 0.2s ease-in-out",
  borderRadius: "10%",
  //backgroundColor: "rgba(255, 102, 0, 0.7)",
};

export const navBarLogoRegionOnHover: CSSProperties = {
  width: "120px",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 102, 0, 0.7)",
  marginTop: "40px",
  // set radius
  borderRadius: "10%",
  transition: "all 0.2s ease-in-out",
};
