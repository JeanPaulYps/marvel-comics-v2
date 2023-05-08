import React from "react";
import { Link } from "react-router-dom";
import { CheckoutItem, OrderSummary, Button } from "../components";
import "../styles/Checkout.css";
import { useAppSelector } from "../hooks/hooks";

function Checkout() {
  const comicsInCart = useAppSelector(
    (state) => state.shoppingCart.comicsInCart,
  );
  const totalItems = comicsInCart.reduce(
    (total, comic) => total + comic.quantity,
    0,
  );
  const total = comicsInCart.reduce(
    (total, comic) => total + comic.price * comic.quantity,
    0,
  );
  return (
    <div className="Checkout">
      <h1 className="Checkout__Title">My cart</h1>
      <div className="Cart">
        {comicsInCart.map((comic) => (
          <CheckoutItem comic={comic} key={comic.id} />
        ))}
        <OrderSummary total={total} totalItems={totalItems} />
        <div className="ContinueOrder">
          <Link to="/payment">
            <Button className="ContinueOrder__Button">CONTINUE ORDER</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Checkout };
