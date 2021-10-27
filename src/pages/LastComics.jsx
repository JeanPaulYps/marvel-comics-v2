import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastComics } from '../services';
import { Loader, ComicItem } from '../containers';
import '../styles/LastComics.css';


function LastComics() {
    const comics = useSelector(state => state.lastComics.comics);
    const error = useSelector(state => state.lastComics.error);
    const loading = useSelector(state => state.lastComics.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        const getData = async () => {
            dispatch(fetchLastComics());
        }
        getData();
    },[dispatch])
    
    return (
        <div>
            <div className="LastComics">
                {
                !error && !loading && comics.map((comic) => {
                    return(
                        <ComicItem  id = {comic.id} coverURL={comic.coverURL} title={comic.title} creatorName={comic.creatorName} />
                        )
                    })
                }
                {loading && <Loader/>}
            </div>
        </div>
    )
}

export {LastComics, }   
