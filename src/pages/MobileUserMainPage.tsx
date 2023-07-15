import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import MobileNavMain from "../components/MobileNavMain";
import MobileUserPayment from "../components/MobileUserPayment";
import MobileUserBalance from "../components/MobileUserBalance";

const MobileUserMainPage = () => {
  const [data, setData] = useState([] as any);
  const token = localStorage.getItem("token") as string;

  let decoded: any;
  try {
    decoded = jwt_decode(token);
  } catch (err) {}

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/purchase/user/${decoded.login.username}`
      );
      setData(response.data.purchases);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const reverseArray = (array: any) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  };

  let paymentList = reverseArray(data).map((payment: any) => (
    <MobileUserPayment
      price={payment.price}
      balance={payment.userAmount}
      time={payment.time}
      store={payment.nameOfStore}
      product={payment.product}
      key={payment._id}
    />
  ));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MobileNavMain name={decoded.login.username} />
      <MobileUserBalance user={decoded.login} />
      {paymentList}
    </>
  );
};

export default MobileUserMainPage;
