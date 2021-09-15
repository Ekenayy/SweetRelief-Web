import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import logo from '../photos/WaterdropWordless1.png'
import { useHistory, Link, NavLink } from "react-router-dom"
import backgroundGradient from '../photos/gradient.png'
import {NavIcon} from '../css/styles/Styles.js'
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

    const HiddenNav = styled.div`
        background-image: url(${backgroundGradient});
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        z-index: 30000;
        position: fixed;
        top: 0;
        left: 0;
    `

    const HeaderButton = styled(NavIcon)`
        display: block;
        align-self: flex-end;
    `

function Header ( {location} ) {

    const history = useHistory()

    const [hidden, setHidden] = useState(true)

    // create state variable here and pass down to navbar

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
                            <HiddenNav>
                                {/* Need to put a navbar here and put the icon in */}
                                <HeaderButton onClick={() => setHidden(!hidden)}>
                                    <ReorderIcon />
                                </HeaderButton>
                                {/* Then need to put a body section where the links go */}
                            </HiddenNav>
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