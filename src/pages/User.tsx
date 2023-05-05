import React from "react";
import { usePageStore } from "../store/pageStore";

import UserSideNav from "../components/UserSideNav";
import UserSettings from "../components/UserSettings";
import { userPage, userPageBody } from "../styles/userpage";

const User = () => {
  return (
    <>
      <div>
        <UserSideNav />
        <div style={userPageBody}>
          <UserSettings />
        </div>
      </div>
    </>
  ); 
};

export default User;
