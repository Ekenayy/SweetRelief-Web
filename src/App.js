import React from 'react'
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// When the page opens up it should automatically be fetching from a rails route
// This route will contain all the info that will ultimatey go into the create order function

function App() {

  const windowUrl = window.location.search
  const params = new URLSearchParams(windowUrl)

  // Send information to this create order function
  function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "1",
          },
        },
      ],
    });
  }

  async function onApprove(data, actions) {
    let order = await actions.order.capture();
    console.log(order);
    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(JSON.stringify(order))
    return order;
  }

  function onError(err) {
    console.log(err)
    let errObj = {
      err: err,
      status: "FAILED",
    };
    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(JSON.stringify(errObj));
  }

  return (
    <div className="App">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onError={(err) => onError(err)}
        onCancel={() => onError('Canceled')}
      />
      <p>{params}</p>
    </div>
  );
}

export default App;
