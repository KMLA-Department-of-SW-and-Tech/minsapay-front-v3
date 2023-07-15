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

import "./main.css";
import MobileUserSettingPage from "./pages/MobileUserSettingPage";
import DesktopLoginNav from "./components/DesktopLoginNav";
import DesktopLoginPage from "./pages/DesktopLoginPage";
import StoreTemp from "./pages/StoreTemp";
import StoreMainPage from "./pages/StoreMainPage";
import DesktopStoreSettings from "./pages/DesktopStoreSettings";

let router: any;

const token = localStorage.getItem("token") as string;

let decoded: any;

try {
  decoded = jwt_decode(token);
} catch (err) {}

if (localStorage.getItem("token") !== null && decoded !== undefined) {
  if (decoded.login.userType === "user") {
    if (window.innerWidth <= 768) {
      router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<MobileUserMainPage />} />
            <Route path="/settings" element={<MobileUserSettingPage />} />
            <Route path="*" element={<Temp />} />
          </>
        )
      );
    } else {
      router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<MobileUserMainPage />} />
            <Route path="/settings" element={<MobileUserSettingPage />} />
            <Route path="*" element={<Temp />} />
          </>
        )
      );
    }
  } else if (decoded.login.userType === "store") {
    if (window.innerWidth <= 768) {
      router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<StoreMainPage />} />
            <Route path="/settings" element={<DesktopStoreSettings />} />
            <Route path="*" element={<Temp />} />
          </>
        )
      );
    } else {
      router = createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<StoreMainPage />} />
            <Route path="/settings" element={<DesktopStoreSettings />} />
            <Route path="*" element={<Temp />} />
          </>
        )
      );
    }
  }
} else {
  if (window.innerWidth <= 768) {
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<MobileLoginPage />} />
        </>
      )
    );
  } else {
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<DesktopLoginPage />} />
        </>
      )
    );
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
