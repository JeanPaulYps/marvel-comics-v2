import React, { useEffect } from "react";
import { Loader, ComicItem } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchLastComics } from "../services";
import "../styles/LastComics.css";
import type { Comic } from "../interfaces/Comic.interface";

function LastComics() {
  const comics: Comic[] = useAppSelector((state) => state.lastComics.comics);
  const error = useAppSelector((state) => state.lastComics.error);
  const loading = useAppSelector((state) => state.lastComics.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch(fetchLastComics());
    };
    getData();
  }, [dispatch]);

  return (
    <div className="LastComics">
      {!error &&
        !loading &&
        comics.map((comic) => (
          <ComicItem
            key={comic.id}
            id={comic.id}
            coverURL={comic.coverURL}
            title={comic.title}
            creatorName={comic.creatorName}
            price={comic.price}
          />
        ))}
      {loading && <Loader />}
    </div>
  );
}

export { LastComics };
