import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'

function Header () {

    return (
        <div id="header">
            <p>Hello from Header</p>
            <Navbar/>
        </div>
    )
}

export default Header