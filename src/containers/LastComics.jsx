import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastComics } from '../redux';
import { Loader } from './Loader';
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
                {!error && !loading && comics.map( (comic) => {
                    return(
                            <div className="LastComics__Item" key={comic.id}>
                                <img src={comic.coverURL} alt="" className="LastComics__Cover" />
                                <button type="button" className="AddToCartButton">
                                        <img src={`${process.env.PUBLIC_URL}/ShoppingcartInButton.svg`}  alt="" className="AddToCartButton__CartIcon" />
                                        <span> ADD TO CART </span>
                                </button>
                                <p className="LastComics__Title">{comic.title}</p>
                                <p className="LastComics__Author">{comic.creatorName}</p>
                            </div>
                        )
                    })
                }
                {loading && <Loader/>}
            </div>
        </div>
    )
}

export {LastComics, }   
