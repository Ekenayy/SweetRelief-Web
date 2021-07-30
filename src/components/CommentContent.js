import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import CommentScreen from '../photos/CommentScreen.png'

function CommentContent () {

    return (
        <AllContentDiv>
                <BigText>Read and leave comments</BigText>
            <PicDiv>
                <DemoImage src={CommentScreen}></DemoImage>
            </PicDiv>
        </AllContentDiv>  
        )
}

export default CommentContent