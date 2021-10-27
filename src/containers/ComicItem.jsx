import React from 'react';
import { useDispatch } from 'react-redux';
import { shoppingCartSlice } from '../store';
import '../styles/ComicItem.css';

function ComicItem({ id, coverURL, title, creatorName }) {
    const dispatch = useDispatch();
    const { addComicToCart } = shoppingCartSlice.actions;
    const handleAddToCart = () => {    
        const comicAttributes = {
            "id": id,
            "coverURL": coverURL,
            "title": title,
            "creatorName": creatorName
        }
        dispatch(addComicToCart(comicAttributes));
        
        
    };

    return (
        <div>
            <div className="LastComics__Item" key={id}>
                <img src={coverURL} alt="" className="LastComics__Cover" />
                <button type="button" className="AddToCartButton" onClick={handleAddToCart} >
                    <img src={`${process.env.PUBLIC_URL}/ShoppingcartInButton.svg`} alt="" className="AddToCartButton__CartIcon" />
                    <span> ADD TO CART </span>
                </button>
                <p className="LastComics__Title">{title}</p>
                <p className="LastComics__Author">{creatorName}</p>
            </div>
        </div>
    )
}

export { ComicItem, };