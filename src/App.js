import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {

  const windowUrl = window.location.search
  const params = new URLSearchParams(windowUrl)
  const baseUrl = 'http://127.0.0.1:3000'
  const tunneledUrl = 'https://18ff335fb2294e.localhost.run'

  const [orderId, setOrderId] = useState(window.orderId)
  const [order, setOrder] = useState(null)

  const idMissing = orderId === undefined

  useEffect(() => {
    if (idMissing && window.orderId) {
      setOrderId(window.orderId)
    }
  },[idMissing])

  function createOrder(data, actions) {
    return(orderId)
  }

  async function onApprove(data, actions) {
    // Can I just send it the order and then call the .capture() method? 

    // let order = await actions.order.capture();
    // console.log(order);
    const response = await fetch(`${tunneledUrl}/capture_order`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({order_id: orderId})
    })

    const responseData = await response.json()
    console.log(responseData)
      // .then(r => r.json())
      // .then(orderFromDb => {
      //   console.log(orderFromDb)
      //   setOrder(orderFromDb)
      //   window.ReactNativeWebView &&
      // window.ReactNativeWebView.postMessage(JSON.stringify(orderFromDb))
      // })

    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(JSON.stringify(responseData))
    return responseData;
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
      <p>{orderId}</p>
    </div>
  );
}

export default App;
