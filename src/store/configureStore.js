import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./shoppingCart";
import { lastComics } from "./lastComics"


const store = configureStore({
    reducer: {
        lastComics: lastComics.reducer,
        shoppingCart: shoppingCartSlice.reducer,
    },
})

export {store, }