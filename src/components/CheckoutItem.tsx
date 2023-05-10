import React from "react";
import { useDispatch } from "react-redux";
import { shoppingCartSlice } from "../store";
import type { ShoppingComicsCart } from "../interfaces/Comic.interface";

type Props = {
  comic: ShoppingComicsCart,
  //   id: number;
  //   coverURL: string;
  //   title: string;
  //   creatorName: string;
  //   price: number;
  //   quantity: number;
  // };
};

function CheckoutItem({
  comic: { id, coverURL, title, creatorName, price, quantity },
}: Props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(shoppingCartSlice.actions.deleteComicFromCart(id));
  };
  const handleAddComic = () => {
    dispatch(shoppingCartSlice.actions.addOneComic(id));
  };
  const handleSubtractComic = () => {
    dispatch(shoppingCartSlice.actions.subtractOneComic(id));
  };
  return (
    <div className="Item">
      <img src={coverURL} alt="" className="Item__Image" />
      <div className="Item__Description">
        <p className="Item__Title">{title} </p>
        <p className="Item__Author">{creatorName}</p>
      </div>
      <div className="Item__QuantityModification">
        <button className="Item__QuantityButton" onClick={handleSubtractComic}>
          -
        </button>
        <span className="Item__Quantity">{quantity}</span>
        <button className="Item__QuantityButton" onClick={handleAddComic}>
          +
        </button>
      </div>
      <p className="Item__Price">
        {(Math.round(price * quantity * 100) / 100).toFixed(2)}
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/DeleteIcon.svg`}
        alt=""
        className="Item__DeleteIcon"
        onClick={handleDelete}
      />
    </div>
  );
}

export { CheckoutItem };
