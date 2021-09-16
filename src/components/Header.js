import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import logo from '../photos/WaterdropWordless1.png'
import { useHistory, Link, NavLink } from "react-router-dom"
import backgroundGradient from '../photos/gradient.png'
import {NavIcon, StyledLink, NavItem} from '../css/styles/Styles.js'
import ReorderIcon from '@material-ui/icons/Reorder';

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

    const HiddenSection = styled.div`
        background-image: url(${backgroundGradient});
        background-position: center;
        background-size: cover;
        height: 150vh;
        width: 100vw;
        z-index: 30000;
        position: fixed;
        top: 0;
        left: 0;
    `

    const HiddenNav = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0 1.5rem;
        height: 7rem;
        align-items: center;
    `

    const HiddenBody = styled.div`
        margin-top: 12%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const SmallP = styled.p`
        padding: 10px 0px;
    `

    const HeaderButton = styled(NavIcon)`
        display: flex;
        margin: 0px;
        font-weight: 500;
        font-size: 1.7rem;

        &:hover{
            color: white;
        }
    `

function Header ( {location} ) {

    const history = useHistory()

    const [hidden, setHidden] = useState(true)

    // create state variable here and pass down to navbar

    const handleClick = (pathName) => {
        console.log('clicked')
        setHidden(!hidden)
        history.push(pathName)
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
                    <div>
                        <MainDiv id='navbar'>
                            <LogoDiv>
                                <NavLink to={home} className='nav-link'>
                                    <Logo src={logo} alt="SweetRelief Logo"/>
                                </NavLink>
                            </LogoDiv>
                            <Navbar hidden={hidden} setHidden={setHidden} location={location}/>
                        </MainDiv>
                        {hidden ? null : 
                            <HiddenSection>
                                <HiddenNav>
                                    <HeaderButton onClick={() => setHidden(!hidden)}>
                                        <ReorderIcon />
                                    </HeaderButton>
                                </HiddenNav>
                                <HiddenBody>
                                    <HeaderButton onClick={() => handleClick('/')}>
                                        <SmallP>Home</SmallP>
                                    </HeaderButton>
                                    <HeaderButton onClick={() => handleClick('/join')}>
                                        <SmallP>Join</SmallP>
                                    </HeaderButton>
                                </HiddenBody>
                            </HiddenSection>
                        }
                    </div>
                )
        }
    }


    return (
        <ConditionalHeader/>
    )
}

export default Header