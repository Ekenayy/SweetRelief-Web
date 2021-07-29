import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import photo from '../photos/MainPage.png'
import video from '../videos/DemoOrangeFrame.mp4'
import frame from '../photos/newphoneframe.png'
import { useMediaQuery } from 'react-responsive';

    const Words = styled.p`
        align-self: center;
    `

    const MainDiv = styled.div`
        display: flex;
        position: relative;
        flex-direction: row;
        padding: 40px 20px; 
        width: 100%
        min-height: 85vh;
        height: 100%;
        justify-content: space-around;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
        @media screen and (max-width: 37.5em) {
        }
    `

    const WordDiv = styled.div`
        align-items: center;
        width: 100%;
        padding-left: 50px;
        padding-top: 80px;
        @media screen and (max-width: 37.5em) {
            padding-left: 0px;
        }
    `

    const ProductDiv = styled.div`
        align-items: center;
        padding-bottom: 20px;
    `

    const BigText = styled.h1`
        font-size: 4rem;
        text-align: left;
        font-weight: 500;
        @media screen and (max-width: 37.5em) {
            text-align: center;
        }
    `

    const MedText = styled(BigText)`
        font-size: 2.7rem;
        weight: 400;
    `

    const SmallText = styled.p`
        font-size: 1.7rem;
        margin-top: 30px;
        text-align: left;
        @media screen and (max-width: 37.5em) {
            text-align: center;
        }
    `

function Intro () {

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    useEffect(() => {
        document.querySelector('video#videoBG').playbackRate=1.25
    }, [])

    // If the window is a certain size, show a clickable video instead

    return (
        // <div id="Intro" class='section'>
            <MainDiv id='Intro'>
                <WordDiv>
                    <BigText id='intro-header'>SweetRelief</BigText>
                    <MedText id='intro-subheader'>Find restrooms. Discover local businesses.</MedText>
                    {isMobile ? <SmallText> We're connecting awesome businesses with awesome people through the power of the potty!</SmallText> : <SmallText id='intro-text'>Finding a restroom in the city can be tough. Finding new customers can be even tougher.
                        SweetRelief is connecting awesome businesses with awesome people through the power of the potty!
                    </SmallText>}
                </WordDiv>
                <ProductDiv >
                    {/* <img id='phoneFrame' src={frame} alt='mobile frame'/> */}
                    <video id='videoBG' poster={photo} playsInline autoPlay='autoplay' loop muted={true}>
                        <source src={video} type='video/mp4'/>
                    </video>
                </ProductDiv>
            </MainDiv>
        // </div>
    )

}

export default Intro