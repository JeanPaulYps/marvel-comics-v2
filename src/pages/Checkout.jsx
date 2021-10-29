import React from 'react';
import "../styles/Checkout.css";

function Checkout() {
    return (
        <div className="Checkout">
            <h1 className="Checkout__Title">My cart</h1>
            <div className="Cart">
                <div className="Item">
                    <div className="Item__Image"></div>
                    <div className="Item__Description">
                        <p className="Item__Title">Inferno #1 </p>
                        <p className="Item__Author">Hickman, Schiti</p>
                    </div>
                    <div className="Item__QuantityModification">
                        <button className="Item__QuantityButton">+</button>
                        <span className="Item__Quantity">1</span>
                        <button className="Item__QuantityButton">-</button>
                    </div>
                    <p className="Item__Price">$3</p>
                    <img src={`${process.env.PUBLIC_URL}/DeleteIcon.svg`} alt=""
                     className="Item__DeleteIcon" />
                </div>
            </div>
        </div>
    )
}
export { Checkout, };