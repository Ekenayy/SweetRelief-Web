import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import PayScreen from '../photos/Payscreen.png'

function PayContent () {

    return (
        <AllContentDiv>
            <BigText>Pay for just the restroom</BigText>
            <PicDiv>
                <DemoImage src={PayScreen}></DemoImage>
            </PicDiv>
        </AllContentDiv>    
    )
}

export default PayContent