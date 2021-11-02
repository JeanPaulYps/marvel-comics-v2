import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const comicsInCart = useSelector(state => state.shoppingCart.comicsInCart);
    const totalComicsInCart = comicsInCart.reduce((total, comic) => total + comic.quantity, 0);
    return (
        <div className="Header__Container">
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/MarvelLogo.svg`} alt="" className="Header__Logo" />
            </Link>
            <p className="Header__Link"> CHARACTERS </p>
            <p className="Header__Link"> CREATORS </p>
            <p className="Header__Link"> EVENTS </p>
            <div className="Header__Button Header__Actions">
                <img src={`${process.env.PUBLIC_URL}/SearchIcon.svg`} alt="" className="Header__Icon" />
                <span> Search comic </span>
                
            </div>
            <Link className="Header__Button" to="/checkout">
                <div >
                    <img src={`${process.env.PUBLIC_URL}/ShoppingCart.svg`} alt="" className="Header__Icon" />
                    <span className="Header__text"> Shopping cart </span>
                    <span className="Header__Counter" >{totalComicsInCart} </span>
                </div>
            </Link>

        </div>
    )
}

export { Header, }
