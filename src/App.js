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

function App( {location}  ) {


  // Instead of doing it in the components just do it in the app based on the pathname

  // const ConditionalHeader = () => {
  //   switch (location.pathname) {
  //     case '/': 
  //       return <Header location={location} page={'Main'}/>
  //     case '/join':
  //       return <Header location={location} page={'Join'}/>
  //     case '/pay':
  //       return null
  //     case '/success':
  //       return null
  //     case '/reset_password':
  //       return null
  //     default:
  //       return <Header location={location} page={'Main'}/>
  //   }
  // }

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
          <Route exact path='/' component={Main}/>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
