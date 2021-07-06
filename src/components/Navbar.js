import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";



function Navbar () {

    // The Navbar page will have the different components

    const Link = ({ className, children, id, href, }) => (
        <a className={className} id={id} href={href}>
            {children}
        </a>
    );

    const MainDiv = styled.div`
        display: flex;
        flex-direction: row;
        padding-right: 30px;
    `


    const StyledLink = styled(Link)`
        margin: auto; 
        padding: 30px 16px;
        display: block;
    `

    const NavWords = styled.p`

    `

    return (
        <MainDiv >
            <StyledLink href='#About'>
                Join
            </StyledLink>
            <StyledLink href='#Product'>
                <NavWords>Product</NavWords>
            </StyledLink>
            <StyledLink href='#About'>
                <NavWords>About</NavWords>
            </StyledLink>
        </MainDiv>
    )
}

export default Navbar