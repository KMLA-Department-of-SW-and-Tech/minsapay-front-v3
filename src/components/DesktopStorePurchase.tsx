import React, { CSSProperties, useState, useEffect } from "react";
import axios from "axios";

import { desktopStorePurchase } from "../styles/desktopStorePurchase";
import DesktopStorePurchaseButton from "./DesktopStorePurchaseButton";
import { input, inputBox, title } from "../styles/desktopStorePurchaseInput";
import {
  desktopStorePurchaseButton,
  buttonDiv,
  desktopStoreRefundButton,
  desktopStoreRefundButtonHover,
  desktopStorePurchaseButtonHover,
} from "../styles/desktopStorePurchaseButton";

const DesktopStorePurchase = (props: any) => {
  const [isPurchaseHover, setIsPurchaseHover] = useState(false);
  const [isRefundHover, setIsRefundHover] = useState(false);
  const [purchaseButtonStyle, setPurchaseButtonStyle] = useState<CSSProperties>(
    desktopStorePurchaseButton
  );
  const [refundButtonStyle, setRefundButtonStyle] = useState<CSSProperties>(
    desktopStoreRefundButton
  );
  const [purchaseId, setPurchaseId] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<string>("");
  const [purchaseItem, setPurchaseItem] = useState<string>("");
  const handlePurchaseHover = () => {
    setIsPurchaseHover(true);
    setPurchaseButtonStyle(desktopStorePurchaseButtonHover);
  };

  const handleRefundHover = () => {
    setIsRefundHover(true);
    setRefundButtonStyle(desktopStoreRefundButtonHover);
  };

  const handlePurchaseLeave = () => {
    setIsPurchaseHover(false);
    setPurchaseButtonStyle(desktopStorePurchaseButton);
  };

  const handleRefundLeave = () => {
    setIsRefundHover(false);
    setRefundButtonStyle(desktopStoreRefundButton);
  };

  const handlePurchaseId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseId(e.target.value);
  };

  const handlePurchaseAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(e.target.value);
  };

  const handlePurchaseItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseItem(e.target.value);
  };

  const onPurchaseClick = () => {
    alert("결제 진행중.. 기다려 주세요");
    if (purchaseId === "" || purchaseAmount === "" || purchaseItem === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    if (Number(purchaseAmount) <= 0) {
      return alert("금액을 확인해주세요.");
    }
    if (Number(purchaseAmount) > 100000) {
      return alert("최대 결제 금액은 100,000원입니다.");
    }

    if (purchaseAmount.includes(".")) {
      return alert("금액을 확인해주세요.");
    }
    axios
      .get(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/user/username/${purchaseId}`
      )
      .then((res) => {
        if (res.data.user === null) {
          return alert("존재하지 않는 학번입니다.");
        } else {
          axios
            .post(
              `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/purchase/create`,
              {
                username: purchaseId,
                amount: Number(purchaseAmount),
                productName: purchaseItem,
                nameOfUser: res.data.user.name,
                nameOfStore: props.store.name,
                storeName: props.store.username,
              }
            )
            .then((res) => {
              if (res.status === 200) {
                alert("결제에 성공했습니다.");
                window.location.reload();
              }
            })
            .catch((err) => {
              if (err.response) {
                if (err.response.status === 403) {
                  alert("사용자가 결제를 허가하지 않았습니다.");
                  window.location.reload();
                }
              }
            });
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            alert("존재하지 않는 사용자입니다.");
            window.location.reload();
          }
        } else {
          alert("결제에 실패했습니다.");
        }
      });
  };

  const onRefundClick = async () => {
    if (purchaseId === "" || purchaseAmount === "" || purchaseItem === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    if (Number(purchaseAmount) <= 0) {
      return alert("금액을 확인해주세요.");
    }
    if (purchaseAmount.includes(".")) {
      return alert("금액을 확인해주세요.");
    }
    await axios
      .get(
        `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/user/username/${purchaseId}`
      )
      .then((res) => {
        if (res.data.user === null) {
          return alert("존재하지 않는 학번입니다.");
        } else {
          axios
            .post(`http://localhost:8800/api/user/purchase/${purchaseId}`)
            .then((response) => {
              if (response.status === 200) {
                axios
                  .post(
                    `https://minsapay-backend-c1deff28ec91.herokuapp.com/api/purchase/create`,
                    {
                      username: purchaseId,
                      amount: -Number(purchaseAmount),
                      productName: purchaseItem,
                      nameOfUser: res.data.user.name,
                      nameOfStore: props.store.name,
                      storeName: props.store.username,
                    }
                  )
                  .then((resp) => {
                    if (resp.status === 200) {
                      alert("환불에 성공했습니다.");
                      window.location.reload();
                    }
                  })
                  .catch((err) => {
                    if (err.response) {
                      if (err.response.status === 403) {
                        window.location.reload();
                      }
                    }
                  });
              }
            })
            .catch((err) => {
              if (err.response) {
                if (err.response.status === 404) {
                  alert("존재하지 않는 사용자입니다.");
                  window.location.reload();
                }
              } else {
                console.log(err);
                alert("결제에 실패했습니다.");
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("실패했습니다.");
      });
  };

  const [button, setButton] = useState<JSX.Element>(
    <>
      <button
        style={purchaseButtonStyle}
        onMouseEnter={handlePurchaseHover}
        onMouseLeave={handlePurchaseLeave}
        onClick={onPurchaseClick}
      >
        결제
      </button>
      <button
        style={refundButtonStyle}
        onMouseEnter={handleRefundHover}
        onMouseLeave={handleRefundLeave}
        onClick={onRefundClick}
      >
        환불
      </button>
    </>
  );

  useEffect(() => {}, [purchaseId, purchaseAmount, purchaseItem]);

  return (
    <div style={desktopStorePurchase}>
      <div style={inputBox}>
        <h2 style={title}>학번</h2>
        <input
          type="number"
          placeholder="학번"
          style={input}
          value={purchaseId}
          onChange={handlePurchaseId}
        />
      </div>
      <div style={inputBox}>
        <h2 style={title}>금액</h2>
        <input
          type="number"
          placeholder="금액"
          style={input}
          value={purchaseAmount}
          onChange={handlePurchaseAmount}
        />
      </div>
      <div style={inputBox}>
        <h2 style={title}>품목</h2>
        <input
          type="text"
          placeholder="품목"
          style={input}
          value={purchaseItem}
          onChange={handlePurchaseItem}
        />
      </div>
      <div style={buttonDiv}>
        <button
          style={purchaseButtonStyle}
          onMouseEnter={handlePurchaseHover}
          onMouseLeave={handlePurchaseLeave}
          onClick={onPurchaseClick}
        >
          결제
        </button>
        <button
          style={refundButtonStyle}
          onMouseEnter={handleRefundHover}
          onMouseLeave={handleRefundLeave}
          onClick={onRefundClick}
        >
          환불
        </button>
      </div>
    </div>
  );
};

export default DesktopStorePurchase;
