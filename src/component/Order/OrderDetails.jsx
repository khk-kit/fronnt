import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";


const OrderDetails = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
//   const alert = useAlert();
  const {id} = useParams();


  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    dispatch(getOrderDetails(id));
  }, [dispatch, error,id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />

          <section class="page__title-area pt-80 pb-10">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-10">
                        <div class="page__title-wrapper text-center">
                            <h3 class="page__title_order_details">Order Details</h3>
                        </div>
                    </div>
                </div>
            </div>
          </section>


          <div className="orderDetailsPage container">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <h4>Shipping Info</h4>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <h4>Payment</h4>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>${order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <h4>Order Status</h4>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <h4>Order Items:</h4>
              <div className="orderDetailsCartItemsContainer order">
                
                  <div class="table-content table-responsive">
                      <table class="table">
                          <thead>
                              <tr>
                                  <th class="product-thumbnail">Images</th>
                                  <th class="cart-product-name">Product</th>
                                  <th class="product-subtotal">Total</th>
                              </tr>
                          </thead>
                          <tbody>
                          {order.orderItems &&
                              order.orderItems.map((item) => (
                              <tr>
                                  <td key={item.product} class="product-thumbnail"><img src={item.image} alt="Product" /></td>
                                  <td class="product-name"><a href={`/product/${item.product}`}>{item.name}</a></td>
                                  <td class="product-price">
                                    <span class="amount">
                                      {item.quantity} X ${item.price} ={" "}
                                      <b>${item.price * item.quantity}</b>
                                    </span>
                                  </td>
                              </tr>
                              ))
                          }
                          </tbody>
                      </table>
                  </div>

                  <a href="/orders" class="s-btn s-btn-2 mb-20">My Orders</a>
              </div>
            </div>

          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;