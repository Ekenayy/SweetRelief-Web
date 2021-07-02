import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import './App.css';
import Pay from "./pages/Pay"
import { Redirect, Route, Switch } from "react-router-dom";



const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {

  return (
    <div className="App">
      <div id='body'>
        <Switch>
          <Route exact path='/pay'>
            <Pay/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
