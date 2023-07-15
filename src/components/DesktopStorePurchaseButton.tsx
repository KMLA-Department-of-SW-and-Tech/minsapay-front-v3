import React, { useState } from "react";
import {
  desktopStorePurchaseButton,
  buttonDiv,
  desktopStoreRefundButton,
} from "../styles/desktopStorePurchaseButton";

const DesktopStorePurchaseButton = () => {
  const [isPurchaseHover, setIsPurchaseHover] = useState(false);
  const [isRefundHover, setIsRefundHover] = useState(false);

  const handlePurchaseHover = () => {
    setIsPurchaseHover(true);
  };

  const handleRefundHover = () => {
    setIsRefundHover(true);
  };

  const handlePurchaseLeave = () => {
    setIsPurchaseHover(false);
  };

  const handleRefundLeave = () => {
    setIsRefundHover(false);
  };

  return (
    <div style={buttonDiv}>
      <button
        style={desktopStorePurchaseButton}
        onMouseEnter={handlePurchaseHover}
        onMouseLeave={handlePurchaseLeave}
      >
        결제
      </button>
      <button
        style={desktopStoreRefundButton}
        onMouseEnter={handleRefundHover}
        onMouseLeave={handleRefundLeave}
      >
        환불
      </button>
    </div>
  );
};

export default DesktopStorePurchaseButton;
