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
    @media screen and (max-width: 37.5em) {
        padding-right: 80px;
    }
`
const ContentDiv = styled.div`
    padding: 1rem 2rem;
`

const MainDiv = styled.div`
    padding: 3rem;
    @media screen and (max-width: 37.5em) {
        padding: .5rem;
    }
`

const ContentText = styled(MedText)`
    margin-bottom: 2rem;
    line-height: 1.6;
    letter-spacing: .5px;
    @media screen and (max-width: 37.5em) {
        text-align: left;
        font-size: 18px;
    }
`

const StyledLi = styled.li`
    margin-bottom: 1.5rem;
`

const SectionTitleText = styled(BigText)`
    @media screen and (max-width: 37.5em) {
        font-weight: 600;
    }
`

function TermsOfService () {

    return (
        <div>
            <Body>
                <PrivacyHeaderDiv>
                    <HeaderText>Terms of Service</HeaderText>
                </PrivacyHeaderDiv>
                <MainDiv>
                    <ContentDiv>
                        <SectionTitleText>Terms and Conditions</SectionTitleText>
                        <ContentText>
                        By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Ekene Nkem-Mmekam.
We are committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>Data Security</SectionTitleText>
                        <ContentText>
                        The SweetRelief app stores and processes personal data that you have provided to us, in order to provide my Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the SweetRelief app won’t work properly or at all.
The app does use third party services that declare their own Terms and Conditions.
Link to Terms and Conditions of third party service providers used by the app:
                            <ul>
                                <li><a target='blank' href='https://www.google.com/policies/privacy/'>Google Play Services</a></li>
                                <li><a target='blank' href='https://expo.dev/privacy'>Expo</a></li>
                                <li><a target='blank' href='https://stripe.com/privacy'>Stripe</a></li>
                            </ul>
                            You should be aware that there are certain things that we will not take responsibility for. 
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>Access to Reliable Internet </SectionTitleText>
                        <ContentText>
                        Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but we cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>App Performance</SectionTitleText>
                        <ContentText>
                        Along the same lines, we cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, we cannot accept responsibility.
With respect to our responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. We accept no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. We do not promise that we will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>SweetRelief Community Guidelines </SectionTitleText>
                        <ContentText>
                        SweetRelief operates on the belief that a strong, well-intentioned community can help others find reliable restrooms and uplift local businesses. If the basic tenants of trust, cooperation, and empathy are undermined, SweetRelief cannot possibly operate at its full potential. Due to this, we’ve felt the need to put forth the following basic guidelines: 
                        <ul>
                            <StyledLi>You are solely responsible for your own communications and Content including any data, images, graphics, text, audio, video, email, links, and/or screen names you post to the Platform. You agree to use the Service to post and receive communications and Content that are legal.</StyledLi>
                            <StyledLi>You agree not to abuse, defame, harass, stalk, threaten, intimidate, or otherwise violate the legal rights of others.</StyledLi>
                            <StyledLi>You agree not to violate the privacy or publicity rights of others.</StyledLi>
                            <StyledLi>You agree to not to post, upload or link to anything that could potentially exploit or harm children by exposing them to inappropriate Content, asking for personally identifiable details or information, or otherwise exposing them to materials or information which in any way could cause damage, injury, or harm of any kind.</StyledLi>
                            <StyledLi>You agree to not to engage in any "spamming" of any kind, including without limitation ad spamming.</StyledLi>
                            <StyledLi>You agree to not to post, upload or link to anything that harvests or otherwise collects information about other users, including without limitation addresses, phone numbers, e-mail addresses, and/or health or financial information of any kind, without the users’ prior express consent in each instance.</StyledLi>
                            <StyledLi>You agree to not to upload or post anything that infringes any patent, trademark, copyright, trade secret or other intellectual property or other legal right of a third party without prior written permission from the third party in each instance, which written permission you agree to disclose to us at any time on our request (subject to all applicable laws). You must not intentionally download any material that you know or should reasonably know cannot be distributed legally.</StyledLi>
                            <StyledLi>You agree to not use the SweetRelief Service for any illegal or unauthorized purpose.</StyledLi>
                            <StyledLi>You agree to not to transmit or allow access or distribution of any spiders, robots or other information gathering computer programs or routines or their equivalents on or in the Service.</StyledLi>
                            <StyledLi>You agree to not to interfere with or disrupt the Service or servers or networks connected with the Service or disobey any requirements, procedures, policies or regulations of networks connected to the Service.</StyledLi>
                            <StyledLi>You agree to not to state or imply that any of your submitted and or posted Content is endorsed by SweetRelief or any affiliate thereof.</StyledLi>
                            <StyledLi>You agree not to create member accounts under any false or fraudulent pretenses (including by automated means).</StyledLi>
                            <StyledLi>You agree to not to retrieve, store or collect personal information about any user for any unauthorized purpose, and may not retrieve, store, or collect personal information about any user for any valid purpose without such user’s prior written consent in each instance (and acknowledgment that they are at least 13 years of age).</StyledLi>
                            <StyledLi>You agree to not to transmit any viruses, worms, defects, Trojan Horses or any items and/or computer code, files or programs of a destructive nature and/or otherwise designed to interrupt or limit the functionality of any computer software or hardware or telecommunications device.</StyledLi>
                            <StyledLi>You agree to abide by all applicable Federal, State and local laws. If you are outside the United States, you must comply with all local laws as well with respect to your online conduct and acceptable Content including without limitation the exportation of data to the United States or to your country or residence.</StyledLi>
                            <StyledLi>You agree to not to use the SweetRelief name or trademarks or related trade names, which you acknowledge here to be valid, subsisting and enforceable without impediment, and you will not expressly or by implication create the false or misleading impression that SweetRelief is associated with, or endorses, or is in any way connected with you, your business, or your Content.</StyledLi>
                            <StyledLi>You agree to not to impersonate another person, group of people, or entity at any time, which includes not using anyone else's username or password.</StyledLi>
                            <StyledLi>You agree to act with respect and empathy towards both the platform and its users.</StyledLi>
                        </ul>
                        <strong>WHILE SWEETRELIEF EXPLICITLY PROHIBITS THE ABOVE CONDUCT YOU ACKNOWLEDGE AND AGREE THAT YOU MAY BE EXPOSED TO SUCH CONDUCT AND CONTENT AND THAT YOU USE THE SERVICE ENTIRELY AT YOUR OWN RISK, AND THAT SWEETRELIEF SHALL HAVE NO LIABILITY OF ANY KIND FOR SUCH CONDUCT AS CARRIED OUT BY ANY THIRD PARTY AT ANY TIME UNLESS EXPRESSLY SET FORTH TO THE CONTRARY BY SWEETRELIEF IN WRITING.</strong>
                        <br/><br/><strong>YOU UNDERSTAND AND AGREE THAT IF YOU VIOLATE ANY OF THE RULES OF BEHAVIOR, SWEETRELIEF RESERVES THE RIGHT TO TAKE ACTION, INCLUDING IN THE MOST EGREGIOUS OF INSTANCES THE RIGHT TO TERMINATE YOUR USE OF THE SERVICE IMMEDIATELY WITHOUT PRIOR NOTICE AND WITHOUT ANY RIGHT OF A HEARING.</strong>
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>Changes to This Terms and Conditions</SectionTitleText>
                        <ContentText>
                        We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
These terms and conditions are effective as of 2021-10-27
                        </ContentText>
                    </ContentDiv>
                    <ContentDiv>
                        <SectionTitleText>Contact Us</SectionTitleText>
                        <ContentText>
                        If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact us at 
                        <br/><a href='mailto:support@sweetrelief.com'>support@sweetrelief.com.</a>
                        </ContentText>
                    </ContentDiv>
                </MainDiv>
            </Body>
        </div>
    )
}

export default TermsOfService