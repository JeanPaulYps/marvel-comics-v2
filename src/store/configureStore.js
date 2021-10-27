import { configureStore } from "@reduxjs/toolkit";
import { lastComics } from "./lastComics";

const store = configureStore({
    reducer: {
        lastComics: lastComics.reducer,
    },
})

export {store, }