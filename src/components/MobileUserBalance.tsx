import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  wallet,
  walletBalance,
  allowButton,
} from "../styles/mobileUserBalance";

const MobileUserBalance = (props: any) => {
  const [isSecurePurchase, setIsSecurePurchase] = useState(false);
  const [userInfo, setUserInfo] = useState({} as any);

  useEffect(() => {
    fetchData(); // Fetch data from the backend when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/user/username/${props.user.username}`
      ); // Make a GET request to the backend API
      setUserInfo(response.data.user); // Set the state with the response data
      setIsSecurePurchase(response.data.user.isSecurePurchase);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onClickAllow = () => {
    if (isSecurePurchase === true) {
      axios
        .post(
          `http://localhost:8800/api/user/purchase/${props.user.username}`,
          {}
        )
        .then((res) => {
          if (res.status === 200) {
            alert("1분간 결제가 허용됩니다!");
            window.location.reload();
          } else {
            alert("결제 승인에 실패했습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("안전결제 기능이 비활성화 되어있습니다.");
    }
  };

  return (
    <div style={wallet}>
      <span style={walletBalance}>{userInfo.balance} 원</span>
      <button style={allowButton} onClick={onClickAllow}>
        결제 승인
      </button>
    </div>
  );
};

export default MobileUserBalance;
