import { configureStore } from "@reduxjs/toolkit";
import { buyerSlice } from "./buyerInformation";
import { lastComics } from "./lastComics";
import { shoppingCartSlice } from "./shoppingCart";

const store = configureStore({
  reducer: {
    lastComics: lastComics.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    buyer: buyerSlice.reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
