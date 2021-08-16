import React, {useState, useEffect} from 'react'
import About from '../components/About'
import Product from '../components/Product'
import Intro from '../components/Intro'
import Header from '../components/Header'
import JoinCta from '../components/JoinCta'

import IndexView from "../views/IndexView";

function Main () {

    // The main page will have the different components
    return (
        <div id="Main">
            <IndexView/>
            <JoinCta/>
            <About/>
        </div>
    )
}

export default Main