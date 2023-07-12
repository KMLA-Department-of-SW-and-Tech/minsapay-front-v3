import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Temp from "./pages/Temp";
import MobileLoginPage from "./pages/MobileLoginPage";

let router: any;

if (1) {
  console.log("token exists");
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MobileLoginPage />} />
      </>
    )
  );
} else {
  console.log("token does not exist");
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Temp />} />
      </>
    )
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
