import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import MainPage from '../photos/MainPage.png'
import PayScreen from '../photos/Payscreen.png'
import LocationDetails from '../photos/LocationDetails.png'
import CommentScreen from '../photos/CommentScreen.png'
import { useMediaQuery } from 'react-responsive';


function Product () {

    // The Features page will have the different components

    const [selected, setSelected] = useState("")
    // const [mobile, setMobile] = useState(isMobile)

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    console.log(isMobile)
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


    const BigText = styled.h1`
        font-size: 40px;
        align-self: center;
    `

    const HeaderDiv = styled.div`
        display: flex;
        align-self: center;
        flex-direction: column
    `

    const DemoDiv = styled.div`
        align-self: center;
    `

    const PicDiv = styled(Div)`
        height: 800px;
        width: auto;
        align-self: center;
        margin-top: 30px;
        @media (max-width: 37.5em) {
            max-height: 500px;
        }
    `

    const FilterPicDiv = styled(PicDiv)`
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
        width: 140px;
        border-bottom: solid;
        border-color: #DDF8E8;
        align-content: center;
        @media screen and (max-width: 37.5em) {
            margin: 5px 10px;
            width: 90px;
            height: 40px;
            padding-top: 15px;
            padding-left: 10px;
        }
        border-bottom-width: ${props => props.selected ? '5px' : '0px'}
    `

    const DemoImage = styled(Image)`
        height: 100%;
        width: auto;
        align-self: center;
    `

    const FilterText = styled.p`
        display: inline;
        margin-left: 5px;
        align-self: center;
        font-size: 20px;
        @media screen and (max-width: 37.5em) {
            font-size: 14px;
        }
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
        padding-top: 5rem;
        background: #F4A261;
        flex-direction: column;
        height: 100%;
        width: 100%;
        min-height: 85vh;
    `

    const FilterContent = () => {
        return (
            <AllContentDiv>
                <PicDiv className='demo-pic-div'>
                    <DemoImage  src={MainPage}/>
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
                <BigText>Product</BigText>
                <p>Never go home early</p>
            </HeaderDiv>
            <FilterDiv id='filter-div'>
                <FilterItem  className="filter-item" selected={selected == 'main'} onClick={() => setSelected('main')}>
                    {isMobile ? <i class="fa fa-filter fa-lg"></i> : <i class="fa fa-filter fa-2x"></i>}
                    <FilterText>Filter</FilterText>
                </FilterItem>
                <FilterItem className="filter-item" selected={selected == 'explore'} onClick={() => setSelected('explore')}>
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