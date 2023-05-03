// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import { marvelFetch } from "../services";

const fetchLastComics = createAsyncThunk(
    'lastComics/fetchLastComics',
    async ()=>{
        const request = await marvelFetch("comics", {
            "orderBy": "modified", 
            "format":"comic"
        });
        const comicsData = request.data.data.results;
        return comicsData;
    },
)

export { fetchLastComics, };
