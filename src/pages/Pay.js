import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Pay () {

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

        // let order = await actions.order.capture();
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/capture_order`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({order_id: orderId})
        })

        const responseData = await response.json()
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
        <div id="Pay">
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                onError={(err) => onError(err)}
                onCancel={() => onError('Canceled')}
            />
            <p>Order Id: {orderId}</p>
        </div>
    );
}


export default Pay