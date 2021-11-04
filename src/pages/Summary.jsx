import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSummary } from "../components";
import { PayPalButton } from "react-paypal-button-v2";
import "../styles/Summary.css"

function Summary() {
    const comicsInCart = useSelector(state => state.shoppingCart.comicsInCart);
    const total = comicsInCart.reduce( (total, comic ) => total + (comic.price * comic.quantity), 0 );
    const totalItems = comicsInCart.reduce((total, comic) => total + comic.quantity, 0);
    const paypalOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    };

    return (
        <div className="Content">
            <OrderSummary total={total} totalItems={totalItems}/>
            <div className="PaypalContainer">
                <PayPalButton
                    paypalOptions={paypalOptions}
                    amount={total}
                    onSuccess={data => console.log(data)}
                    onError={error => console.log(error)}
                    onCancel={data => console.log(data)}
                />
            </div>
        </div>
    )
}

export {Summary, };
