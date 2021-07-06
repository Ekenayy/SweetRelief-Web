import React, {useState, useEffect} from 'react'
import About from '../components/About'
import Product from '../components/Product'
import Intro from '../components/Intro'
import Header from '../components/Header'

function Main () {

    // The main page will have the different components
    return (
        <div id="Main">
            <Header/>
            <Intro/>
            <Product/>
            <About/>
        </div>
    )
}

export default Main