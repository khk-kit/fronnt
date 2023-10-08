import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    EMPTY_CART,
  } from "../constants/cartConstant.js";
  
  export const cartReducer = (State = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
  
        const isItemExist = State.cartItems.find(
          (i) => i.product === item.product
        );
  
        if (isItemExist) {
          return {
            ...State,
            cartItems: State.cartItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...State,
            cartItems: [...State.cartItems, item],
          };
        }
      case EMPTY_CART:
        return {
          ...State,
          cartItems: [],
        };
      case REMOVE_CART_ITEM:
        return {
          ...State,
          cartItems: State.cartItems.filter((i) => i.product !== action.payload),
        };
  
      case SAVE_SHIPPING_INFO:
        return {
          ...State,
          shippingInfo: action.payload,
        };
  
      default:
        return State;
    }
  };