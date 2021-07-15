import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import photo from '../photos/MainPage.png'
import video from '../videos/DemoOrangeFrame.mp4'
import frame from '../photos/newphoneframe.png'


function Intro () {

    // The Intro page will have the different components

    // One main section holding everything with style flex: 1
    // Two sections side by side
    // One section with a product video playing 
    // The second section with the download link and general information

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
    `

    const WordDiv = styled.div`
        align-items: center;
        width: 100%;
        padding-left: 50px;
        padding-top: 80px;
    `

    const ProductDiv = styled.div`
        align-items: center;
        padding-bottom: 20px;
    `

    const BigText = styled.h1`
        font-size: 4rem;
        text-align: left;
        font-weight: 500;
    `

    const MedText = styled(BigText)`
        font-size: 2.7rem;
        weight: 400;
    `

    const SmallText = styled.p`
        font-size: 1.7rem;
        margin-top: 30px;
        text-align: left;
    `

    useEffect(() => {

        document.querySelector('video#videoBG').playbackRate=1.25
    }, [])

    return (
        // <div id="Intro" class='section'>
            <MainDiv id='Intro'>
                <WordDiv>
                    <BigText id='intro-header'>SweetRelief</BigText>
                    <MedText id='intro-subheader'>Find restrooms. Discover local businesses.</MedText>
                    <SmallText id='intro-text'>Finding a restroom in the city can be tough. Finding new customers can be even tougher.
                        SweetRelief is connecting awesome businesses with awesome people through the power of the potty!
                    </SmallText>
                </WordDiv>
                <ProductDiv >
                    {/* <img id='phoneFrame' src={frame} alt='mobile frame'/> */}
                    <video id='videoBG' poster={photo} playsinline autoplay='autoplay' loop muted={true}>
                        <source src={video} type='video/mp4'/>
                    </video>
                </ProductDiv>
            </MainDiv>
        // </div>
    )

}

export default Intro