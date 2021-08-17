import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

const Form = styled.form`
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 460px;
        margin: 0 auto 100px;
        padding: 45px;
        border-radius: 10px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        @media screen and (max-width: 37.5em) {
            max-width: 280px;
        }
`

function JoinForm () {

}

export default JoinForm