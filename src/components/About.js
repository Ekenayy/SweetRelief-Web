import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const MainDiv = styled.div`
        display: flex;
        padding-top: 5rem;
        flex-direction: column;
        height: 100%;
        width: 100%;
        min-height: 85vh;
        background: #F7F8F3;
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