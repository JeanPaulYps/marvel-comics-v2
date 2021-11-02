import React from 'react';
import { Link } from 'react-router-dom';

function OrderSummary({ total }) {
    return (
        <div className="Summary">
            <Link className="BackToHome" to="/">
                <img src={`${process.env.PUBLIC_URL}/ArrowBack.svg`} alt=""/>
                <span className="BackToHome__Text">Back to store</span>
            </Link>
            <div className="Summary__Container">
                <div className="Summary__ContainerTotal">
                    <div className="Summary__Text">Total</div>
                    <div className="Summary__Total">{(Math.round(total * 100, 2)/100).toFixed(2)}</div>
                </div>
                <div className="Summary__ItemsCount">2 items</div>
            </div>
        </div>
    )
}

export { OrderSummary, };
