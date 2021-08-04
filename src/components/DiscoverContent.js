import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import LocationDetails from '../photos/LocationDetails.png'
import DiscoverScreen from '../photos/DiscoverScreen.png'
import { useMediaQuery } from 'react-responsive';

const DiscoverDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `

const DiscoverPicDiv = styled(PicDiv)`
        margin: 0px 20px;
`

const MobilePicDiv = styled(PicDiv)`
    max-height: 450px;
    max-width: 250px;
    position: absolute;
    left: 30px;
    bottom: 30px;
`

const OverlayPicDiv = styled(DiscoverPicDiv)`
    @media (max-width: 37.5em) {
        position: relative;
        left: 100px;
        top: 30px;
        bottom: 0px;
        opacity: 0.95;
    }
`

const MobileOverlay = styled(MobilePicDiv)`
    position: relative;
    left: 100px;
    top: 30px;
    bottom: 0px;
    opacity: 0.95;
`

const DiscoverMedia = styled.div`
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

const DiscoverMobile = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-right: 80px;
    height: 100%;
    padding-left: 50px;
`

const DiscoverText = styled(BigText)`
`

function DiscoverContent () {

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    const MobileMedia = ( ) => {
        return (
            <DiscoverMobile>
                <MobilePicDiv>
                    <DemoImage src={LocationDetails}></DemoImage>
                </MobilePicDiv>
                <MobileOverlay>
                    <DemoImage src={DiscoverScreen}></DemoImage>
                </MobileOverlay>
            </DiscoverMobile>
        )
    }

    const WebMedia = () => {
        return (
            <DiscoverMedia>
                <DiscoverPicDiv>
                    <DemoImage src={LocationDetails}></DemoImage>
                </DiscoverPicDiv>
                <DiscoverPicDiv>
                    <DemoImage src={DiscoverScreen}></DemoImage>
                </DiscoverPicDiv>
            </DiscoverMedia>
        )
    }

    return (
        <DiscoverDiv>
                <DiscoverText>Discover hidden gems and promotions in your area</DiscoverText>
                {isMobile ? <MobileMedia/> : <WebMedia/>}
        </DiscoverDiv>
    )

}

export default DiscoverContent