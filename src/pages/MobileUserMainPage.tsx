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
        `http://localhost:8800/api/purchase/user/${decoded.login.username}`
      );
      setData(response.data.purchases);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);
  data.map((payment: any) => {
    // leave only time
    payment.time = payment.time
    console.log(payment.time.split("T")[0])
  })
  // map mobile user payment component
  let paymentList = data.map((payment: any) => (
    <MobileUserPayment
      price={payment.price}
      balance={payment.userAmount}
      time={payment.time}
      store={payment.nameOfStore}
      product={payment.product}
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
