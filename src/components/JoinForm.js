import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import {BigText, MedText, Button, Li, ErrorSpan} from '../css/styles/Styles.js'
import { useHistory } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import {uid} from 'react-uid';
import SimpleReactValidator from 'simple-react-validator';

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

const InputSection = styled.div`
`
const InputText = styled(MedText)`
    color: white;
    margin-bottom: 10px;
`

const FormTitle = styled.p`
    text-align: center;
    font-size: 2rem;
    font-family: 'Aileron', 'Roboto', sans-serif;
    color: #BEA7E5;
    font-weight: 700;
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

const NextButton = styled(Button)`
    display: block;
    width: 40%;
`

const BackButton = styled(NextButton)`
    background: white;
    color: black;
`

const ButtonView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`


function JoinForm ( {locTypes} ) {

    //         params.permit(:name, :email, :payment_price, :latitude, :longitude, :price_cents, :upvotes, :downvotes, :locType, :free, :key_required)
    //         joined_address = [params[:address], params[:city], params[:state], params[:zip_code]].compact.join(', ')
    // :wheelchair_accessible, :baby_changing_station
    // forms of payment
    const [errors, setErrors] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        locType: '',
        password: '',
        primary_contact_name: '',
        primary_contact_email: '',
        description: '',
        payment_forms: [],
        marketing_link: '',
        price_cents: 0,
        promotions: ['', '', ''],
        wheelchair_accessible: false,
        baby_changing_station: false,
        unisex: false,
        free: false,
        key_required: false,
        active: false
    })
    const [locId, setLocId] = useState('')
    const [formContent, setFormContent] = useState('')

    //  Refs for progress li's 
    const bizDeetsLi = useRef()
    const bathDeetsLi = useRef()
    const marketingPrefLi = useRef()
    const reviewLi = useRef()
    const payLi = useRef()

    // Refs for fieldsets in forms
    const bizDeetsField = useRef()
    const bathDeetsField = useRef()
    const marketingField = useRef()
    const reviewField = useRef()

    // Validator
    const validator = new SimpleReactValidator()
    // const simpleValidator = useRef(new SimpleReactValidator())

    let numbArr = [0, 1, 2, 3, 4, 5]
    let paymentOpArr = ['Money', 'Survey', 'Email', 'Coupon']

    const priceValues = numbArr.map(numb => {
        return <option class='price-option' value={numb}>{`$${numb}`}</option>
    })

    const optionList = locTypes.map((locType) => {
        return <option key={uid(locType)} value={locType}>{locType}</option>
    })

    const handleCreate = (e, liRef, currentFieldRef, nextFieldRef) => {
        e.preventDefault()

        if (validator.allValid() && !locId) {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/locations`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            })
                .then(r => r.json())
                .then(data => {
                    if (data.errors) {
                        setErrors(data.errors)
                    } else {
                        setLocId(data.id)
                        console.log(data.id)
                        goForward(e, liRef, currentFieldRef, nextFieldRef)
                    }
                })
        } else if (locId) {
            handleNext(e, liRef, currentFieldRef, nextFieldRef)
        } else {
            validator.showMessages()
            setErrors(['Make sure all fields are correctly filled'])
        }
    }

    const handleNext = (e, liRef, currentFieldRef, nextFieldRef) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_BASE_URL}/locations/${locId}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    // setLocId(data.id)
                    goForward(e, liRef, currentFieldRef, nextFieldRef)
                }
            })
    }

    const goForward = (e, liRef, currentFieldRef, nextFieldRef) => {
        e.preventDefault()
        liRef.current.className='active'
        currentFieldRef.current.className='inactive-field'
        nextFieldRef.current.className='active-field'
    }

    const handleReview = (e, liRef) => {
        e.preventDefault()
        liRef.current.className='active'
        reviewField.current.className='active-field'
        bizDeetsField.current.className='active-field'
        bathDeetsField.current.className='active-field'
        marketingField.current.className='active-field'
        
    }

    const goBackward = (e, liRef, currentFieldRef, nextFieldRef) => {
        // Take in the ref for the top number and also the ref for the fieldset
        e.preventDefault()
        liRef.current.className=''
        currentFieldRef.current.className='inactive-field'
        nextFieldRef.current.className='active-field'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <Form id='join-form'>
            {/* <FormTitle>Join</FormTitle> */}
            <List id='progressbar'>
                <li  ref={bizDeetsLi} className='active'>Business</li>
                <li ref={bathDeetsLi}>Bathroom</li>
                <li  ref={marketingPrefLi}>Marketing</li>
                <li  ref={reviewLi}>Review</li>
                <li ref={payLi}>Payment</li>
            </List>

            {/* Business Section */}
            <fieldset ref={bizDeetsField}>
                <InputSection>
                    <InputText>Business Name</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='business name'
                        onChange={evt=> setFormData({...formData, name: evt.target.value})}
                        value={formData.promotions[0]}
                        onBlur={() => validator.showMessageFor('business_name')}
                    />
                    {validator.message('business_name', formData.name, 'required')}
                </InputSection>
                <InputSection>
                    <InputText>Business Type</InputText>
                    <input
                        name='locType-list' 
                        class='join-input'
                        type='text'
                        list='locType-list'
                        placeholder='business type (pick from dropdown or write your own)'
                        onChange={evt=> setFormData({...formData, locType: evt.target.value})}
                        value={formData.locType}
                        onBlur={() => validator.showMessageFor('business_type')}
                    />
                    {validator.message('business_type', formData.locType, 'required')}
                    <datalist  id='locType-list'>
                        {optionList}
                    </datalist>
                </InputSection>
                <InputSection>
                    <InputText>Business Email</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='email to be used for receiving payments and comms'
                        onChange={evt=> setFormData({...formData, email: evt.target.value})}
                        value={formData.email}
                        onBlur={() => validator.showMessageFor('business_email')}
                    />
                    {validator.message('business_email', formData.email, 'required|email')}
                </InputSection>
                <InputSection>
                    <InputText>Password</InputText>
                    <input
                        name='locType-list' 
                        class='join-input'
                        type='password'
                        list='locType-list'
                        placeholder='password'
                        onChange={evt=> setFormData({...formData, password: evt.target.value})}
                        value={formData.password}
                        onBlur={() => validator.showMessageFor('password')}
                    />
                    {validator.message('password', formData.password, 'required')}
                </InputSection>
                <InputSection>
                    <InputText>Address</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='address'
                        onChange={evt=> setFormData({...formData, address: evt.target.value})}
                        value={formData.address}
                        onBlur={() => validator.showMessageFor('address')}
                    />
                    {validator.message('address', formData.address, 'required')}
                </InputSection>
                <InputSection>
                    <InputText>City</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='city'
                        onChange={evt=> setFormData({...formData, city: evt.target.value})}
                        value={formData.city}
                        onBlur={() => validator.showMessageFor('city')}
                    />
                    {validator.message('city', formData.city, 'required')}
                </InputSection>
                <InputSection>
                    <InputText>Zip Code</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='zip code'
                        onChange={evt=> setFormData({...formData, zip_code: evt.target.value})}
                        value={formData.zip_code}
                        onBlur={() => validator.showMessageFor('zip_code')}
                    />
                    {validator.message('zip_code', formData.zip_code, 'required|numeric')}
                </InputSection>
                <InputSection>
                    <InputText>Primary Contact Name (First and last)</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='who will we be working with?'
                        onChange={evt=> setFormData({...formData, primary_contact_name: evt.target.value})}
                        value={formData.primary_contact}
                        onBlur={() => validator.showMessageFor('primary_contact_name')}
                    />
                    {validator.message('primary_contact_name', formData.primary_contact_name, 'required')}
                </InputSection>
                <InputSection>
                    <InputText>Primary Contact Email (First and last)</InputText>
                    <input 
                        class='join-input'
                        type='text'
                        placeholder='primary contact email'
                        onChange={evt=> setFormData({...formData, primary_contact_email: evt.target.value})}
                        value={formData.primary_contact_email}
                        onBlur={() => validator.showMessageFor('primary_contact_email')}
                    />
                    {validator.message('primary_contact_email', formData.primary_contact_email, 'required|email')}
                </InputSection>
                {errors ? errors.map( (error) => <ErrorSpan key={error}>*{error}</ErrorSpan>) : null}
                <Button onClick={(e) => handleCreate(e, bathDeetsLi, bizDeetsField, bathDeetsField)}>Next</Button>
            </fieldset>

            {/* Bathroom details section */}
            <fieldset class='inactive-field' ref={bathDeetsField}>
                <FormTitle>Bathroom Details</FormTitle>
                <InputSection>
                    <InputText>How much will you charge for the restroom?</InputText>
                    <input 
                        class='join-input'
                        type='number'
                        min='0'
                        max='5'
                        placeholder='Bathroom price (maximum is $5)'
                        onChange={evt=> setFormData({...formData, price_cents: evt.target.value})}
                        value={formData.price_cents}
                    />
                        {/* {priceValues} */}
                    {/* </select> */}
                </InputSection>
                <InputSection>
                    <InputText>Gender Neutral or Unisex Bathrooms?</InputText>
                    <select 
                        class='join-select'
                        placeholder='Unisex?'
                        onChange={evt=> setFormData({...formData, unisex: evt.target.value})}
                        value={formData.unisex}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </InputSection>
                <InputSection>
                    <InputText>Key Required for Bathroom?</InputText>
                    <select 
                        class='join-select'
                        placeholder='Key Required?'
                        onChange={evt=> setFormData({...formData, key_required: evt.target.value})}
                        value={formData.key_required}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </InputSection>
                <InputSection>
                    <InputText>Baby Changing Stations?</InputText>
                    <select 
                        class='join-select'
                        placeholder='Baby changing station?'
                        onChange={evt=> setFormData({...formData, baby_changing_station: evt.target.value})}
                        value={formData.baby_changing_station}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </InputSection>
                <InputSection>
                    <InputText>Wheelchair Accessible?</InputText>
                    <select 
                        class='join-select'
                        placeholder='Wheelchair Accessible?'
                        onChange={evt=> setFormData({...formData, wheelchair_accessible: evt.target.value})}
                        value={formData.wheelchair_accessible}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </InputSection>
                <ButtonView>
                    <BackButton onClick={(e) => goBackward(e, bathDeetsLi, bathDeetsField, bizDeetsField)}>Back</BackButton>
                    <NextButton onClick={(e) => handleNext(e, marketingPrefLi, bathDeetsField, marketingField)}>Next</NextButton>
                </ButtonView>
            </fieldset>

            {/*  Place where people put stuff specific to the app. Description, payment forms, marketing links*/}
            {/* How will users add promotions and other info. A promotions array? */}
            <fieldset class='inactive-field' ref={marketingField}>
                <FormTitle>Marketing Preferences</FormTitle>
                <InputSection>
                    <InputText>Business Description </InputText>
                    <textarea
                        rows="5"
                        maxLength='160'
                        class='join-input'
                        type='text'
                        placeholder='short description (160 character max)'
                        onChange={evt=> setFormData({...formData, description: evt.target.value})}
                        value={formData.description}
                    >
                    </textarea>
                </InputSection>
                <InputSection>
                    <InputText>Marketing Material Link</InputText>
                    <input
                        class='join-input'
                        type='text'
                        placeholder='Add a link to an event calendar, menu, pickup/delivery app etc'
                        onChange={evt=> setFormData({...formData, marketing_link: evt.target.value})}
                        value={formData.marketing_link}
                    />
                </InputSection>
                <InputSection>
                    <InputText>Promotion 1</InputText>
                    <input
                        class='join-input'
                        type='text'
                        placeholder='Optional info about promotions (happy hour, weekly events etc)'
                        onChange={evt=> {
                            const newPromos = formData.promotions.slice()
                            newPromos[0] = evt.target.value
                            setFormData({...formData, promotions: newPromos})
                        }}                        
                        value={formData.promotions[0]}
                    />
                </InputSection>
                <InputSection>
                    <InputText>Promotion 2</InputText>
                    <input
                        class='join-input'
                        type='text'
                        placeholder='Optional info about promotions (happy hour, weekly events etc)'
                        onChange={evt=> {
                            const newPromos = formData.promotions.slice()
                            newPromos[1] = evt.target.value
                            setFormData({...formData, promotions: newPromos})
                        }}                        
                        value={formData.promotions[1]}
                    />
                </InputSection>
                <InputSection>
                    <InputText>Promotion 3</InputText>
                    <input
                        class='join-input'
                        type='text'
                        placeholder='Optional info about promotions (happy hour, weekly events etc)'
                        onChange={evt=> {
                            const newPromos = formData.promotions.slice()
                            newPromos[2] = evt.target.value
                            setFormData({...formData, promotions: newPromos})
                        }}                        
                        value={formData.promotions[2]}
                    />
                </InputSection>
                
                <ButtonView>
                    <BackButton onClick={(e) => goBackward(e, marketingPrefLi, marketingField, bathDeetsField)}>Back</BackButton>
                    <NextButton onClick={(e) => handleNext(e, reviewLi, marketingField, reviewField)}>Next</NextButton>
                    {/* <NextButton onClick={(e) => handleReview(e, reviewLi)}>Next</NextButton> */}
                </ButtonView>
            </fieldset>

            {/* Place where a user can revi few what they've done. For each kv pair of state do something as an uneditable input */}
            <fieldset class='inactive-field' ref={reviewField}>
                <InputText>Take one more look at your answers before submitting! </InputText>
                <ButtonView>
                    <BackButton onClick={(e) => goBackward(e, reviewLi, reviewField, marketingField)}>Back</BackButton>
                    <NextButton onClick={(e) => handleSubmit(e)}>Submit</NextButton>
                </ButtonView>
            </fieldset>
        </Form>
    )
}

export default JoinForm