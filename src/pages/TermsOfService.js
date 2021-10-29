import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage, Link, PrivacyHeaderDiv, TitleText, MedText} from '../css/styles/Styles.js';
import { useHistory } from "react-router-dom";
import About from '../components/About'

const Body = styled.div`
    display: flex;
    margin-top: 6rem;
    flex-direction: column;
    min-height: 120vh;
`
const HeaderText = styled(TitleText)`
    align-self: flex-start;
`
const ContentDiv = styled.div`
    padding: 2rem;
`
const MainDiv = styled.div`
    padding: 3rem;
`

function TermsOfService () {

    return (
        <div>
            <Body>
                <PrivacyHeaderDiv>
                    <HeaderText>Terms of Service</HeaderText>
                </PrivacyHeaderDiv>
                <MainDiv>
                    <ContentDiv>

                    </ContentDiv>
                </MainDiv>
            </Body>
        </div>
    )
}

export default TermsOfService