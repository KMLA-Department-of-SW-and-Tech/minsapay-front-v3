import React, { useState, useEffect } from "react";
import axios from "axios";

import DesktopStoreBalance from "./DesktopStoreBalance";
import DesktopStorePurchase from "./DesktopStorePurchase";
import { desktopStoreMainLeft } from "../styles/desktopStoreMainLeft";

const DesktopStoreMainLeft = (props: any) => {
  const [data, setData] = useState({} as any);
  useEffect(() => {
    onMount();
  }, []);

  const onMount = async () => {
    await axios
      .get(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/store/${props.user.username}`
      )
      .then((res) => {
        setData(res.data.store);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={desktopStoreMainLeft}>
        <DesktopStoreBalance balance={data.balance} store={props.user.name} />
        <DesktopStorePurchase store={props.user} />
      </div>
    </>
  );
};

export default DesktopStoreMainLeft;
