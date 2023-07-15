import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  securePurchaseDiv,
  caption,
  mainDiv,
  securePurchaseTitle,
} from "../styles/mobileUserPasswordChangeDiv";
import { loginButton } from "../styles/mobileLoginButton";

import "../styles/toggleSwitch.css";

const MobileUserSecurePurchaseToggle = (props: any) => {
  const [toggle, setToggle] = useState(false);

  const onChangeToggle = (e: any) => {
    setToggle(e.target.checked);
  };

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  useEffect(() => {
    onRender();
  }, []);

  const onRender = () => {
    axios
      .get(`http://localhost:8800/api/user/secure/${props.user.login.username}`)
      .then((res) => {
        setToggle(res.data.isSecurePurchase);
      });
  };

  const onPressSave = () => {
    axios
      .post(
        `http://localhost:8800/api/user/mode/${props.user.login.username}`,
        {
          newSecurePurchaseMode: toggle,
        }
      )
      .then((res) => {
        if (res.data.success) {
          alert("저장 완료");
        }
      })
      .catch((err) => {
        alert("에러 발생");
      });
  };

  return (
    <div style={mainDiv}>
      <div style={securePurchaseDiv}>
        <div style={caption}>
          <div style={securePurchaseTitle}>
            <span>Secure Purchase™</span>
          </div>
          <div id="text">
            <span>1분 동안만 결제 승인을 유지시킵니다.</span>
          </div>
        </div>

        <label className="toggle-switch">
          <input type="checkbox" checked={toggle} onChange={onChangeToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <button style={loginButton} onClick={onPressSave}>
        저장
      </button>
    </div>
  );
};

export default MobileUserSecurePurchaseToggle;
