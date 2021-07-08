import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import MainPage from '../photos/MainPage.png'
import PayScreen from '../photos/Payscreen.png'
import LocationDetails from '../photos/LocationDetails.png'
import CommentScreen from '../photos/CommentScreen.png'


function Product () {

    // The Features page will have the different components

    const [selected, setSelected] = useState("")

    const Image = ({ className, children, id, src, alt, }) => (
        <img className={className} id={id} src={src}/>
    );

    const Filter = ({ className, children, id, onClick }) => (
        <div id={id} className={className} onClick={onClick}>
            {children}
        </div>
    );

    const BigText = styled.h1`
    `

    const HeaderDiv = styled.div`
        align-self: center;
    `

    const DemoDiv = styled.div`
        align-self: center;
    `

    const PictureDiv = styled.div`
        height: 70%;
        align-self: center;
        margin-top: 30px;
    `

    const FilterDiv = styled.div`
        align-content: center;
    `

    const FilterItem = styled(Filter)`
        margin: 5px 30px;
        display: inline-block;
        border-radius: 5px;
        width: 100px;
        border-bottom: solid;
        border-color: #DDF8E8;
        border-bottom-width: ${props => props.selected ? '5px' : '0px'}
    `

    const DemoImage = styled(Image)`
        height: 900px;
        width: auto;
        align-self: center;
    `

    const FilterContent = () => {
        return (
            <PictureDiv>
                    <DemoImage src={MainPage}/>
            </PictureDiv>
        )
    }

    const CommentContent = () => {
        return (
            <PictureDiv>
                <DemoImage src={CommentScreen}></DemoImage>
            </PictureDiv>
        )
    }

    const PayContent = () => {
        return (
            <PictureDiv>
                <DemoImage src={PayScreen}></DemoImage>
            </PictureDiv>
        )
    }

    const ExploreContent = () => {
        return (
            <PictureDiv>
                <DemoImage src={LocationDetails}></DemoImage>
            </PictureDiv>
        )
    }

    const ConditionalContent = () => {
        // This content will check selected state and render the correct image based on user feedback
        switch (selected) {
            case 'main':
                return <FilterContent/>
            case 'pay':
                return <PayContent/>
            case 'comment':
                return <CommentContent/>
            case 'explore':
                return <ExploreContent/>
            default: 
                return <FilterContent/>
        }

    }
    
    return (
        <div id="product" class='section'>
            <HeaderDiv>
                <BigText>SweetRelief</BigText>
                <p>Because finding a bathroom should be easy.</p>
            </HeaderDiv>
            <FilterDiv>
                <FilterItem  className="filter-item" selected={selected == 'main'} onClick={() => setSelected('main')}>
                    <p>Filter</p>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'explore'} onClick={() => setSelected('explore')}>
                    <p>Explore</p>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'comment'} onClick={() => setSelected('comment')}>
                    <p>Comment</p>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'pay'} onClick={() => setSelected('pay')}>
                    <p>Pay</p>
                </FilterItem>
            </FilterDiv>
            <DemoDiv>
                <ConditionalContent/>
            </DemoDiv>
        </div>
    )
}

export default Product