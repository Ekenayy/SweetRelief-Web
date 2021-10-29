import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {AllContentDiv, BigText, PicDiv, DemoImage, Link, PrivacyHeaderDiv, TitleText, MedText} from '../css/styles/Styles.js';
import { useHistory } from "react-router-dom";
import About from '../components/About'

const Body = styled.div`
    display: flex;
    margin-top: 6rem;
    flex-direction: column;
    min-height: 120vh;
`

const HeaderText = styled(TitleText)`
    align-self: flex-start;
`

const MainDiv = styled.div`
    padding: 3rem;
`

const ContentDiv = styled.div`
    padding: 2rem;
`

const Title = styled.h1`
`

const ContentText = styled(MedText)`
    margin-bottom: 2rem;
    line-height: 1.6;
    letter-spacing: .5px;
`

function Privacy () {

    return (
        <div>
            <Body>
                <PrivacyHeaderDiv>
                    <HeaderText>SweetRelief Privacy Policy</HeaderText>
                </PrivacyHeaderDiv>
                <MainDiv>
                    <ContentDiv>
                        <BigText>Privacy Statement</BigText>
                        <ContentText>
                            Ekene Nkem-Mmekam built the SweetRelief app as a Free app. This SERVICE is provided by Ekene Nkem-Mmekam at no cost and is intended for use as is.

                            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.

                            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                        </ContentText>
                        <ContentText>
                            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at SweetRelief unless otherwise defined in this Privacy Policy.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Information Collection and Use</BigText>
                        <ContentText>
                            For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, Location. The information that I request will be retained on your device and is not collected by me in any way.

                            The app does use third party services that may collect information used to identify you.

                            Link to privacy policy of third party service providers used by the app

                            Google Play Services
                            Expo
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Log Data</BigText>
                        <ContentText>
                            I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Cookies</BigText>
                        <ContentText>
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                        </ContentText>
                    </ContentDiv>
                </MainDiv>
            </Body>
            <About/>
        </div>
    )
}

export default Privacy