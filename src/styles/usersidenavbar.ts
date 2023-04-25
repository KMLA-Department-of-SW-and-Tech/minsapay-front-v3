import { CSSProperties } from "react";

export const userSideNavBar: CSSProperties = {
    // make side nav bar
    height: "100vh",
    width: "120px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#eee",
    overflowX: "hidden",
    paddingTop: "20px",
    // align items in the horizontal center
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const navBarLogo: CSSProperties = {
    width: "80px",
    height: "80px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

