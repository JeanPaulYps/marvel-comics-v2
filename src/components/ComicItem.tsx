import React from 'react';
import { useDispatch } from 'react-redux';
import { shoppingCartSlice } from '../store';
import '../styles/ComicItem.css';

type Props = {
    id: number,
    coverURL: string,
    title: string,
    creatorName: string, 
    price: number
}

function ComicItem({ id, coverURL, title, creatorName, price }: Props) {
    const dispatch = useDispatch();
    const { addComicToCart } = shoppingCartSlice.actions;
    const handleAddToCart = () => {    
        const comicAttributes = {id, coverURL, title, creatorName, price}
        dispatch(addComicToCart(comicAttributes));    
    };

    return (
        <div className="LastComics__Item" key={id}>
            <img src={coverURL} alt="" className="LastComics__Cover" />
            <button type="button" className="AddToCartButton" onClick={handleAddToCart} >
                <img src={`${process.env.PUBLIC_URL}/ShoppingcartInButton.svg`} alt="" className="AddToCartButton__CartIcon" />
                <span> ADD TO CART </span>
            </button>
            <p className="LastComics__Title">{title}</p>
            <p className="LastComics__Author">{creatorName}</p>
            <p className="LastComics__Price">{price}  </p>
        </div>
    )
}

export { ComicItem, };
