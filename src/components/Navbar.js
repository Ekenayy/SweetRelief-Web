import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import ReorderIcon from '@material-ui/icons/Reorder';

    const Link = ({ className, children, id, href, }) => (
            <a className={className} id={id} href={href}>
                {children}
            </a>
        );

    const NewDiv = ({className, children, id}) => (
        <div className={className} id={id}>
            {children}
        </div>
    )

    const MainDiv = styled.div`
        display: flex;
        padding-right: 30px;
        @media (max-width: 37.5em) {
            padding-right: none;
        }
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: inherit;
        outline: none;
    `

    const NavItem = styled(NewDiv)`
        padding: 20px 30px;
        display: block;
        transition: all 0.3s ease;
        border-radius: 5px;
        margin: auto; 
        font-size: 1.2rem;
        font-weight: 500;
        color: #1C1C1C;
        @media (max-width: 37.5em) {
            padding: 10px 20px;
            display: none;
        }
    `
    
    const NavIcon = styled(NavItem)`
        display: none;
        @media (max-width: 37.5em) {
            display: block;
        }
    `

function Navbar () {

    // The Navbar page will have the different components

    const [selected, setSelected] = useState('')

    return (
        <MainDiv>
            <NavItem className='nav-button'>
                <StyledLink  href='#Intro'>
                    Join
                </StyledLink>
            </NavItem>
            <NavItem className='nav-button'>
                <StyledLink  href='#Product'>
                    Product
                </StyledLink>
            </NavItem>
            <NavItem className='nav-button'>
                <StyledLink href='#About'>
                    About
                </StyledLink>
            </NavItem>
            <NavIcon>
                <ReorderIcon/>
            </NavIcon>
        </MainDiv>
    )
}

export default Navbar