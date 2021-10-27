import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage, Link} from '../css/styles/Styles.js';
import { useHistory } from "react-router-dom";
import About from '../components/About'

const Body = styled.div`
    display: flex;
    margin-top: 6rem;
    flex-direction: column;
    min-height: 120vh;
`
const HeaderDiv = styled.div`
    display: flex;
    padding: 5px 80px;
    min-height: 60vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    background: #BEA7E5;
    background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
    background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
    background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
    z-index: -100;
`

const HeaderText = styled(BigText)`
    align-self: flex-start;
`

function Privacy () {

    return (
        <div>
            <Body>
                <HeaderDiv>
                    <HeaderText>SweetRelief Privacy Policy</HeaderText>
                </HeaderDiv>
            </Body>
            <About/>
        </div>
    )
}

export default Privacy