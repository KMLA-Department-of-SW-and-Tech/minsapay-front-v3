import { CSSProperties } from "react";

let navBarCSS: CSSProperties = {};
let logo: CSSProperties = {};
let logoRegion: CSSProperties = {};
let logoRegionOnHover: CSSProperties = {};
let divStyle: CSSProperties = {};

if (window.innerWidth < 600) {
  navBarCSS = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
} else {
  navBarCSS = {
    height: "100vh",
    width: "120px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    overflowX: "hidden",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "3px solid #aaa",
  };
}

export const userSideNavBar: CSSProperties = navBarCSS;

if (window.innerWidth < 600) {
  logo = {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
} else {
  logo = {
    width: "80px",
    height: "80px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",
    borderRadius: "10%",
  };
}

export const navBarLogo: CSSProperties = logo;

if (window.innerWidth < 600) {
  logoRegion = {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    transition: "all 0.2s ease-in-out",
    borderRadius: "10%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginLeft: "10px",

  };
} else {
  logoRegion = {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    transition: "all 0.2s ease-in-out",
    borderRadius: "10%",
  };
}

export const navBarLogoRegion: CSSProperties = logoRegion;

if (window.innerWidth < 600) {
  logoRegionOnHover = {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    borderRadius: "10%",
    backgroundColor: "rgba(255, 102, 0, 0.7)",
    marginLeft: "10px",

  };
} else {
  logoRegionOnHover = {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    backgroundColor: "rgba(255, 102, 0, 0.7)",
    // set radius
    borderRadius: "10%",
    transition: "all 0.2s ease-in-out",
  };
}

export const navBarLogoRegionOnHover: CSSProperties = logoRegionOnHover;

if (window.innerWidth < 600) {
  divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  };
}

export const logoDivStyle: CSSProperties = divStyle;
