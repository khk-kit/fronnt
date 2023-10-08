import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Shipping/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Input, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction";

const ConfirmPayment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const userInfo = JSON.parse(localStorage.getItem('User'));
  const userAddress = JSON.parse(localStorage.getItem('shippingInfo'));
  const userCart = JSON.parse(localStorage.getItem('cartItems'));
  console.log('userInfo',userInfo);
  console.log('userAddress',userAddress);
  console.log('userCart',userCart);

  let orderItems = [];
  for(let i=0;i<userCart.length;i++){
    let tempObj = {
      name:userCart[i].name,
      price:userCart[i].price,
      quantity:userCart[i].quantity,
      image:userCart[i].image,
      product:userCart[i].productUnique,
  }
  orderItems.push(tempObj)
  }

  const dispatch = useDispatch();
  // const alert = useAlert();
  // const stripe = useStripe();
  // const elements = useElements();
  const payBtn = useRef(null);

  const OrderNumber = new Date().valueOf();

  let navigate = useNavigate();


  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  console.log('user',user);
  console.log('error',error);
  console.log('order',orderInfo,OrderNumber);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const orderRequest = {
    shippingInfo:{
      address: userAddress.address,
      city:userAddress.city ,
      state:userAddress.state ,
      country:userAddress.country , 
      pinCode:userAddress.pincode ,
      phoneNo:123
    },
    orderItems:orderItems,
user:userInfo,
paymentInfo:{
    id:'NA',
    status:'PROCESSING',
},
paidAt:Date.now(),
itemsPrice:orderInfo.subtotal,
taxPrice:orderInfo.tax,
shippingPrice:orderInfo.shippingCharges,
totalPrice:orderInfo.totalPrice,
orderStatus:"Processing",
deliveredAt:Date.now(),
createdAt:Date.now()
  }

  localStorage.setItem('Order',JSON.stringify(orderRequest));
  // if(localStorage.getItem('Counter')){
  localStorage.removeItem('Counter');
