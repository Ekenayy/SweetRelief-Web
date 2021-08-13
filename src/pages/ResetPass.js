import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';


const Body = styled.div`
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding-bottom: 30px;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
        @media screen and (max-width: 37.5em) {
            display: flex;
            padding: 0px;
            height: 100%;
        }
    `

    const ResetPage = styled.div`
        width: 460px;
        padding: 8% 0 0;
        margin: auto;
        @media screen and (max-width: 37.5em) {
            padding-top: 100px;
            padding-right: 0px;
            padding-left: 0px;
        }
    `

    const Form = styled.form`
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 460px;
        margin: 0 auto 100px;
        padding: 45px;
        border-radius: 10px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        @media screen and (max-width: 37.5em) {
            max-width: 280px;
        }
    `

    const Input = styled.input`
        outline: 0;
        font-family: 'aileronregular', 'Roboto', sans-serif;
        background: #e2dee2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 10px;
    `

    const InputSection = styled.div`
    `

    const TitleText = styled.p`
        text-align: center;
        font-size: 20px;
        font-family: 'aileronregular', 'Roboto', sans-serif;
    `

    const InputText = styled.p`
        left: 0;
        font-family: 'aileronregular', 'Roboto', sans-serif;
    `

    const Button = styled.button`
        font-family: 'aileronregular', 'Roboto', sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #BEA7E5;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        margin-top: 10px;
        border-radius: 10px;
        &:hover, &:active, &:focus {
            background: #9b89ba;
        }
    `

    const ErorrSpan = styled.p`
        color: red;
        text-align: center;
        font-family: 'aileronregular', 'Roboto', sans-serif;
    `

function ResetPass ( ) {

    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        token: '',
        newPass: '',
        confirmPass: ''
    })

    const history = useHistory()

    const isMobile = useMediaQuery({ query: `(max-width: 37.5em)` });


    const onSubmit = (evt) => {

        evt.preventDefault()

        setError("")

        let formBody = {
            email: formData.email.toLowerCase(),
            password: formData.newPass,
            token: formData.token
        }

        let passMatch = formData.newPass === formData.confirmPass

        if (passMatch) {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/reset_password`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formBody)
            })
                .then(r => r.json())
                .then(data => {
                    if (data.error) {
                        setError(data.error)
                    } else {
                        alert(data.success)
                        history.push(`/`)
                    }
                })
        } else {
            setError('Passwords do not match')
        }

        setFormData(
            {...formData, email: "",
            token: '',
            newPass: '',
            confirmPass: ''
            }
        )
    }

    return (
        <Body>
            <ResetPage>
                <Form onSubmit={onSubmit}>
                    <TitleText>Reset Password</TitleText>
                    <InputSection>
                        <InputText>Token:</InputText>
                        <input 
                            class='input'
                            type='text'
                            placeholder='token'
                            onChange={evt=> setFormData({...formData, token: evt.target.value})}
                            value={formData.token}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>Email:</InputText>
                        <input 
                            class='input'
                            type='text'
                            placeholder='email'
                            onChange={evt=> setFormData({...formData, email: evt.target.value})}
                            value={formData.email}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>New Password:</InputText>
                        <input 
                            class='input'
                            type='password'
                            placeholder='new password'
                            onChange={evt=> setFormData({...formData, newPass: evt.target.value})}
                            value={formData.newPass}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>Confirm New Password:</InputText>
                        <input 
                            class='input'
                            type='password'
                            placeholder='confirm password'
                            onChange={evt=> setFormData({...formData, confirmPass: evt.target.value})}
                            value={formData.confirmPass}
                        />
                    </InputSection>
                    {error ? <ErorrSpan>{error}</ErorrSpan> : null}
                    <Button>Submit</Button>
                </Form>
            </ResetPage>
        </Body>
    )
}

export default ResetPass