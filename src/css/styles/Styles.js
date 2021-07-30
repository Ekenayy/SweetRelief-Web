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

export const AllContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 37.5em) {
        width: 100% !important;
        padding-left: 0px;
    }
`

export const BigText = styled.h1`
    font-size: 40px;
    align-self: center;
    @media screen and (max-width: 37.5em) {
        font-size: 20px;
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