import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

function Header() {
    const shoppingCart = useSelector(state => state.shoppingCart.comicsInCart);
    return (
        <div className="Header__Container">
            <img src={`${process.env.PUBLIC_URL}/MarvelLogo.svg`} alt="" className="Header__Logo" />
            <p className="Header__Link"> CHARACTERS </p>
            <p className="Header__Link"> CREATORS </p>
            <p className="Header__Link"> EVENTS </p>
            <buton className="Header__Button Header__Actions">
                <img src={`${process.env.PUBLIC_URL}/SearchIcon.svg`} alt="" className="Header__Icon" />
                <span> Search comic </span>
                
            </buton>
            <buton className="Header__Button">
                <img src={`${process.env.PUBLIC_URL}/ShoppingCart.svg`} alt="" className="Header__Icon" />
                <span> Shopping cart </span>
                <span className="Header__Counter" >{shoppingCart.length} </span>
            </buton>

        </div>
    )
}

export { Header, }
