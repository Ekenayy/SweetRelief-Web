import React, {useState, useEffect} from 'react'
import styled from 'styled-components';


function Navbar () {

    // The Navbar page will have the different components

    const MainDiv = styled.div`
        display: flex;
        flex-direction: row;
        padding-right: 30px;
    `

    const NavItem = styled.div`
        margin: 5px 10px;
    `

    return (
        <MainDiv >
            <NavItem>
                <p>Join</p>
            </NavItem>
            <NavItem>
                <p>Product</p>
            </NavItem>
            <NavItem>
                <p>About</p>
            </NavItem>
        </MainDiv>
    )
}

export default Navbar