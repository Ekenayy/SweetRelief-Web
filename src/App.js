import React from 'react'
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {

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
    return order;
  }

  function onError(err) {
    console.log(err)
  }

  return (
    <div className="App">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onError={(err) => onError(err)}
        onCancel={() => onError('Canceled')}
      />
    </div>
  );
}

export default App;
