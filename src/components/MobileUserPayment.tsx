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
  return (
    <div style={item}>
      <div style={productBox}>
        <p style={store}>{props.store}</p>
        <p style={productInfo}>{props.product}</p>
      </div>
      <div style={costBox}>
        <p style={cost}>{props.price}원</p>
      </div>
      <div style={info}>
        <div style={infoContainer}>
          <div style={studentID}>
            <span>{props.balance}</span>
          </div>
          <div style={date}>
            <span>{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUserPayment;
