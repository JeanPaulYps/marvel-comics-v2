    import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { InputText } from '../components/UI/atoms/InputText/InputText';
import { buyerSlice } from '../store';
import "../styles/Payment.css";


function Payment() {
    const form = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
    const handleContinueOrder = () => {
        if (form.current){
            const formData = new FormData(form.current);
            const name = formData.get("name");
            const phone = formData.get("phone");
            const country = formData.get("country");
            const address = formData.get("address");
            const additionalInformation = formData.get("additionalInformation");
            const city = formData.get("city");
            const state = formData.get("state");
            const zipCode = formData.get("zipCode");
            const buyerInformation = {
                name, 
                phone, 
                country,
                address,
                additionalInformation,
                city,
                state,
                zipCode
            };
            dispatch(buyerSlice.actions.addClientInformation(buyerInformation));
        }
    }
    return (
        <div className="Payment">
            <h1 className="Payment__Title">Payment</h1>
            <div className="Payment__Section">
                <h2 className="Payment__SubTitle">Delivery Details</h2>
                <form action="#" ref={form}>
                    <h3 className="Form__Title">Contact information</h3>
                    <div className="Form__Section">
                        <InputText name='name' label="Name and last name" />
                        <InputText name='phone' label="Phone Number" pattern='[0-9]*'/>
                    </div>
                    <h3 className="Form__Title">Delivery information</h3>
                    <div className="Form__Section">
                        <InputText name="country" label="Country" />
                        <InputText name="address" label="Address" />
                        <InputText name="additionalInformation" label="Additional Information" />
                        <InputText name="city" label="City" />
                        <InputText name="state" label="State" />
                        <InputText name="zipCode" label="Zip Code" pattern='[0-9]*' />
                    </div>
                </form>
            </div>
            <div className="NavigationButtons">
                <Link className="BackToHome" to="/checkout">
                    <img src={`${process.env.PUBLIC_URL}/ArrowBack.svg`} alt=""/>
                    <span className="BackToHome__Text">Back to shopping cart</span>
                </Link>
                <Link to="/summary">
                        <Button className="ContinueOrder__Button" onClick={handleContinueOrder}>GO TO PAY</Button>
                </Link>
            </div>
        </div>
    )
}

export { Payment, };
