import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [storeUsername, setStoreUsername] = useState("");
  const [storePassword, setStorePassword] = useState("");
  const [storeName, setStoreName] = useState("");

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

  return (
    <>
      <div>
        <h1>관리자 페이지</h1>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="아이디"
        />
        <input
          type="text"
          value={password}
          onChange={handlePassword}
          placeholder="비번"
        />
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="이름"
        />

        <button onClick={onClickRegister}>유저 생성</button>
      </div>

      <div>
        <h1>관리자 페이지</h1>
        <input
          type="text"
          value={storeUsername}
          onChange={handleStoreUsername}
          placeholder="아이디"
        />
        <input
          type="text"
          value={storePassword}
          onChange={handleStorePassword}
          placeholder="비번"
        />
        <input
          type="text"
          value={storeName}
          onChange={handleStoreName}
          placeholder="이름"
        />

        <button onClick={onClickStoreRegister}>유저 생성</button>
      </div>
    </>
  );
};

export default Admin;
