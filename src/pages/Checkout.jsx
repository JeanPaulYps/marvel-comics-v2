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
                        <button className="Item__QuantityButton">-</button>
                        <span className="Item__Quantity">1</span>
                        <button className="Item__QuantityButton">+</button>
                    </div>
                    <p className="Item__Price">$3</p>
                    <img src={`${process.env.PUBLIC_URL}/DeleteIcon.svg`} alt=""
                     className="Item__DeleteIcon" />
                </div>
                <div className="Item">
                    <div className="Item__Image"></div>
                    <div className="Item__Description">
                        <p className="Item__Title">Inferno #1 </p>
                        <p className="Item__Author">Hickman, Schiti</p>
                    </div>
                    <div className="Item__QuantityModification">
                        <button className="Item__QuantityButton">-</button>
                        <span className="Item__Quantity">1</span>
                        <button className="Item__QuantityButton">+</button>
                    </div>
                    <p className="Item__Price">$3</p>
                    <img src={`${process.env.PUBLIC_URL}/DeleteIcon.svg`} alt=""
                     className="Item__DeleteIcon" />
                </div>
                <div className="Summary">
                    <div className="BackToHome">
                        <img src={`${process.env.PUBLIC_URL}/ArrowBack.svg`} alt="" />
                        <span className="BackToHome__Text">Back to store</span>
                    </div>
                    <div className="Summary__Container">
                        <div className="Summary__ContainerTotal">
                            <div className="Summary__Text">Total</div>
                            <div className="Summary__Total">$3</div>
                        </div>
                        <div className="Summary__ItemsCount">2 items</div>
                    </div>
                </div>
                <div className="ContinueOrder">
                    <button className="ContinueOrder__Button">CONTINUE ORDER</button>
                </div>
            </div>
        </div>
    )
}
export { Checkout, };