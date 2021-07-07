import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';


function Header () {

    const MainDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #F7F8F3;
        position: sticky;
        width: 100%;
        top: 0;
        padding: 20px 10px;
    `

    const HeaderText = styled.p`
        padding-left: 10px;
    `

    return (
        <MainDiv>
            <HeaderText>Hello from Header</HeaderText>
            <Navbar/>
        </MainDiv>
    )
}

export default Header