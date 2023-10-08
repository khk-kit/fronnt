import { React, useState, useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { emptyCart } from "../../actions/cartAction";
import { toast } from 'react-toastify';

const OrderSuccess = () => {
  const dispatch = useDispatch();

      const [counter, setCounter] = useState(0);
      if(localStorage.getItem('Counter')){

      }else{
        try{
        localStorage.setItem('Counter',1)
        const queryParameters = new URLSearchParams(window.location.search);
      const type_resultIndicator = queryParameters.get("resultIndicator");
      const type_sessionVersion = queryParameters.get("sessionVersion");
      
      if(type_resultIndicator && type_sessionVersion){
        
        let order_data = JSON.parse(localStorage.getItem('Order'));
        if(counter === 0){
        console.log('Order Saved',order_data);
        dispatch(createOrder(order_data));
        // return;
        toast.success("Order Placed Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
          localStorage.removeItem('cartItems');
          // useEffect(()=>{
            // dispatch(emptyCart());
            // }, [dispatch])
          return;
        }
        setCounter(1)

        
      }else{
        toast.error("Payment Failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
      localStorage.removeItem('Counter');
      
      }
      catch(error){
        toast.error("Payment Failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }

    }

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <a href="/orders">View Orders</a>
    </div>
  );
};

export default OrderSuccess;