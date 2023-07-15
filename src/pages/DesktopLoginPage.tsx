import React from "react";

import MobileLoginDiv from "../components/MobileLoginDiv";
import MobileNavLogin from "../components/MobileNavLogin";
import TempMobileLoginDiv from "../components/TempMobileLoginDiv";
import DesktopLoginNav from "../components/DesktopLoginNav";

const DesktopLoginPage = () => {
  return (
    <div>
      <DesktopLoginNav />
      <TempMobileLoginDiv />
    </div>
  );
};

export default DesktopLoginPage;
