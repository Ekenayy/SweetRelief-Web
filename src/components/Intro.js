import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

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
        flex: 1;
        flex-direction: row;
        padding: 40px 20px; 
        width: 90%;
        height: 100%;
        justify-content: space-around;
    `

    const WordDiv = styled.div`
    `

    const ProductDiv = styled.div`
    `

    const BigText = styled.h1`
    `

    const SmallText = styled.p`
        font-size: 20px;
        margin-top: 50px;
    `

    return (
        <div id="Intro" class='section'>
            <MainDiv>
                <WordDiv>
                    <BigText>Stop leaving the park early.</BigText>
                    <SmallText>Find restrooms in your area. Discover local businesses.</SmallText>
                </WordDiv>
                <ProductDiv>
                    <Words>Hello from Product Div</Words>
                </ProductDiv>
            </MainDiv>
        </div>
    )
}

export default Intro