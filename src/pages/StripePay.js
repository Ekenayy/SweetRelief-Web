import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components';
import {AllContentDiv, BigText, MedText, StyledLink, TitleText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm'

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`, {
    stripeAccount: `${process.env.REACT_APP_STRIPE_ACCOUNT_ID}`
});

function StripePay () {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
            {/* <BigText>Hello from stripe</BigText> */}
        </Elements>
    )
}

export default StripePay