import { createSlice } from "@reduxjs/toolkit";
import { fetchLastComics } from "../services";
import type { Comic } from "../interfaces/Comic.interface";
import type { ComicRequest } from "../interfaces/ComicRequest.interface";

type LastComicsSlice = {
  comics: Comic[];
  loading: boolean;
  error: boolean;
};

const filterComicAttributesToShow = (comics: ComicRequest[]): Comic[] => {
  const filteredComics = comics.map(
    ({ id, title, thumbnail, creators, prices }) => {
      const { extension, path: imagePath } = thumbnail;
      const creatorName =
        creators.available > 0
          ? creators.items[0].name
          : "Author not available";
      const coverURL = `${imagePath}.${extension}`;
      const price =
        Array.isArray(prices) && prices.length === 0 ? 0 : prices[0].price;
      const filteredAttributes = {
        id: id,
        title: title,
        creatorName: creatorName,
        coverURL: coverURL,
        price: price,
      };
      return filteredAttributes;
    },
  );
  return filteredComics;
};

const initialState: LastComicsSlice = {
  comics: [],
  loading: false,
  error: false,
};

const lastComics = createSlice({
  name: "lastComics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLastComics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLastComics.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;

      const comics = action.payload;
      const filteredComics = filterComicAttributesToShow(comics);

      state.comics = filteredComics;
    });
    builder.addCase(fetchLastComics.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export { lastComics };
