import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {BigText, MedText, TitleText} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

const Form = styled.form`
        position: relative;
        z-index: 1;
        background: #777677;
        min-width: 55%;
        padding: 45px;
        border-radius: 10px;
        margin-left: 10px;
        overflow: auto;
        @media screen and (max-width: 37.5em) {
            max-width: 280px;
        }
`

const InputSection = styled.div`
`
const InputText = styled(MedText)`
    color: white;
`

function JoinForm () {

    return (
        <Form>
            <InputSection>
                <InputText>Test:</InputText>
                <input
                    class='join-input'
                />
            </InputSection>
        </Form>
    )
}

export default JoinForm