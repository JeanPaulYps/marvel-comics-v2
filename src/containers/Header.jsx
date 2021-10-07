import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <div className="Header__Container">
            <img src={`${process.env.PUBLIC_URL}/MarvelLogo.svg`} alt="" className="Header__Logo" />
            <p className="Header__Link"> CHARACTERS </p>
            <p className="Header__Link"> CREATORS </p>
            <p className="Header__Link"> EVENTS </p>
            <p className="Header__Button Header__Actions">
                <img src={`${process.env.PUBLIC_URL}/SearchIcon.svg`} alt="" className="Header__Icon" />
                Search comic
            </p>
            <p className="Header__Button">
                <img src={`${process.env.PUBLIC_URL}/ShoppingCart.svg`} alt="" className="Header__Icon" />
                Shopping cart
            </p>

        </div>
    )
}

export { Header, }
