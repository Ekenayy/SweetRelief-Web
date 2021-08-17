import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, MedText, TitleText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import Header from '../components/Header.js'
import { useHistory } from "react-router-dom"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

const Span = ({ className, children, id, onClick }) => {
    <span className={className} id={id} onClick={onClick}> {children}</span>
}
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
    min-width: 80%;
    display: flex;
    border-radius: 10px;
    padding: 20px 40px;
    flex-direction: row;
    position: relative;
    z-index: 1;
    min-height: 80vh;
    background: #FFFFFF;
    box-shadow: 16px 17px 15px 0px rgba(13,13,13,0.59);
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
    @media screen and (max-width: 37.5em) {
    }
`

const WordDiv = styled.div`
    padding-top: 80px;
    max-width: 40%;
    @media screen and (max-width: 767px) {
        max-width: 100%;
    }
    @media screen and (max-width: 37.5em) {
    }
`

const InstructionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const WelcomeText = styled(TitleText)`
`

const InstructText = styled(MedText)`
    margin-left: 15px;
    font-size: 2rem;
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
                    <WelcomeText>Join the platform in a few easy steps</WelcomeText>
                    <InstructionDiv>
                        <CreateOutlinedIcon class='instruct-icon'/>
                        <InstructText>Fill out this quick form</InstructText>
                    </InstructionDiv>
                    <InstructionDiv>
                        <DraftsOutlinedIcon class='instruct-icon'/>
                        <InstructText>Receive an email confirmation</InstructText>
                    </InstructionDiv>
                    <InstructionDiv>
                        <CheckCircleOutlinedIcon class='instruct-icon'/>
                        <InstructText>Once verified, your business will be loaded on the app!</InstructText>
                    </InstructionDiv>
                </WordDiv>
            </ContentDiv>
        </Body>        
    )
}

export default Join