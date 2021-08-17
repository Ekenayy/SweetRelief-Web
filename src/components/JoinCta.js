import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, MedText, DemoImage, Link} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"

const MainDiv = styled.div`
        display: flex;
        min-height: 50vh;
        padding: 5rem 8%;
    `

    const WordDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `
    const TitleText = styled(BigText)`
        font-size: 2.4rem;
        font-weight: 400;
        align-self: center;
        margin-bottom: 1rem;
    `

    const JoinBtn = styled.button`
        align-items: center;
        border-radius: 100px;
        width: auto;
        align-self: center;
        transition: all .2s;
        background-color: #BEA7E5;
        font-size: 1.4rem;
        padding: 1.5rem 3rem;
        font-family: Aileron;
        font-weight: 400;
        text-transform: uppercase;
        &:hover, &:active, &:focus {
            background: #F4A261;
        }
    `

function JoinCta ( ) {

    const history = useHistory()

    

    const handlePress = () => {
        history.push({
            pathname: '/join', 
            page: 'Join'
        });
    }

    return (
        <MainDiv>
            <WordDiv>
                <TitleText>Do you have a business and a bathroom?</TitleText>
                <MedText>We're helping businesses grow foot traffic and reach new audiences!</MedText>
                <JoinBtn onClick={handlePress}>Join the platform</JoinBtn>
            </WordDiv>
        </MainDiv>
    )
}

export default JoinCta
