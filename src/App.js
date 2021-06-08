import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {

  const windowUrl = window.location.search
  const params = new URLSearchParams(windowUrl)
  const baseUrl = 'http://localhost:3001'

  const [orderId, setOrderId] = useState(window.orderId)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    if (orderId == undefined) {
      setOrderId(window.orderId)
    }
  },[orderId == undefined])

  function createOrder(data, actions) {
    return(orderId)
  }

  async function onApprove(data, actions) {
    // Can I just send it the order and then call the .capture() method? 
    console.log('order being captured')
    console.log(actions.order)
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
      <p>{orderId}</p>
    </div>
  );
}

export default App;
