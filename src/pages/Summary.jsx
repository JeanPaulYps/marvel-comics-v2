import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSummary } from "../components";
import { PayPalButton } from "react-paypal-button-v2";
import "../styles/Summary.css"
import { useDispatch } from 'react-redux';
import { shoppingCartSlice } from '../store';
import { useHistory } from 'react-router';

function Summary() {
    const comicsInCart = useSelector(state => state.shoppingCart.comicsInCart);
    const total = comicsInCart.reduce( (total, comic ) => total + (comic.price * comic.quantity), 0 );
    const totalItems = comicsInCart.reduce((total, comic) => total + comic.quantity, 0);

    const dispatch = useDispatch();
    const history = useHistory();

    const paypalOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        intent: 'capture',
        currency: 'USD'
    };
    const style = {
        layout: "vertical",
        label: "pay",
        shape: "pill",
        size: "responsive"
    };
    const handleSuccess = () => {
        dispatch(shoppingCartSlice.actions.clearCart());
        history.push("/");
    };

    return (
        <div className="Content">
            <OrderSummary total={total} totalItems={totalItems}/>
            <div className="PaypalContainer">
                <PayPalButton
                    paypalOptions={paypalOptions}
                    style={style}
                    amount={total}
                    onSuccess={handleSuccess}
                    onError={error => console.log(error)}
                    onCancel={data => console.log(data)}
                />
            </div>
            
        </div>
    )
}

export {Summary, };
