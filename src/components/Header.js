import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import logo from '../photos/waterdrop2.png'


function Header () {

    const Image = ({ className, children, id, src, alt, }) => (
        <img className={className} id={id} src={src}/>
    );

    const MainDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #F7F8F3;
        position: sticky;
        width: 100%;
        top: 0;
    `

    const LogoDiv = styled.div`
        align-self: center;
        height: 120px;
        width: auto;
    `

    const HeaderText = styled.p`
        padding-left: 10px;
    `

    const Logo = styled(Image)`
        height: 100%;
        width: auto;
        align-self: center;
    `

    return (
        <MainDiv>
            <LogoDiv>
                <Logo src={logo} alt="SweetRelief Logo"/>
            </LogoDiv>
            <Navbar/>
        </MainDiv>
    )
}

export default Header