import React, { useState, useEffect } from "react";
import axios from "axios";
import { desktopStorePurchaseHistory } from "../styles/desktopStorePurchaseHistory";
import MobileUserPayment from "./MobileUserPayment";

const DesktopStorePurchaseHistory = (props: any) => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/purchase/store/${props.user.username}`
      );
      setData(response.data.purchases);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let reversedData: {}[] = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversedData.push(data[i]);
  }

  let paymentList = reversedData.map((payment: any) => (
    <MobileUserPayment
      price={payment.price}
      balance={payment.storeAmount}
      time={payment.time}
      store={payment.nameOfUser}
      product={payment.product}
      key={payment._id}
    />
  ));

  return <div style={desktopStorePurchaseHistory}>{paymentList}</div>;
};

export default DesktopStorePurchaseHistory;
