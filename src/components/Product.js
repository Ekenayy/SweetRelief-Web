import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import PayScreen from '../photos/Payscreen.png'
import LocationDetails from '../photos/LocationDetails.png'
import CommentScreen from '../photos/CommentScreen.png'
import DiscoverScreen from '../photos/DiscoverScreen.png'
import { useMediaQuery } from 'react-responsive';
import FilterContent from './FilterContent'

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
        @media screen and (max-width: 37.5em) {
            font-size: 20px;
            text-align: center;
        }
    `

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

    const PicDiv = styled(Div)`
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
    const DemoImage = styled(Image)`
        height: 100%;
        width: auto;
        align-self: center;
        @media screen and (max-width: 37.5em) {
            align-self: flex-start;
        }
    `

    const FilterText = styled.p`
        display: inline;
        margin-left: 5px;
        align-self: center;
        font-size: 20px;
        @media screen and (max-width: 37.5em) {
            font-size: 12px;
        }
    `

    const AllContentDiv = styled.div`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 37.5em) {
            width: 100% !important;
            padding-left: 0px;
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

    const DiscoverMedia = styled.div`
        display: flex;
        flex-direction: row;
        padding-left: 50px;
        height: 100%;
        @media screen and (max-width: 37.5em) {
            flex-direction: column;
            position: relative;
            padding-right: 80px;
        }
    `

    const DiscoverText = styled(BigText)`

    `

    const DiscoverTextDiv = styled.div`
    `

    const DiscoverDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
    `

    const DiscoverPicDiv = styled(PicDiv)`
        @media (max-width: 37.5em) {
            max-height: 450px;
            max-width: 250px;
            position: absolute;
            left: 30px;
            bottom: 30px;
        }
    `
    const OverlayPicDiv = styled(DiscoverPicDiv)`
        @media (max-width: 37.5em) {
            position: relative;
            left: 100px;
            top: 30px;
            bottom: 0px;
            opacity: 0.95;
        }
    `

    const FilterPicDiv = styled(PicDiv)`
        @media (max-width: 37.5em) {
            align-items: flex-start;
        }
    `

function Product () {

    // The Features page will have the different components

    const [selected, setSelected] = useState("")
    // const [mobile, setMobile] = useState(isMobile)

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });

    // const FilterContent = () => {
    //     return (
    //         <AllContentDiv>
    //             <BigText>Find locations that suit your needs</BigText>
    //             <FilterPicDiv>
    //                 <DemoImage  src={MainPage}/>
    //             </FilterPicDiv>
    //         </AllContentDiv>
    //     )
    // }

    const CommentContent = () => {
        return (
        <AllContentDiv>
                <BigText>Read and leave comments</BigText>
            <PicDiv>
                <DemoImage src={CommentScreen}></DemoImage>
            </PicDiv>
        </AllContentDiv>
            
        )
    }

    const PayContent = () => {
        return (
        <AllContentDiv>
            <BigText>Pay for just the restroom</BigText>
            <PicDiv>
                <DemoImage src={PayScreen}></DemoImage>
            </PicDiv>
        </AllContentDiv>
            
        )
    }

    const DiscoverContent = () => {
        return (
        <DiscoverDiv>
                <DiscoverText>Discover hidden gems and promotions in your area</DiscoverText>
            <DiscoverMedia>
                <DiscoverPicDiv>
                    <DemoImage src={LocationDetails}></DemoImage>
                </DiscoverPicDiv>
                <OverlayPicDiv>
                    <DemoImage src={DiscoverScreen}></DemoImage>
                </OverlayPicDiv>
            </DiscoverMedia>
        </DiscoverDiv>
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