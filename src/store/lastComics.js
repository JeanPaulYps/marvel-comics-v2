import { createSlice } from "@reduxjs/toolkit";
import { fetchLastComics } from "../services";


const filterComicAttributesToShow = (comics) => {
    let filteredComicAttributes = [];
    for(const {id, title, thumbnail, creators} of comics) {
        const {extension, path: imagePath} = thumbnail;
        const creatorName = (creators.available > 0) ? creators.items[0].name : "Author not available";
        const coverURL = `${imagePath}.${extension}`;
        const filteredAttributes = {id: id, title: title, creatorName: creatorName, coverURL: coverURL };
        filteredComicAttributes = [...filteredComicAttributes, filteredAttributes];
    }
    return filteredComicAttributes;
}


const initialState = {
    comics: [],
    loading: false,
    error: false
}

const lastComics = createSlice({
    name: 'lastComics',
    initialState,
    extraReducers: {
        [fetchLastComics.pending]: (state) => {
            state.loading = true;
        },
        [fetchLastComics.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = false;

            const comics = action.payload;
            const filteredComics = filterComicAttributesToShow(comics);
            
            state.comics = filteredComics;
        },
        [fetchLastComics.rejected]: (state) =>{
            state.loading = false;
            state.error = true;
        }
    }
});

export {lastComics, };