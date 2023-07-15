import React from "react";
import { desktopStoreBalance, balance } from "../styles/desktopStoreBalance";

const DesktopStoreBalance = (props: any) => {
  console.log(props.balance);
  return (
    <div style={desktopStoreBalance}>
      <h1 style={balance}>{props.store}: {props.balance}원</h1>
    </div>
  );
};

export default DesktopStoreBalance;
