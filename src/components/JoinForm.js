import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {BigText, MedText, Button, TitleText} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

const Form = styled.form`
        position: relative;
        z-index: 1;
        background: #777677;
        min-width: 55%;
        padding: 45px;
        border-radius: 10px;
        margin-left: 10px;
        overflow: auto;
        @media screen and (max-width: 37.5em) {
            min-width: 80%;
            max-width: 90%;
            align-self: center;
        }
`

const InputSection = styled.div`
`
const InputText = styled(MedText)`
    color: white;
`

function JoinForm ( {locTypes} ) {

    //         params.permit(:name, :email, :payment_price, :latitude, :longitude, :price_cents, :upvotes, :downvotes, :locType, :free, :key_required)
    //         joined_address = [params[:address], params[:city], params[:state], params[:zip_code]].compact.join(', ')

    // forms of payment

    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        locType: '',
        primary_contact: '',
        active: false
    })


    // t.text "description"
    // t.string "marketing_link"
    // t.string "payment_forms", default: [], array: true

    const optionList = locTypes.map((locType) => {
        return <option value={locType}>{locType}</option>
    })

    return (
        <Form>
            <InputSection>
                <InputText>Business Name:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='business name'
                    onChange={evt=> setFormData({...formData, name: evt.target.value})}
                    value={formData.name}
                />
            </InputSection>
            <InputSection>
                <InputText>Business Type:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    list='locType-list'
                    placeholder='business type'
                    onChange={evt=> setFormData({...formData, locType: evt.target.value})}
                    value={formData.locType}
                />
                <datalist id='locType-list'>
                    {optionList}
                </datalist>
            </InputSection>
            <InputSection>
                <InputText>Email:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='email'
                    onChange={evt=> setFormData({...formData, email: evt.target.value})}
                    value={formData.email}
                />
            </InputSection>
            <InputSection>
                <InputText>Address:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='address'
                    onChange={evt=> setFormData({...formData, address: evt.target.value})}
                    value={formData.address}
                />
            </InputSection>
            <InputSection>
                <InputText>City:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='city'
                    onChange={evt=> setFormData({...formData, city: evt.target.value})}
                    value={formData.city}
                />
            </InputSection>
            <InputSection>
                <InputText>Zip Code:</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='zip code'
                    onChange={evt=> setFormData({...formData, zip_code: evt.target.value})}
                    value={formData.zip_code}
                />
            </InputSection>
            <InputSection>
                <InputText>Primary Contact (First and last name):</InputText>
                <input 
                    class='join-input'
                    type='text'
                    placeholder='who will we be working with?'
                    onChange={evt=> setFormData({...formData, primary_contact: evt.target.value})}
                    value={formData.primary_contact}
                />
            </InputSection>
            <Button>Submit</Button>
        </Form>
    )
}

export default JoinForm