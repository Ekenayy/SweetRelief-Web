import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import {BigText, MedText, Button, Li} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import {uid} from 'react-uid';


const Form = styled.form`
        position: relative;
        text-align: center;
        margin-left: 10px;
        z-index: 1;
        min-width: 50%;
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

const FieldSet = styled.fieldset`
    min-width: 80%;
    background: #777677;
    z-index: 1;
    border-radius: 10px;
    overflow: auto;
`

const InputSection = styled.div`
`
const InputText = styled(MedText)`
    color: white;
`

const FormTitle = styled.p`
    text-align: center;
    font-size: 1rem;
    font-family: 'Aileron', 'Roboto', sans-serif;
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: hidden; 
    max-width: 100%;
    counter-reset: step;
    margin-bottom: 30px;
    padding-inline-start: 0px;
`

const ProgLi = styled(Li)`
    list-style-type: none;
    width: 25%;
    float: left;
	position: relative;
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Aileron', 'Roboto', sans-serif;
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
    const bizDeetsRef = useRef()
    const bathDeetsRef = useRef()
    const appPrefRef = useRef()
    const reviewRef = useRef()

    const optionList = locTypes.map((locType) => {
        return <option key={uid(locType)} value={locType}>{locType}</option>
    })

    const makeActive = (ref) => {
        ref.current.className='active'
    }

    console.log(bizDeetsRef.current)

    return (
        <Form>
            {/* <FormTitle>Join</FormTitle> */}
            <List id='progressbar'>
                <li  ref={bizDeetsRef} className='active'>Details</li>
                <li ref={bathDeetsRef}>Bathroom</li>
                <li  ref={appPrefRef}>App Preferences</li>
                <li  ref={reviewRef}>Review Section</li>
            </List>
            <FieldSet>
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
                        name='locType-list' 
                        class='join-input'
                        type='text'
                        list='locType-list'
                        placeholder='business type'
                        onChange={evt=> setFormData({...formData, locType: evt.target.value})}
                        value={formData.locType}
                    />
                    <datalist  id='locType-list'>
                        {optionList}
                    </datalist>
                </InputSection>
                <InputSection>
                    <InputText>Business Email:</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='email to be used for receiving payments'
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
                    <InputText>Primary Contact Name (First and last):</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='who will we be working with?'
                        onChange={evt=> setFormData({...formData, primary_contact: evt.target.value})}
                        value={formData.primary_contact}
                    />
                </InputSection>
                <Button>Submit</Button>
            </FieldSet>
        </Form>
    )
}

export default JoinForm