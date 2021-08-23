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

export const Button = styled.button`
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