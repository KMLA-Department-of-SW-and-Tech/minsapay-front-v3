import React from "react";

import { wallet, walletBalance, allowButton } from "../styles/mobileUserBalance";

const MobileUserBalance = () => {
  return (
    <div style={wallet}>
      <span style={walletBalance}>10000원</span>
      <button style={allowButton}>결제 승인</button>
    </div>
  );
};

export default MobileUserBalance;
