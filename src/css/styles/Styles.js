import React from 'react'
import styled from 'styled-components'

export const Image = ({ className, children, id, src, alt, }) => (
    <img className={className} id={id} src={src}/>
);

export const Filter = ({ className, children, id, onClick }) => (
    <div id={id} className={className} onClick={onClick}>
        {children}
    </div>
);

export const Div = ({className, children, id, onClick}) => (
    <div id={id} className={className} onClick={onClick}>
        {children}
    </div>
)

export const Li = ({className, children, id, ref, onClick}) => (
    <li id={id} className={className} onClick={onClick} ref={ref}>
        {children}
    </li>
)

export const Link = ({ className, children, target, id, href, }) => (
    <a className={className} id={id} href={href} target={target}>
        {children}
    </a>
);

export const MyButton = ({className, id, type, children, onClick}) => {
    return (
        <button onClick={onClick} className={className} id={id} type={type}>
            {children}
        </button>
    )
}

export const AllContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 37.5em) {
        width: 100% !important;
        padding-left: 0px;
    }
`

export const BigText = styled.h1`
    font-size: 2.7rem;
    align-self: center;
    font-family: Aileron;
    font-weight: 400;
    @media screen and (max-width: 37.5em) {
        font-size: 20px;
        text-align: center;
    }
`

export const MedText = styled.p`
    font-size: 1.4rem;
    font-family: Aileron;
    font-weight: 400;
    align-self: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 37.5em) {
        text-align: center;
    }
`

export const TitleText = styled(BigText)`
    font-size: 4rem;
    font-weight: 700;
    @media screen and (max-width: 37.5em) {
        font-size: 4rem;
        text-align: center;
    }
`

export const PicDiv = styled(Div)`
    height: 800px;
    width: auto;
    align-self: center;
    margin-top: 30px;
    @media (max-width: 37.5em) {
        max-height: 500px;
        max-width: 300px;
        align-content: center;
        left: 0;
    }
`

export const DemoImage = styled(Image)`
    height: auto;
    width: 100%;
    align-self: center;
    @media screen and (max-width: 37.5em) {
        align-self: flex-start;
    }
`

export const Button = styled(MyButton)`
        font-family: 'aileronregular', 'Roboto', sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #BEA7E5;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        margin-top: 10px;
        border-radius: 10px;
        &:hover, &:active, &:focus {
            background: #9b89ba;
        }
    `

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    outline: none;
    cursor: pointer;
`


export const ErrorSpan = styled.p`
    color: red;
    text-align: center;
    font-family: Aileron, Roboto, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
`

export const GradientBg = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding-bottom: 30px;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
        @media screen and (max-width: 37.5em) {
            padding: 0px;
        }
`

export const NavItem = styled(Div)`
        padding: 20px 30px;
        display: block;
        transition: all 0.3s ease;
        border-radius: 5px;
        margin: auto; 
        font-size: 1.2rem;
        color: #1C1C1C;
        font-family: Aileron, sans-serif;
        font-weight: 400;
        text-decoration: none;
        @media (max-width: 37.5em) {
            padding: 10px 20px;
            display: none;
        }
`

export const NavIcon = styled(NavItem)`
        display: none;
        @media (max-width: 37.5em) {
            display: block;
        }
        cursor: pointer;
`

// Privacy and Terms Page

export const PrivacyHeaderDiv = styled.div`
        display: flex;
        padding: .5rem 3rem;
        min-height: 60vh;
        width: 100%;
        flex-direction: column;
        justify-content: flex-end;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
        z-index: -100;
`