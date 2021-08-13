import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"

function Join () {

    const Body = styled.div`
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

    return (
        <Body>
            <AllContentDiv>
                <BigText> Welcome to Join</BigText>
            </AllContentDiv>
        </Body>
        
    )
}

export default Join