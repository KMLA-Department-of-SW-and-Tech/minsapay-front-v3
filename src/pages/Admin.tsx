import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [storeUsername, setStoreUsername] = useState("");
  const [storePassword, setStorePassword] = useState("");
  const [storeName, setStoreName] = useState("");

  const [moneyUser, setMoneyUser] = useState("");
  const [chargeAmount, setChargeAmount] = useState("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStoreUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreUsername(e.target.value);
  };

  const handleStorePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorePassword(e.target.value);
  };

  const handleStoreName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  };

  const handleMoneyUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoneyUser(e.target.value);
  };

  const handleChargeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChargeAmount(e.target.value);
  };

  const onClickStoreRegister = () => {
    if (storeUsername === "" || storePassword === "" || storeName === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    axios
      .post(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/auth/create-user`,
        {
          username: username,
          password: password,
          userType: "user",
          name: name,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("유저 생성에 성공했습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("실패");
      });
  };

  const onClickRegister = () => {
    if (username === "" || password === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    console.log({
      username: storeUsername,
      password: storePassword,
      userType: "store",
      name: name,
    });
    axios
      .post(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/auth/create-store`,
        {
          username: storeUsername,
          password: storePassword,
          userType: "store",
          name: name,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("유저 생성에 성공했습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("실패");
      });
  };

  const onClickCharge = async () => {
    await axios
      .post(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/user/purchase/${moneyUser}`
      )
      .then((res) => {
        if (res.status === 200) {
          axios
            .post(
              `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/purchase/create`,
              {
                amount: -chargeAmount,
                username: moneyUser,
                storeName: "admin",
                productName: "충전",
                nameOfStore: "관리자",
                nameOfUser: "충전유저",
              }
            )
            .then((res) => {
              if (res.status === 200) {
                alert("충전에 성공했습니다.");
                window.location.reload();
              }
            })
            .catch((err) => {
              console.log(err);
              alert("실패");
            });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("실패");
      });
  };

  useEffect(() => {
    console.log(moneyUser, chargeAmount);
  }, [moneyUser, chargeAmount]);

  return (
    <>
      <div>
        <input
          placeholder="학번"
          value={moneyUser}
          onChange={handleMoneyUser}
          type="number"
        />
        <input
          placeholder="금액"
          value={chargeAmount}
          onChange={handleChargeAmount}
          type="number"
        />
        <button onClick={onClickCharge}>충전하기</button>
      </div>
    </>
  );
};

export default Admin;
