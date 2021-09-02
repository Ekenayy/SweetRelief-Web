import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components';
import {AllContentDiv, BigText, MedText, StyledLink, TitleText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import {CardElement} from '@stripe/react-stripe-js';
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };


function CheckoutForm () {

    const RedText = styled(BigText)`
        color: red;
    `

    return ( 
        <CardElement options={CARD_ELEMENT_OPTIONS} />
    )
}

export default CheckoutForm