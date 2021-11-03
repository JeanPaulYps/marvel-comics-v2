import React from 'react';
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
                            <span className="Form__Text">Name and Last name</span>
                            <input type="text" name="" id="name" className="Form__Input" />
                        </label>
                        <label htmlFor="phone" className="Form__Label">
                            <span className="Form__Text">Phone Number</span>
                            <input type="tel" id="phone" className="Form__Input" pattern="[0-9]*"/>
                        </label>
                    </div>
                    <h3 className="Form__Title">Delivery information</h3>
                    <div className="Form__Section">
                        <label htmlFor="country" className="Form__Label">
                            <span className="Form__Text">Country</span>
                            <input type="text" id="country" className="Form__Input" />
                        </label>
                        <label htmlFor="Address" className="Form__Label">
                            <span className="Form__Text">Address</span>
                            <input type="text" className="Form__Input"/>
                        </label>
                        <label htmlFor=""  className="Form__Label">
                            <span className="Form__Text">Additional information</span>
                            <input type="text" className="Form__Input"/>
                        </label>
                        <label htmlFor=""  className="Form__Label">
                            <span className="Form__Text">City</span>
                            <input type="text" className="Form__Input"/>
                        </label>
                        <label htmlFor=""  className="Form__Label">
                            <span className="Form__Text">State</span>
                            <input type="text" className="Form__Input"/>
                        </label>
                        <label htmlFor=""  className="Form__Label">
                            <span className="Form__Text">Zip Code</span>
                            <input type="text" className="Form__Input" pattern="[0-9]*" />
                        </label>
                    </div>
                </form>
            </div>
            <div className="Payment__Section">
                <h2 className="Payment__SubTitle">Payment Details</h2>
                <h3 className="Form__Title">Credit card information</h3>
                <div className="Form__Section">
                    <label htmlFor="creditCardNumber" className="Form__Label">
                        <span className="Form__Text">Credit Card number</span>
                        <input type="text" id="creditCardNumber"  className="Form__Input"/>
                    </label>
                    <label htmlFor="nameOnCard" className="Form__Label">
                        <span className="Form__Text">Full name on card</span>
                        <input type="text" id="nameOnCard"  className="Form__Input"/>
                    </label>
                    <label htmlFor="expirationDate" className="Form__Label">
                        <span className="Form__Text">Expiration Date</span>
                        <input type="number" id="expirationDate" className="Form__Input--ExpirationDates " min="1" max="12"/>
                        <input type="number" id="expirationDate" className="Form__Input--ExpirationDates " min="00" max="99"/>
                    </label>
                    <label htmlFor="nameOnCard" className="Form__Label">
                        <span className="Form__Text">CVV</span>
                        <input type="text" id="expirationDate" className="Form__Input--ExpirationDates " pattern="[0-9]{3}"/>
                    </label>

                </div>

            </div>

        </div>
    )
}

export { Payment, };
