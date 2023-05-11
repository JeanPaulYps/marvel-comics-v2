import React from "react";
import "../styles/Summary.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { OrderSummary, BridgePayPalButton } from "../components";
import { useAppSelector } from "../hooks/hooks";
import { shoppingCartSlice } from "../store";

function Summary() {
  const comicsInCart = useAppSelector(
    (state) => state.shoppingCart.comicsInCart,
  );
  const total = comicsInCart.reduce(
    (total, comic) => total + comic.price * comic.quantity,
    0,
  );
  const totalItems = comicsInCart.reduce(
    (total, comic) => total + comic.quantity,
    0,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const paypalOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
    intent: "capture",
    currency: "USD",
  };
  const style = {
    layout: "vertical",
    label: "pay",
    shape: "pill",
    size: "responsive",
  };
  const handleSuccess = (data: any) => {
    if (data.status === "COMPLETED") {
      dispatch(shoppingCartSlice.actions.clearCart());
      history.push("/payment/success");
    }
  };

  return (
    <div className="Content">
      <OrderSummary total={total} totalItems={totalItems} />
      <div className="PaypalContainer">
        <BridgePayPalButton
          options={paypalOptions}
          style={style}
          amount={total}
          onSuccess={handleSuccess}
          onError={(error: any) => console.log(error)}
          onCancel={(data: any) => console.log(data)}
        />
      </div>
    </div>
  );
}

export { Summary };
