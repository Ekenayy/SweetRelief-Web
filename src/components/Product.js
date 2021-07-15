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
        font-size: 40px;
    `

    const HeaderDiv = styled.div`
        align-self: center;
    `

    const DemoDiv = styled.div`
        align-self: center;
    `

    const PicDiv = styled.div`
        height: 70%;
        align-self: center;
        margin-top: 30px;
    `

    const FilterPicDiv = styled(PicDiv)`
    `

    const FilterDiv = styled.div`
        align-content: center;
    `

    const FilterItem = styled(Filter)`
        margin: 5px 30px;
        display: inline-block;
        border-radius: 5px;
        width: 140px;
        border-bottom: solid;
        border-color: #DDF8E8;
        border-bottom-width: ${props => props.selected ? '5px' : '0px'}
    `

    const DemoImage = styled(Image)`
        height: 900px;
        width: auto;
        align-self: center;
    `

    const FilterText = styled.p`
        display: inline-block;
        margin-left: 5px;
        align-self: center;
        font-size: 20px;
    `

    const AllContentDiv = styled.div`
        display: flex;
        flex-direction: row;
    `

    const TextDiv = styled.div`
        padding-top: 15px;
    `

    const MainDiv = styled.div`
        display: flex;
    `

    const FilterContent = () => {
        return (
            <AllContentDiv>
                <PicDiv>
                    <DemoImage src={MainPage}/>
                </PicDiv>
                <TextDiv>
                    <BigText>Filters</BigText>
                    <p>Find locations that suit your needs</p>
                </TextDiv>
            </AllContentDiv>
            
        )
    }

    const CommentContent = () => {
        return (
            <PicDiv>
                <DemoImage src={CommentScreen}></DemoImage>
            </PicDiv>
        )
    }

    const PayContent = () => {
        return (
            <PicDiv>
                <DemoImage src={PayScreen}></DemoImage>
            </PicDiv>
        )
    }

    const ExploreContent = () => {
        return (
            <PicDiv>
                <DemoImage src={LocationDetails}></DemoImage>
            </PicDiv>
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
        <MainDiv id='Product'>
            <HeaderDiv>
                <BigText>SweetRelief</BigText>
                <p>Never go home early</p>
            </HeaderDiv>
            <FilterDiv>
                <FilterItem  className="filter-item" selected={selected == 'main'} onClick={() => setSelected('main')}>
                    <i class="fa fa-filter fa-2x"></i>
                    <FilterText>Filter</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'explore'} onClick={() => setSelected('explore')}>
                    <i class="fa fa-wpexplorer fa-2x"></i>
                    <FilterText>Discover</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'pay'} onClick={() => setSelected('pay')}>
                    <i class="fa fa-random fa-2x"></i>
                    <FilterText>Pay</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'comment'} onClick={() => setSelected('comment')}>
                    <i class="fa fa-comments fa-2x"></i>
                    <FilterText>Comment</FilterText>
                </FilterItem>
            </FilterDiv>
            <DemoDiv>
                <ConditionalContent/>
            </DemoDiv>
        </MainDiv>
    )
}

export default Product