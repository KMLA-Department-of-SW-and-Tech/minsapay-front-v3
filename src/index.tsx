import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import User from "./pages/User";

import verifyJWT from "./functions/verification/verifyJWT";

let router: any;

const token = localStorage.getItem("token") || "";

if (localStorage.getItem("token") && verifyJWT(token)) {
  console.log("token exists");
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<User />} />
      </>
    )
  );
} else {
  console.log("token does not exist");
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
      </>
    )
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
