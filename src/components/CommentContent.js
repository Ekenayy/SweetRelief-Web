import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import CommentScreen from '../photos/CommentScreen.png'
import { useMediaQuery } from 'react-responsive';

    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `

    const MobilePicDiv = styled(PicDiv)`
        max-height: 450px;
        max-width: 250px;
        position: absolute;
        left: 30px;
        bottom: 30px;
    `

    const MobileOverlay = styled(MobilePicDiv)`
        position: relative;
        left: 100px;
        top: 30px;
        bottom: 0px;
        opacity: 0.95;
    `

    const CommentMobile = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        padding-right: 80px;
        height: 100%;
        padding-left: 50px;
    `

    const CommentWeb = styled.div`
        display: flex;
        flex-direction: row;
        padding-left: 50px;
        height: 100%;
        align-items: center;
        align-self: center;
        @media screen and (max-width: 37.5em) {
            flex-direction: column;
            position: relative;
            padding-right: 80px;
        }
`

const WebPicDiv = styled(PicDiv)`
        margin: 0px 20px;
`

function CommentContent () {

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    const MobileMedia = () => {
        return (
            <CommentMobile>
                <MobilePicDiv>
                    <DemoImage src={CommentScreen}></DemoImage>
                </MobilePicDiv>
                <MobileOverlay>
                    <DemoImage src={CommentScreen}></DemoImage>
                </MobileOverlay>
            </CommentMobile>
        )
    }

    const WebMedia = () => {
        return (
            <CommentWeb>
                <WebPicDiv>
                    <DemoImage src={CommentScreen}></DemoImage>
                </WebPicDiv>
                <WebPicDiv>
                    <DemoImage src={CommentScreen}></DemoImage>
                </WebPicDiv>
            </CommentWeb>
        )
    }

    return (
        <MainDiv>
                <BigText>Read and leave comments</BigText>
                {isMobile ? <MobileMedia/> : <WebMedia/>}
            {/* <PicDiv>
                <DemoImage src={CommentScreen}></DemoImage>
            </PicDiv> */}
        </MainDiv>  
        )
}

export default CommentContent