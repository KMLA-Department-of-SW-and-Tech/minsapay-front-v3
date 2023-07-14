import React from "react";
import jwt_decode from "jwt-decode";

import MobileNavMain from "../components/MobileNavMain";
import MobileUserPayment from "../components/MobileUserPayment";
import MobileUserBalance from "../components/MobileUserBalance";

const MobileUserMainPage = () => {
  const token = localStorage.getItem("token") as string;

  let decoded: any;
  try {
    decoded = jwt_decode(token);
  } catch (err) {} 

  

  return (
    <>
      <MobileNavMain name={decoded.login.username} />
      <MobileUserBalance />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
      <MobileUserPayment price="1000" balance="20000" time="10시 45분 10초" store="대취타" product="랜덤박스" />
    </>
  );
};

export default MobileUserMainPage;
