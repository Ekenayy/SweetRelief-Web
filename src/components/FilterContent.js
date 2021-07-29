import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'
import MainPage from '../photos/MainPage.png'

const FilterPicDiv = styled(PicDiv)`
        @media (max-width: 37.5em) {
            align-items: flex-start;
        }
`
function FilterContent () {

    return (
        <AllContentDiv>
            <BigText>Find locations that suit your needs</BigText>
            <FilterPicDiv>
                <DemoImage src={MainPage}/>
            </FilterPicDiv>
        </AllContentDiv>
    )

}

export default FilterContent