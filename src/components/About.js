import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const MainDiv = styled.div`
        display: flex;
        padding-top: 5rem;
        flex-direction: column;
        width: 100%;
        min-height: 35vh;
        background: #1C1C1C;
`

function About () {

    
    // The About page will have the different components
    return (
        <MainDiv id="About">
            <p>Hello from about</p>
        </MainDiv>
    )
}

export default About