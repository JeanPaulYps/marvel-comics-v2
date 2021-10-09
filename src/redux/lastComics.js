import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { marvelFetch } from "../services";

const fetchLastComics = createAsyncThunk(
    'lastComics/fetchLastComics',
    async ()=>{
        const request = await marvelFetch("comics", {});
        console.log(request);
    },
)


const lastComics = createSlice({
    name: 'lastComics',
    initialState: [],
    extraReducers: {
        [fetchLastComics.fulfilled]: () => {
            console.log("Datos traidos")
        }
    }
});

export {lastComics, fetchLastComics};