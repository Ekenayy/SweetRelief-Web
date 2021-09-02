import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import logo from '../photos/WaterdropWordless1.png'
import { useHistory, Link, NavLink } from "react-router-dom"
// import {Link} from '../css/styles/Styles.js'
// Calming color
// #f3f4f8

const Image = ({ className, children, id, src, alt, }) => (
        <img className={className} id={id} src={src}/>
    );

    const MainDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: white;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        height: 6rem;
        border-bottom: 1px solid #BEA7E5;
    `

    const LogoDiv = styled.div`
        align-self: center;
        height: 140px;
        width: auto;
        cursor: pointer;
    `

    const HeaderText = styled.p`
        padding-left: 10px;
    `

    const Logo = styled(Image)`
        height: 100%;
        width: auto;
        align-self: center;
    `

function Header ( {location} ) {

    const history = useHistory()


    const handleClick = () => {
        history.push({
            pathname: '/',
            page: 'Main'
        })
    }

    let nowShowArr = ['/reset_password', '/pay', '/stripe']

    const home = {
        pathname: '/',
        page: 'Main'
    }

    const ConditionalHeader = () => {
        switch (nowShowArr.includes(location.pathname)) {
            case true:
                return null
            default:
                return (
                    <MainDiv id='navbar'>
                        <LogoDiv onClick={() => console.log('clicked')}>
                            <NavLink to={home} className='nav-link'>
                                <Logo src={logo} alt="SweetRelief Logo"/>
                            </NavLink>
                        </LogoDiv>
                        <Navbar location={location}/>
                    </MainDiv>
                )
        }
    }


    return (
        <ConditionalHeader/>
        // <MainDiv id='navbar'>
        //     <LogoDiv onClick={() => console.log('clicked')}>
        //         {/* <NavLink to={location} className='nav-link'> */}
        //             <Logo src={logo} alt="SweetRelief Logo"/>
        //         {/* </NavLink> */}
        //     </LogoDiv>
        //     <Navbar location={location}/>
        // </MainDiv>
    )
}

export default Header