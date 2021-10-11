import React from 'react';
import '../styles/ComicItem.css';

function ComicItem({ id, coverURL, title, creatorName }) {
    return (
        <div>
            <div className="LastComics__Item" key={id}>
                <img src={coverURL} alt="" className="LastComics__Cover" />
                <button type="button" className="AddToCartButton">
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