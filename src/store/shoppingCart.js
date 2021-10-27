import { createSlice } from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        comicsInCart: []
    },
    reducers: {
        addComicToCart (state, { payload }) {
            state.comicsInCart.push(payload);
        },
        deleteComicFromCart (state, { payload }) {
            state.comicsInCart.filter(comic => comic.id !== payload.id);
        }
    }

})

export {shoppingCartSlice, };