import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import MainPage from '../photos/MainPage.png'

const FilterPicDiv = styled(PicDiv)`
    @media (max-width: 37.5em) {
            align-items: flex-start;
            width: 100%;
            margin-left: 0px;
        }
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 100%;
    padding: 0px 70px;
    justify-content: space-around;
    @media screen and (max-width: 37.5em) {
        flex-direction: column;
    }
`

const WordDiv = styled.div`
    padding-top: 100px;
    @media (max-width: 37.5em) {
        width: 100%;
        padding-top: 0px;
    }
`
const SmallText = styled.p`
        font-size: 1.7rem;
        margin-top: 30px;
        text-align: left;
        @media screen and (max-width: 37.5em) {
            text-align: center;
            font-size: 16px;
        }
`

function FilterContent () {

    return (
        <MainDiv>
            <WordDiv>
                <BigText>Find locations that suit your needs</BigText>
                <SmallText>Filter through 600+ real locations with a variety of criteria</SmallText>
            </WordDiv>
            <FilterPicDiv>
                <DemoImage src={MainPage}/>
            </FilterPicDiv>
        </MainDiv>
    )

}

export default FilterContent