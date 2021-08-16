import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import Header from '../components/Header.js'
import { useHistory } from "react-router-dom"

const Body = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding-bottom: 30px;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
        @media screen and (max-width: 37.5em) {
            padding: 0px;
        }
`

const MainDiv = styled.div`
    padding-top: 4rem;
`

const ContentDiv = styled.div`
    align-self: center;
    margin-top: 80px;
    width: 90%;
    display: flex;
    border-radius: 40px;
    padding-top: 4rem;
    flex-direction: row;
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    @media screen and (max-width: 37.5em) {
        flex-direction: column;
    }
`

const WordDiv = styled.div`
`


function Join ( ) {

    // How this will work section
    // 1. Fill out this quick form
    // 2. Receive an email confirmation once the business has been reviewed
    // 3. Business will be loaded on to the platform. And you can start receiving money immediately. 

    // Enablement -- Show them how to verify that someone has paid. This is the receipt.
    // You'll get a notification from paypal or stripe 
    // Simply look at the receipt 

    return (
        <Body>
            <ContentDiv>
                <WordDiv>
                    <BigText>Welcome</BigText>
                </WordDiv>
            </ContentDiv>
        </Body>        
    )
}

export default Join