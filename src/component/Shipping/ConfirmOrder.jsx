import React, { Fragment } from "react";
import CheckoutSteps from "../Shipping/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/Metadata";
import "./ConfirmOrder.css";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();


  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 100 ? 0 : 20;

  const tax = subtotal * 0.10;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            {/*<Typography>Shipping Info</Typography>*/}
            <h4>Shipping Info</h4>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user?.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            {/*<Typography>Your Cart Items:</Typography>*/}
            <h4>Your Cart Items</h4>
            {/*
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X BHD {item.price} ={" "}
                        <b>BHD{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))
                }
              </div>
            */}

            <div class="table-content table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="product-thumbnail">Images</th>
                            <th class="cart-product-name">Product</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems &&
                        cartItems.map((item) => (
                        <tr key={item.product}>
                            <td class="product-thumbnail"><img src={item.image} alt="Product" /></td>
                            <td class="product-name"><a href={`/product/${item.product}`}>{item.name}</a></td>
                            <td class="product-quantity text-center">
                                <span>
                                  {item.quantity}
                                </span>
                            </td>
                            <td class="product-subtotal"><span class="amount">{`BHD ${
                              item.price * item.quantity
                            }`}</span></td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>


          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            {/*<Typography>Order Summery</Typography>*/}
            <h4>Order Summery</h4>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>$ {subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>$ {shippingCharges}</span>
              </div>
              <div>
                <p>Tax 10%:</p>
                <span>$ {tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>BHD{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;