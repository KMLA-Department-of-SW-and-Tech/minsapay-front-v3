import React from "react";
import jwt_decode from "jwt-decode";
import DesktopNavMain from "../components/DesktopNavMain";
import DesktopStorePurchaseHistory from "../components/DesktopStorePurchaseHistory";
import {
  divColor,
  storeMainPage,
  storeMainPagePurchaseHistory,
} from "../styles/storeMainPage";
import DesktopStoreMainLeft from "../components/DesktopStoreMainLeft";

const StoreMainPage = () => {
  const token = localStorage.getItem("token") as string;

  let decoded: any;
  try {
    decoded = jwt_decode(token);
  } catch (err) {}

  return (
    <>
      <div style={divColor}>
        <DesktopNavMain />
        <div style={storeMainPage}>
          <DesktopStoreMainLeft user={decoded.login} />
          <div style={storeMainPagePurchaseHistory}>
            <DesktopStorePurchaseHistory user={decoded.login} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreMainPage;
