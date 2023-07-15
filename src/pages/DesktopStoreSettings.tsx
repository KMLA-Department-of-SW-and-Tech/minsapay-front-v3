import React from "react";
import jwt_decode from "jwt-decode";
import MobileNavSetting from "../components/MobileNavSetting";
import MobileUserLogoutButton from "../components/MobileUserLogoutButton";

const DesktopStoreSettings = () => {
  const token = localStorage.getItem("token") as string;

  let decoded: any;
  try {
    decoded = jwt_decode(token);
  } catch (err) {}

  return (
    <>
      <MobileNavSetting user={decoded} />
      <MobileUserLogoutButton />
    </>
  );
};

export default DesktopStoreSettings;
