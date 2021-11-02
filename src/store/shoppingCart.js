import { createSlice } from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        comicsInCart: [],
        totalComicsInCart: 0
    },
    reducers: {
        addComicToCart (state, { payload }) {
            const {id} = payload;
            const comicIndex = state.comicsInCart.findIndex(comic => comic.id === id);

            if (comicIndex !== -1){
                state.comicsInCart[comicIndex].quantity++;
            }
            else {
                state.comicsInCart.push({...payload, "quantity": 1});
            }
            
            state.totalComicsInCart++;
        },
        deleteComicFromCart (state, { payload }) {
            state.comicsInCart.filter(comic => comic.id !== payload.id);
        }
    }

})

export {shoppingCartSlice, };