import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { NavLink, Link } from "react-router-dom";



function Navbar () {

    // The Navbar page will have the different components

    const [selected, setSelected] = useState('')

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
        padding: 20px 30px;
        display: block;
        font-size: 15px;
        font-weight: bold;
        text-decoration: none;
        color: #1C1C1C
        transition: all 0.3s ease;
        border-radius: 5px;
    `

    const NavItem = styled.div`

    `

    return (
        <MainDiv >
            <StyledLink className='nav-button' href='#About'>
                Join
            </StyledLink>
            <StyledLink className='nav-button' href='#Product'>
                Product
            </StyledLink>
            <StyledLink className='nav-button' href='#About'>
                About
            </StyledLink>
        </MainDiv>
    )
}

export default Navbar