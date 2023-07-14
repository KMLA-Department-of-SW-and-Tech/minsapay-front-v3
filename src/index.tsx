import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import jwt_decode from "jwt-decode";

import Temp from "./pages/Temp";
import MobileLoginPage from "./pages/MobileLoginPage";
import MobileUserMainPage from "./pages/MobileUserMainPage";
import MobileUserPayment from "./components/MobileUserPayment";

import './main.css';

let router: any;

const token = localStorage.getItem("token") as string;

let decoded: any;

try {
  decoded = jwt_decode(token);
} catch (err) {
}

console.log("Hi")

if (localStorage.getItem("token") !== null && decoded !== undefined) {
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MobileUserMainPage />} />
      </>
    )
  );
} else {
  // console.log("token does not exist");
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MobileLoginPage />} />
      </>
    )
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
