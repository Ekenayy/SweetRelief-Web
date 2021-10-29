import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage, Link} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"

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
    font-family: Aileron;
    weight: 400;
    font-size: 1.3rem;
    padding-bottom: 0px;
    text-align: center;
    max-width: 90%;
`

const AboutText = styled.p`
    font-family: Aileron;
    weight: 300;
    color: #F7F8F3;
    font-size: 1rem;
    max-width: 100%;
    @media (max-width: 60.25em) {
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    }
`

const LinkText = styled(AboutText)`
    color: #BEA7E5;
    text-align: center;

`

const IconText = styled(LinkText)`
    font-family: Font awesome 5 free 400;
    font-wight: 400;
`

const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 56.25em) {
    }
    padding: 0px 10px;
`

const StyledLink = styled(Link)`
        text-decoration: none;
        color: inherit;
        outline: none;
        cursor: pointer;
`

function About ( {location} ) {

    const history = useHistory()

    let nowShowArr = ['/reset_password', '/pay', '/stripe']

    const ConditionalComponent = () => {
        switch (nowShowArr.includes(location.pathname)) {
            case true: 
                return null
            default:
                return (
                    <MainDiv id="About">
                        <AboutItem>
                            <TitleText>About SweetRelief</TitleText>
                            <AboutText>Our goal is to increase access to restrooms while also helping small businesses reach new audiences. </AboutText>
                        </AboutItem>
                        <AboutItem>
                            <TitleText>Contact</TitleText>
                            <StyledLink href='mailto:info@sweetrelief.tech' target='blank'>
                                <LinkText>info@sweetrelief.tech</LinkText>
                                {/* <i class="fa fa-envelope"></i> */}
                            </StyledLink>
                        </AboutItem>
                        <AboutItem>
                            <TitleText>Legal</TitleText>
                            <StyledLink href='/terms'>
                                <LinkText>Terms of Service</LinkText>
                            </StyledLink>
                            <StyledLink href='/privacy'>
                                <LinkText>Privacy Policy</LinkText>
                            </StyledLink>
                        </AboutItem>
                    </MainDiv>
                )
        }
    }

    return (
        <ConditionalComponent/>
    )
}

export default About