// }

  const checkoutHandlerTest = (e) => {
    // e.preventDefault();
    let a = 10;
    let b = 20;

    let tempRequest = {
      "apiOperation": "INITIATE_CHECKOUT",
      "interaction": {
        "merchant": {
          "name": "Brave Shop",
          "url": "https://www.merchant-site.com",
          "logo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Verlagsgruppe_Random_House_Logo_2016.png"
        },
        "displayControl": {
          "billingAddress": "HIDE",
          "customerEmail": "HIDE"
        },
        "timeout": 1800,
        "timeoutUrl": "https://www.google.com",
        "cancelUrl": "http://www.google.com",
        "operation": "PURCHASE",
        "style": {
          "accentColor": "#30cbe3"
        }
      },
      "billing": {
        "address": {
          "city": userAddress.city,
          "stateProvince": userAddress.state,
          "country": userAddress.country,
          "postcodeZip": userAddress.pinCode,
          "street": userAddress.address ,
          "street2": "The Gateway Arch"
        }
      },
      "order":{
        "amount": order.totalPrice,
        "currency":"BHD",
        "id":OrderNumber,
        "description":"short description"
      },
      "customer": {
        "email": userInfo.user.email,
        "firstName": userInfo.user.name,
        "lastName": userInfo.user.name,
        "mobilePhone": "",
        "phone": ""
      }
    }

    const configTest = {
      headers:{
        Authorization: 'Basic bWVyY2hhbnQuVEVTVDEwMDA2MTY1NTo4N2JmYzhlNjJiODE3NDk1MTQ0ZmFiNWY4YjQ0ZjExMg=='
      }
    };
    const configProd = {
      headers:{
        Authorization: 'Basic bWVyY2hhbnQuVEVTVDEwMDA2MTY1NTo4N2JmYzhlNjJiODE3NDk1MTQ0ZmFiNWY4YjQ0ZjExMg=='
      }
    };
    // navigate("/shipping");
    axios.post('/api/v1/mastercard',{
      "apiOperation":"INITIATE_CHECKOUT",
      "interaction":{
        "operation":"PURCHASE",
        "returnUrl":'localhost:4000/order/' +b,
        "cancelUrl": 'http://www.example.com/questions/3456/my-document',
        "merchant":{
          "name":"Brave Shop",
          "url":"http://developer.mastercard.com"
        },
        "displayControl":{
          "billingAddress":"HIDE",
          "customerEmail":"HIDE"
        }
      },
      "order":{
        "amount": order.totalPrice,
        "currency":"BHD",
        "id":OrderNumber,
        "description":"short description"
      }
    },configTest).then((response)=>{
      console.log(' Payment Gateway response---->',response);
      setTimeout(function () {
        window.Checkout.configure({
          session: { 
          id: response.data.session.id
          }
        });
        window.Checkout.showEmbeddedPage('#embed-target');

      },2000)

    }).catch((error)=>{
      alert("Failed to initiate session: " + error.message,error.response);
      console.log('Error---->',error);

    })
  };

  const checkoutHandler = (e) => {
    // e.preventDefault();
    let a = 10;
    let b = 20;

    let tempRequestProd = {
      "apiOperation": "INITIATE_CHECKOUT",
      "interaction": {
        "merchant": {
          "name": "Brave Shop",
          "url": "https://www.merchant-site.com",
          "logo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Verlagsgruppe_Random_House_Logo_2016.png"
        },
        "displayControl": {
          "billingAddress": "HIDE",
          "customerEmail": "HIDE"
        },
        "timeout": 1800,
        "timeoutUrl": "https://www.google.com",
        "returnUrl":'http://localhost:4000/success',
        "cancelUrl": "http://www.google.com",
        "operation": "PURCHASE",
        "style": {
          "accentColor": "#30cbe3"
        }
      },
      "billing": {
        "address": {
          "city": userAddress.city,
          "stateProvince": userAddress.state,
          "country": userAddress.country,
          "postcodeZip": userAddress.pinCode,
          "street": userAddress.address,
          "street2": "The Gateway Arch"
        }
      },
      "order":{
        "amount": order.totalPrice,
        "currency":"BHD",
        "id":OrderNumber,
        "description":"short description"
      },
      "customer": {
        "email": userInfo.user.email,
        "firstName": userInfo.user.name,
        "lastName": userInfo.user.name,
        "mobilePhone": "",
        "phone": ""
      }
    }

    const tempRequestTest = {
      "apiOperation":"INITIATE_CHECKOUT",
      "interaction":{
        "operation":"PURCHASE",
        "returnUrl":'http://localhost:4000/success',
        "cancelUrl": 'http://www.example.com/questions/3456/my-document',
        "merchant":{
          "name":"Brave Shop",
          "url":"http://developer.mastercard.com",
          "logo": "https://imageupload.io/cTZY6jzOOLRxWj1"
          
        },
        "displayControl":{
          "billingAddress":"HIDE",
          "customerEmail":"HIDE"
        }
      },
      "order":{
        "amount": order.totalPrice,
        "currency":"BHD",
        "id":OrderNumber,
        "description":"short description"
      }
    }

    const configTest = {
      headers:{
        Authorization: 'Basic bWVyY2hhbnQuVEVTVDEwMDA2MTY1NTo4N2JmYzhlNjJiODE3NDk1MTQ0ZmFiNWY4YjQ0ZjExMg=='
      }
    };
    let authOne = 'Basic bWVyY2hhbnQuMTAwMDYxNjU1OjE2NzBkMjNlZTdiNzQ4NzdlNTdlM2ZjZmE2YTYwYzIx';
    let authTwo = 'Basic MTAwMDYxNjU1OjE2NzBkMjNlZTdiNzQ4NzdlNTdlM2ZjZmE2YTYwYzIx';
    let authThree = 'Basic YnJhdmVfMDAxOjE2NzBkMjNlZTdiNzQ4NzdlNTdlM2ZjZmE2YTYwYzIx';

    // Basic bWVyY2hhbnQuMTAwMDYxNjU1OjE2NzBkMjNlZTdiNzQ4NzdlNTdlM2ZjZmE2YTYwYzIx
    const configProd = {
      headers:{
        Authorization: 'Basic bWVyY2hhbnQuMTAwMDYxNjU1OjE2NzBkMjNlZTdiNzQ4NzdlNTdlM2ZjZmE2YTYwYzIx'
      }
    };
    // navigate("/shipping");
    axios.post('/api/v1/mastercard',tempRequestTest,configProd).then((response)=>{
      console.log(' Payment Gateway response---->',response);
      setTimeout(function () {
        window.Checkout.configure({
          session: { 
          id: response.data.session.id
          }
        });
        // window.Checkout.showEmbeddedPage('#embed-target');
        window.Checkout.showPaymentPage();
        // dispatch(createOrder(orderRequest));
      },2000)

    }).catch((error)=>{
      alert("Failed to initiate session: " + error.message,error.response);
      console.log('Error---->',error);

    })
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault("pressed");

  //   payBtn.current.disabled = true;

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "/api/v1/payment/process",
  //       paymentData,
  //       config
  //     );

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return;

  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //         billing_details: {
  //           name: user?.name,
  //           email: user?.email,
  //           address: {
  //             line1: shippingInfo?.address,
  //             city: shippingInfo?.city,
  //             state: shippingInfo?.state,
  //             postal_code: shippingInfo?.pinCode,
  //             country: shippingInfo?.country,
  //           },
  //         },
  //       },
  //     });

  //     if (result.error) {
  //       payBtn.current.disabled = false;
  //       alert.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         order.paymentInfo = {
  //           id: result.paymentIntent.id,
  //           status: result.paymentIntent.status,
  //         };

  //         dispatch(createOrder(order));

  //         navigate("/success");
  //       } else {
  //         alert.error("There's some issue while processing payment ");
  //       }
  //     }
  //   } catch (error) {
  //     payBtn.current.disabled = false;
  //     // alert.error(error.response.data.message);
  //   }
  // };

  checkoutHandler();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
      <div id="embed-target"></div>
      {/* <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <h4 class="text-center">Card Info</h4>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput"/>
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - $ ${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn s-btn s-btn-2"
          />
        </form> */}
      </div>
    </Fragment>
  );
};

export default ConfirmPayment;