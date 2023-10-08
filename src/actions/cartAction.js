import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    EMPTY_CART,
  } from "../constants/cartConstant.js";
  import axios from "axios";
  import http from '../interceptor/httpservice';
  import { toast } from 'react-toastify';
  // import { useParams } from "react-router-dom"; 

  
  // Add to Cart
  export const addItemsToCart = (id, quantity, size,productData) => async (dispatch, getState) => {
    // const { id } = useParams();
    try{
    // const { data } = await http.get(`/api/v1/products`);
    // const { data } = await http.get(`/api/v1/product/${id}`);

    // console.log(data);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        // product: data.products[10]._id,
        product:productData._id,
        name: productData.name,
        price: productData.price,
        image: productData.images[0].url,
        stock: productData.Stock,
        size: size,
        productUnique:productData,
        quantity,
      },
    });
    console.log('SUCCESS GET STATE',getState());
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    console.log('SUCCESS GET CART',getState().cart.cartItems);
    toast.success("Product addded to Cart", {
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
  catch (error) {
    // dispatch({
    //   type: ALL_PRODUCT_FAIL,
    //   payload: error.response.data.message,
    // });
    toast.error("Product not addded to Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    console.log('ERROR GET CART',error);
  }
  };

  export const emptyCart = () => async (dispatch, getState) => {
    console.log('SUCCESS GET STATE 1',getState());
    dispatch({
      type: EMPTY_CART,
    });
    console.log('SUCCESS GET STATE 2',getState());
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };