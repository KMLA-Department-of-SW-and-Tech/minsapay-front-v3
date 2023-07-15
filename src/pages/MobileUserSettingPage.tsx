import React from "react";
import jwt_decode from "jwt-decode";

import MobileNavSetting from "../components/MobileNavSetting";
import MobileUserPasswordChangeDiv from "../components/MobileUserPasswordChangeDiv";
import MobileUserSecurePurchaseToggle from "../components/MobileUserSecurePurchaseToggle";
import MobileUserLogoutButton from "../components/MobileUserLogoutButton";

const MobileUserSettingPage = () => {
  const token = localStorage.getItem("token") as string;

  let decoded: any;
  try {
    decoded = jwt_decode(token);
  } catch (err) {}

  return (
    <>
      <MobileNavSetting />
      <MobileUserPasswordChangeDiv user={decoded} />
      <MobileUserSecurePurchaseToggle user={decoded}/>
      <MobileUserLogoutButton />
    </>
  );
};

export default MobileUserSettingPage;
