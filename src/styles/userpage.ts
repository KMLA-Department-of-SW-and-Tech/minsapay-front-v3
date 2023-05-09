import { CSSProperties } from "react";

let userPageCSS: CSSProperties = {};
let userPageBodyCSS: CSSProperties = {};

export const userPage: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  fontFamily: "Noto Sans KR",
};

if (window.innerWidth < 600) {
  userPageCSS = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
} else {
  userPageCSS = {
    marginLeft: "120px",
  }
}


export const userPageBody: CSSProperties = userPageCSS;

