import React from "react";

import MobileLoginDiv from "../components/MobileLoginDiv";
import MobileNavLogin from "../components/MobileNavLogin";
import TempMobileLoginDiv from "../components/TempMobileLoginDiv";

const MobileLoginPage = () => {
  return (
    <div>
      <MobileNavLogin />
      <TempMobileLoginDiv />
    </div>
  );
};

export default MobileLoginPage;
