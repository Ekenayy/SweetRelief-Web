import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import LocationDetails from '../photos/LocationDetails.png'
import DiscoverScreen from '../photos/DiscoverScreen.png'

const DiscoverDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `

const DiscoverPicDiv = styled(PicDiv)`
    @media (max-width: 37.5em) {
        max-height: 450px;
        max-width: 250px;
        position: absolute;
        left: 30px;
        bottom: 30px;
    }
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

const DiscoverMedia = styled.div`
        display: flex;
        flex-direction: row;
        padding-left: 50px;
        height: 100%;
        @media screen and (max-width: 37.5em) {
            flex-direction: column;
            position: relative;
            padding-right: 80px;
        }
    `

const DiscoverText = styled(BigText)`
`

function DiscoverContent () {

    return (
        <DiscoverDiv>
                <DiscoverText>Discover hidden gems and promotions in your area</DiscoverText>
            <DiscoverMedia>
                <DiscoverPicDiv>
                    <DemoImage src={LocationDetails}></DemoImage>
                </DiscoverPicDiv>
                <OverlayPicDiv>
                    <DemoImage src={DiscoverScreen}></DemoImage>
                </OverlayPicDiv>
            </DiscoverMedia>
        </DiscoverDiv>
    )

}

export default DiscoverContent