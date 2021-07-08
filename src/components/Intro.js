import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

function Intro () {

    // The Intro page will have the different components

    const Words = styled.p`
        align-self: center;
    `
    return (
        <div id="Intro" class='section'>
            <Words>Hello from Intro</Words>
        </div>
    )
}

export default Intro