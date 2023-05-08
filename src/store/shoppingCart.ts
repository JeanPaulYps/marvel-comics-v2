import { createSlice } from "@reduxjs/toolkit";
import type { ShoppingComicsCart } from "../interfaces/Comic.interface";

type shoppingCart = {
  comicsInCart: ShoppingComicsCart[];
  totalComicsInCart: number;
};

const initialState: shoppingCart = {
  comicsInCart: [],
  totalComicsInCart: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addComicToCart(state, { payload }) {
      const { id } = payload;
      const comicIndex = state.comicsInCart.findIndex(
        (comic) => comic.id === id,
      );

      if (comicIndex !== -1) {
        state.comicsInCart[comicIndex].quantity++;
      } else {
        state.comicsInCart.push({ ...payload, quantity: 1 });
      }

      state.totalComicsInCart++;
    },
    deleteComicFromCart(state, { payload }) {
      state.comicsInCart = state.comicsInCart.filter(
        (comic) => comic.id !== payload,
      );
    },
    addOneComic(state, { payload }) {
      const comicIndex = state.comicsInCart.findIndex(
        (comic) => comic.id === payload,
      );
      state.comicsInCart[comicIndex].quantity++;
    },
    subtractOneComic(state, { payload }) {
      const comicIndex = state.comicsInCart.findIndex(
        (comic) => comic.id === payload,
      );
      const comicQuantity = state.comicsInCart[comicIndex].quantity;
      state.comicsInCart[comicIndex].quantity =
        comicQuantity !== 1 ? comicQuantity - 1 : 1;
    },
    clearCart(state) {
      state.comicsInCart = [];
    },
  },
});

export { shoppingCartSlice };
