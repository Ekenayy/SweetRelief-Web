import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import './App.css';
import Pay from "./pages/Pay"
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./pages/Main"
import Header from './components/Header'
import Intro from './components/Intro'
import Product from './components/Product'
import About from './components/About'



const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {

  return (
    <div className="App">
      <div id='body'>
        <Switch>
          <Route exact path='/pay'>
            <Pay/>
          </Route>
          <Route exact path='/intro'>
            <Intro/>
          </Route>
          <Route exact path='/product'>
            <Product/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/'>
            <Main/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
