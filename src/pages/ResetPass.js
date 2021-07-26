import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Body = styled.div`
        width: 100%;
        height: 100vh;
        background: #BEA7E5;
        background: -webkit-radial-gradient(top left, #BEA7E5, #F4A261);
        background: -moz-radial-gradient(top left, #BEA7E5, #F4A261);
        background: radial-gradient(to bottom right, #BEA7E5, #F4A261);
    `

    const ResetPage = styled.div`
        width: 460px;
        padding: 8% 0 0;
        margin: auto;
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

function ResetPass () {

    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm();

    // useEffect(() => {
    //     register('email')
    //     register('token')
    //     register('newPass')
    //     register('confirmPass')
    // }, [register])

    const onSubmit = (data) => {

        let formBody = {
            email: data.email,
            password: data.newPass,
            token: data.token
        }

        let passMatch = data.newPass === data.confirmPass

        if (passMatch) {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/reset_password`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formBody)
            })
                .then(r => r.json())
                .then(data => console.log(data))
        } else {
            setError('Passwords do not match')
        }
        
    }

    return (
        <Body>
            <ResetPage>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TitleText>Reset Password</TitleText>
                    <InputSection>
                        <InputText>Token:</InputText>
                        <Input
                            type='text'
                            placeholder='token'
                            {...register('token')}
                            // onChange={text => setValue('token', text)}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>Email:</InputText>
                        <Input
                            type='text'
                            placeholder='email'
                            {...register('email')}
                            // onChange={text => setValue('email', text)}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>New Password:</InputText>
                        <Input
                            type='password'
                            placeholder='new password'
                            {...register('newPass')}
                            // onChange={text => setValue('newPass', text)}
                        />
                    </InputSection>
                    <InputSection>
                        <InputText>Confirm New Password:</InputText>
                        <Input
                            type='password'
                            placeholder='confirm password'
                            {...register('confirmPass')}
                            // onChange={text => setValue('confirmPass', text)}
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