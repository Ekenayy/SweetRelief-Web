import React from 'react'
import styled from 'styled-components';
import {AllContentDiv, GradientBg, BigText, MedText, Button, StyledLink, TitleText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';

const ContentDiv = styled.div`
    align-self: center;
    align-items: center;
    margin-top: 130px;
    margin-bottom: 80px;
    display: flex;
    min-width: 60%;
    max-width: 70%;
    border-radius: 10px;
    padding: 20px 40px;
    padding-top: 40px;
    flex-direction: column;
    position: relative;
    z-index: 1;
    max-height: 110vh;
    background: #FFFFFF;
    box-shadow: 16px 17px 15px 0px rgba(13,13,13,0.59);
    @media screen and (max-width: 767px) {
        flex-direction: column;
        max-width: 90%;
        max-height: 800vh;
    }
    @media screen and (max-width: 37.5em) {
        max-height: 400vh;
        max-width: 280px;
        padding: 10px 20px;
        margin-bottom: 80px;
    }
`

const HugeText = styled(BigText)`
    font-size: 4rem;
    margin-top: 5px;
    margin-bottom: 0px;
`
const SmallerText = styled(BigText)`
    margin-top: 5px;
`

const ButtonDiv = styled.div`
    min-width: 50%;
    max-width: 60%;
`

function Success () {

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()

        history.push('/')
    }
    
    return (
        <GradientBg>
            <ContentDiv>
                <InsertEmoticonOutlinedIcon class='success-icon'/>
                <HugeText>Success! </HugeText>
                <SmallerText>You're all set. Thank you. </SmallerText>
                <ButtonDiv>
                    <Button onClick={e => handleClick(e)}>Back to home</Button>
                </ButtonDiv>
            </ContentDiv>
        </GradientBg>
    )
}

export default Success