import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import './css/App.css';
import Pay from "./pages/Pay"
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Main from "./pages/Main"
import ResetPass from './pages/ResetPass'
import Join from "./pages/Join"
import Success from "./pages/Success"
import StripePay from "./pages/StripePay"
import Header from './components/Header'
import About from './components/About'
import Privacy from './pages/Privacy'
import TermsOfService from './pages/TermsOfService'

function App( {location}  ) {

  return (
    <div className="App">
      <div id='body'>
        <Header location={location}/>
        <Switch>
          <Route exact path='/reset_password' component={ResetPass}/>
          <Route exact path='/pay' component={Pay}/>
          <Route exact path='/stripe' component={StripePay}/>
          <Route exact path='/join' component={Join}/>
          <Route exact path='/success' component={Success}/>
          <Route exact path='/privacy' component={Privacy}/>
          <Route exact path='/terms' component={TermsOfService}/>
          <Route exact path='/' component={Main}/>
        </Switch>
        <About location={location}/>
      </div>
    </div>
  );
}

export default withRouter(App);
