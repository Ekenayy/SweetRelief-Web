import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import CommentScreen from '../photos/CommentScreen.png'
import { useMediaQuery } from 'react-responsive';
import FilterContent from './FilterContent'
import CommentContent from './CommentContent'
import DiscoverContent from './DiscoverContent'
import PayContent from './PayContent'

import {AllContentDiv, BigText, PicDiv, DemoImage} from '../css/styles/Styles.js'


const Image = ({ className, children, id, src, alt, }) => (
        <img className={className} id={id} src={src}/>
    );

    const Filter = ({ className, children, id, onClick }) => (
        <div id={id} className={className} onClick={onClick}>
            {children}
        </div>
    );

    const Div = ({className, children, id, onClick}) => (
        <div id={id} className={className} onClick={onClick}>
            {children}
        </div>
    )

    const HeaderDiv = styled.div`
        display: flex;
        align-self: center;
        flex-direction: column
    `

    const DemoDiv = styled.div`
        display: flex;
        align-self: center;
        width: 100% !important;
        height: 100%;
    `

    const FilterDiv = styled.div`
        display: flex;
        flex-direction: row;
        align-content: center;
        align-self: center;
        @media screen and (max-width: 37.5em) {
            margin: 5px 5px;
            box-sizing: border-box;
        }
    `

    const FilterItem = styled(Filter)`
        margin: 5px 30px;
        border-radius: 5px;
        height: 60px;
        width: 140px;
        padding: 5px 0px 0px 10px;
        border-bottom: solid;
        border-color: #F4A261;
        align-content: center;
        @media screen and (max-width: 37.5em) {
            margin: 5px 5px;
            width: 80px;
            height: 40px;
            padding-top: 15px;
            padding-left: 10px;
        }
        border-bottom-width: ${props => props.selected ? '5px' : '0px'}
    `
// 350 on the window simulates a phonescreen

    const FilterText = styled.p`
        display: inline;
        margin-left: 5px;
        align-self: center;
        font-size: 20px;
        @media screen and (max-width: 37.5em) {
            font-size: 12px;
        }
    `

    const TextDiv = styled.div`
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        @media screen and (max-width: 37.5em) {
            width: 100px;
            align-content: flex-start;
            margin-left: 20px;
            text-align: center;
            padding-top: 50px;
        }
    `

    const MainDiv = styled.div`
        display: flex;
        padding-top: 3rem;
        margin-bottom: 2rem;
        flex-direction: column;
        height: 100%;
        width: 100%;
        min-height: 85vh;
        background: #F7F8F3;
    `

function Product () {

    const [selected, setSelected] = useState("")

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    const ConditionalContent = () => {
        switch (selected) {
            case 'main':
                return <FilterContent/>
            case 'pay':
                return <PayContent/>
            case 'comment':
                return <CommentContent/>
            case 'discover':
                return <DiscoverContent/>
            default: 
                return <FilterContent/>
        }
    }

    return (
        <MainDiv id='Product'>
            <HeaderDiv>
                <BigText>Product</BigText>
                <p>Never go home early. 600+ real locations</p>
            </HeaderDiv>
            <FilterDiv id='filter-div'>
                <FilterItem  className="filter-item" selected={selected == 'main'} onClick={() => setSelected('main')}>
                    {isMobile ? <i class="fa fa-filter fa-lg"></i> : <i class="fa fa-filter fa-2x"></i>}
                    <FilterText>Filter</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'discover'} onClick={() => setSelected('discover')}>
                    {isMobile ? <i class="fa fa-wpexplorer fa-lg"></i> : <i class="fa fa-wpexplorer fa-2x"></i>}
                    <FilterText>Discover</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'pay'} onClick={() => setSelected('pay')}>
                    {isMobile ? <i class="fa fa-random fa-lg"></i> : <i class="fa fa-random fa-2x"></i>}
                    <FilterText>Pay</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'comment'} onClick={() => setSelected('comment')}>
                    {isMobile ? <i class="fa fa-comments fa-lg"></i> : <i class="fa fa-comments fa-2x"></i>}
                    <FilterText>Comment</FilterText>
                </FilterItem>
            </FilterDiv>
            <DemoDiv id='demo-div'>
                <ConditionalContent/>
            </DemoDiv>
        </MainDiv>
    )
}

export default Product