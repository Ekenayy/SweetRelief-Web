import React, {useState, useEffect} from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Intro from '../components/Intro'
import Header from '../components/Header'

function Main () {

    // The main page will have the different components
    return (
        <div id="Main">
            <Header/>
            <Intro/>
            <Features/>
            <About/>
        </div>
    )
}

export default Main