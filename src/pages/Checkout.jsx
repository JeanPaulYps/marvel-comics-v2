import React from 'react';
import { useSelector } from 'react-redux';
import { CheckoutItem, OrderSummary } from '../components';
import { Link } from 'react-router-dom';
import "../styles/Checkout.css";

function Checkout() {
    const comicsInCart = useSelector(state => state.shoppingCart.comicsInCart);
    const total = comicsInCart.reduce( (total, comic ) => total + (comic.price * comic.quantity), 0 );
    return (
        <div className="Checkout">
            <h1 className="Checkout__Title">My cart</h1>
            <div className="Cart">
                {comicsInCart.map( (comic) => <CheckoutItem comic={comic} key={comic.id}/> )}
                <OrderSummary total={total}/>
                <div className="ContinueOrder">
                    <Link to="/payment">
                        <button className="ContinueOrder__Button">CONTINUE ORDER</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Checkout, };
