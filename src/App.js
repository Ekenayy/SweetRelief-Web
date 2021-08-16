import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import './css/App.css';
import Pay from "./pages/Pay"
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Main from "./pages/Main"
import ResetPass from './pages/ResetPass'
import Join from "./pages/Join"


function App( {location}  ) {

  console.log(location.pathname)
  return (
    <div className="App">
      <div id='body'>
        <Switch>
          <Route exact path='/reset_password' component={ResetPass}/>
          <Route exact path='/pay' component={Pay}/>
          <Route exact path='/join' component={Join}/>
          <Route exact path='/' component={Main}/>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
