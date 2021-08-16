import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import Header from '../components/Header.js'
import { useHistory } from "react-router-dom"

const ContentDiv = styled.div`
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
            display: flex;
            padding: 0px;
            height: 100%;
        }
`

const Body = styled.div`
`

const MainDiv = styled.div`
        padding-top: 4rem;
`


function Join ( {location} ) {

    // How this will work section
    // 1. Fill out this quick form
    // 2. Receive an email confirmation once the business has been reviewed
    // 3. Business will be loaded on to the platform. And you can start receiving money immediately. 

    // Enablement -- Show them how to verify that someone has paid. This is the receipt.
    // You'll get a notification from paypal or stripe 
    // Simply look at the receipt 

    return (
        <Body>
            <Header page={location.page}/>
            <ContentDiv>
                <MainDiv>
                    <BigText>Welcome to Join</BigText>
                {/* <BigText>{props.location.state}</BigText> */}
                </MainDiv>
            </ContentDiv>
            
        </Body>
        
    )
}

export default Join