import React from "react";

import {
  item,
  costBox,
  cost,
  info,
  infoContainer,
  studentID,
  date,
  productBox,
  store,
  productInfo,
} from "../styles/mobileUserPayment";

const MobileUserPayment = (props: any) => {

  // slice time
  const hour = (Number(props.time.slice(0, 2))+9)%24;
  return (
    <div style={item}>
      <div style={productBox}>
        <p style={store}>{props.store}</p>
        <p style={productInfo}>{props.product}</p>
      </div>
      <div style={costBox}>
        <p style={cost}>{-Number(props.price)}원</p>
      </div>
      <div style={info}>
        <div style={infoContainer}>
          <div style={studentID}>
            <span>{props.balance}</span>
          </div>
          <div style={date}>
            <span>{hour}{props.time.slice(2, 8)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUserPayment;
