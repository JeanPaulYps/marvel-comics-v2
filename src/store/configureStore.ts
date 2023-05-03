import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./shoppingCart";
import { lastComics } from "./lastComics"
import { buyerSlice } from "./buyerInformation";


const store = configureStore({
    reducer: {
        lastComics: lastComics.reducer,
        shoppingCart: shoppingCartSlice.reducer,
        buyer: buyerSlice.reducer,
    },
})

export {store, };
