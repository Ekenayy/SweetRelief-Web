import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import './css/App.css';
import Pay from "./pages/Pay"
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./pages/Main"
import ResetPass from './pages/ResetPass'

function App() {

  return (
    <div className="App">
      <div id='body'>
        <Switch>
          <Route exact path='/reset_password'>
            <ResetPass/>
          </Route>
          <Route exact path='/pay'>
            <Pay/>
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
