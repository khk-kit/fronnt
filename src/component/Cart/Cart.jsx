import React, { Fragment } from 'react';
import "./Cart.css";
import CartItemCard from "./CartItemCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router-dom"; 

import $ from "jquery";

const Cart = () => {

  document.title = 'Cart | BRAVE Athleisure';

  //Cart Plus Minus Js
  $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      $button.parent().find("input").val(newVal);
  });

  // const item = {
  //   product:"productID",
  //   price:200,
  //   name:"Ali",
  //   quantity:2,
  // }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    console.log("Increase ID:", id);

    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    console.log("Increase ID:", id);

    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  // const checkoutHandler = () => {
  //   navigate("/shipping");
  // };

  const checkoutHandler = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem('User'));
    if(!userDetails?.user) {
      navigate("/Login");
      return false
    }
    navigate("/shipping");
    
  };

  return (
    <Fragment>

          {/* NIZAR CODE */}

          <main>

              <div class="breadcrumb-area-3 pt- pb-20">
                  <div class="container">
                      <div class="row">
                          <div class="col-xxl-12">     
                              <div class="breadcrumb-wrapper-2 text-center">
                                  <h3>Your Cart</h3>
                                  <nav aria-label="breadcrumb">
                                      <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                                      </ol>
                                  </nav>
                              </div>                    
                          </div>
                      </div>
                  </div>
              </div>


              <section class="cart-area pt-100 pb-100">
                  <div class="container">
                      <div class="row">
                          <div class="col-12">
                              {cartItems.length === 0 ? (
                                <div className="emptyCart">
                                  <RemoveShoppingCartIcon />
                                  <Typography>No Product in Your Cart</Typography>
                                  <a href="/Shop">View Products</a>
                                </div>
                              ) : (
                              <form action="#">
                                  <div class="table-content table-responsive">
                                      <table class="table">
                                          <thead>
                                              <tr>
                                                  <th class="product-thumbnail">Images</th>
                                                  <th class="cart-product-name">Product</th>
                                                  <th class="product-price">Unit Price</th>
                                                  <th class="product-quantity">Quantity</th>
                                                  <th class="product-subtotal">Total</th>
                                                  <th class="product-remove">Remove</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                          {cartItems &&
                                              cartItems.map((item) => (
                                              <tr>
                                                  <td class="product-thumbnail"><a href="/Product_Details"><img src={item.image} alt="" /></a></td>
                                                  <td class="product-name"><a href={`/product/${item.product}`}>{item.name}</a></td>
                                                  <td class="product-price"><span class="amount">{`Price: BHD${item.price}`}</span></td>
                                                  <td class="product-quantity">
                                                      <div class="cart-plus-minus d-none"><input type="text" value="1" /></div>
                                                      <div className="cartInput">
                                                          <button
                                                            onClick={() =>
                                                              decreaseQuantity(item.product, item.quantity)
                                                            }
                                                          >
                                                            -
                                                          </button>
                                                          <input type="number" value={item.quantity} readOnly />
                                                          <button
                                                            onClick={() =>
                                                              increaseQuantity(
                                                                item.product,
                                                                item.quantity,
                                                                item.stock
                                                              )
                                                            }
                                                          >
                                                            +
                                                          </button>
                                                      </div>
                                                  </td>
                                                  <td class="product-subtotal"><span class="amount">{`BHD ${
                                                    item.price * item.quantity
                                                  }`}</span></td>
                                                  <td class="product-remove"><span class="cursor-pointer" onClick={() => deleteCartItems(item.product)}><i class="fa fa-times"></i></span></td>
                                              </tr>
                                              ))
                                          }
                                          </tbody>
                                      </table>
                                  </div>
                                  <div class="row d-none">
                                      <div class="col-12">
                                          <div class="coupon-all">
                                              <div class="coupon">
                                                  <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text" />
                                                  <button class="s-btn s-btn-2" name="apply_coupon" type="submit">Apply
                                                      coupon</button>
                                              </div>
                                              <div class="coupon2">
                                                  <button class="s-btn s-btn-2" name="update_cart" type="submit">Update cart</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row justify-content-end">
                                      <div class="col-md-5 ml-auto">
                                          <div class="cart-page-total">
                                              <h2>Cart totals</h2>
                                              <ul class="mb-20">
                                                  <li>Total <span>
                                                    {`BHD ${cartItems.reduce(
                                                      (acc, item) => acc + item.quantity * item.price,
                                                      0
                                                    )}`}</span></li>
                                              </ul>
                                              <button class="s-btn s-btn-2" onClick={checkoutHandler}>Proceed to checkout</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                              )}
                              <div id="embed-target"></div>
                          </div>
                      </div>
                  </div>
              </section>


          </main>

    </Fragment>
  );
};

export default Cart;