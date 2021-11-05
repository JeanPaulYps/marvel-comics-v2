import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Payment.css";

function Payment() {
    return (
        <div className="Payment">
            <h1 className="Payment__Title">Payment</h1>
            <div className="Payment__Section">
                <h2 className="Payment__SubTitle">Delivery Details</h2>
                <form action="#">
                    <h3 className="Form__Title">Contact information</h3>
                    <div className="Form__Section">
                        <label htmlFor="name" className="Form__Label" for="name" >
                            <span className="Form__Text">Name and last name</span>
                            <input type="text" name="name" id="name" className="Form__Input" />
                        </label>
                        <label htmlFor="phone" className="Form__Label">
                            <span className="Form__Text">Phone Number</span>
                            <input type="tel" name="phone" id="phone" className="Form__Input" pattern="[0-9]*" />
                        </label>
                    </div>
                    <h3 className="Form__Title">Delivery information</h3>
                    <div className="Form__Section">
                        <label htmlFor="country" className="Form__Label">
                            <span className="Form__Text">Country</span>
                            <input type="text" name="country" id="country" className="Form__Input" />
                        </label>
                        <label htmlFor="address" className="Form__Label">
                            <span className="Form__Text">Address</span>
                            <input type="text" name="address" className="Form__Input" id="address"/>
                        </label>
                        <label htmlFor="additionalInformation"  className="Form__Label">
                            <span className="Form__Text">Additional information</span>
                            <input type="text" name="additionalInformation" className="Form__Input" id="additionalInformation"/>
                        </label>
                        <label htmlFor="city"  className="Form__Label">
                            <span className="Form__Text">City</span>
                            <input type="text" name="city" className="Form__Input" id="city"/>
                        </label>
                        <label htmlFor="state"  className="Form__Label">
                            <span className="Form__Text">State</span>
                            <input type="text" name="state" className="Form__Input" id="state"/>
                        </label>
                        <label htmlFor="zipCode"  className="Form__Label">
                            <span className="Form__Text">Zip Code</span>
                            <input type="text" name="zipCode" className="Form__Input" pattern="[0-9]*" id="zipCode" />
                        </label>
                    </div>
                </form>
            </div>
            <div className="NavigationButtons">
                <Link className="BackToHome" to="/checkout">
                    <img src={`${process.env.PUBLIC_URL}/ArrowBack.svg`} alt=""/>
                    <span className="BackToHome__Text">Back to shopping cart</span>
                </Link>
                <Link to="/summary">
                        <button className="ContinueOrder__Button">GO TO PAY</button>
                </Link>
            </div>
        </div>
    )
}

export { Payment, };
