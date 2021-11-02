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
    padding: 1rem 2rem;`

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
                        We built the SweetRelief app as a free app. This service is provided at no cost and is intended for use as is.
This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that We collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                        </ContentText>
                        <ContentText>
                            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at SweetRelief unless otherwise defined in this Privacy Policy.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Information Collection and Use</BigText>
                        <ContentText>
                        For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, and Location. If you choose to pay for a service via our platform, we may also save credit card information via Stripe if requested. In this case, our platform will only hold a tokenized reference to your card and not your actual credit card information. The information that we request will be retained on your device and is not collected by us in any way.
The app does use third party services that may collect information used to identify you.
                            Link to privacy policy of third party service providers used by the app
                            <ul>
                                <li><a target='blank' href='https://www.google.com/policies/privacy/'>Google Play Services</a></li>
                                <li><a target='blank' href='https://expo.dev/privacy'>Expo</a></li>
                                <li><a target='blank' href='https://stripe.com/privacy'>Stripe</a></li>
                            </ul>
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Log Data</BigText>
                        <ContentText>
                        We want to inform you that whenever you use our Service, in case of an error in the app We collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Cookies</BigText>
                        <ContentText>
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Service Providers</BigText>
                        <ContentText>
                            We may employ third-party companies and individuals due to the following reasons:
                            <ul>
                                <li>To facilitate our service </li>
                                <li>To provide the Service on our behalf </li>
                                <li>To perform Service-related services </li>
                                <li>To assist us in analyzing how our Service is used</li>
                            </ul>
                            We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Security</BigText>
                        <ContentText>
                            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and We cannot guarantee its absolute security.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Links to Other Sites</BigText>
                            <ContentText>
                            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, We strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                            </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Children’s Privacy</BigText>
                            <ContentText>
                            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take the necessary actions.
                            </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Changes to This Privacy Policy</BigText>
                            <ContentText>
                            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
This policy is effective as of 2021-10-27
                            </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <BigText>Contact Us</BigText>
                            <ContentText>
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at 
                            <br/><a href='mailto:support@sweetrelief.com'>support@sweetrelief.com.</a>
                            </ContentText>
                    </ContentDiv>
                </MainDiv>
            </Body>
        </div>
    )
}

export default Privacy