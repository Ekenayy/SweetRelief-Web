import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'

const MainDiv = styled.div`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding-top: 5rem;
        padding-left: 3rem;
        flex-direction: row;
        width: 100%;
        min-height: 35vh;
        background: #1C1C1C;
        @media (max-width: 60.25em) {
            flex-direction: column;
        }
`

const TitleText = styled.h2`
    color: #F7F8F3;
    weight: 500;
    font-size: 1.7rem;
    padding-bottom: 0px;
`

const AboutText = styled.p`
    weight: 300;
    color: #F7F8F3;
    font-size: 1.3rem;
`

const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 56.25em) {
    }
    padding: 0px 10px;
`

function About () {
    return (
        <MainDiv id="About">
            <AboutItem>
                <TitleText>About SweetRelief</TitleText>
                <AboutText>We're bringing people together </AboutText>
            </AboutItem>
            <AboutItem>
                <TitleText>Contact</TitleText>
                <AboutText>info@sweetrelief.tech</AboutText>
            </AboutItem>
        </MainDiv>
    )
}

export default About