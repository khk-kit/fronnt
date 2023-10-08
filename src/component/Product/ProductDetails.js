import React, { Fragment, useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails, newReview } from "../../actions/productAction.js";
import { useParams } from "react-router-dom";
import MetaData from "../layout/Metadata";
import ReviewCard from "./ReviewCard.jsx"
// import ReactStars from "react-rating-stars-component"
import Loader from '../layout/Loader/Loader';
import Metadata from '../layout/Metadata';
// import { Select } from '@material-ui/core';
import {addItemsToCart} from '../../actions/cartAction.js';
import{
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import MultiRangeSlider from "../../component/multiRangeSlider/MultiRangeSlider.js";
import $ from "jquery";

import bravelogo from "../../assets/img/logo/logo-black.png";
import rash_guard_brave_blue_1 from "../../assets/img/products/rash_guard_brave_blue_1.png";
import rash_guard_brave_blue_2 from "../../assets/img/products/rash_guard_brave_blue_2.png";
import mma_gloves_brave from "../../assets/img/products/mma_gloves_brave.png";
import product_modal_1 from "../../assets/img/products/modal/product_modal_1.png";
import product_modal_2 from "../../assets/img/products/modal/product_modal_2.jpg";
import product_modal_sm_1 from "../../assets/img/products/modal/product_modal_sm_1.jpg";
import product_modal_sm_2 from "../../assets/img/products/modal/product_modal_sm_2.jpg";
import product_des_1 from "../../assets/img/products/details/description/product-des-1.jpg";
import product_des_2 from "../../assets/img/products/details/description/product-des-2.jpg";
import product_des_3 from "../../assets/img/products/details/description/product-des-3.jpg";
import product_details_size from "../../assets/img/products/details/info/product-details-size.jpg";
import product_details_zoom from "../../assets/img/products/details/info/product-details-zoom.jpg";
import product_details_zoom_1 from "../../assets/img/products/details/info/product-details-zoom-1.jpg";
import measurement_guide from "../../assets/img/products/measurement-guide.jpg";

// import {useAlert} from 'react-alert'


const ProductDetails = () => {

  // const match = useMatch();
    const dispatch = useDispatch();
    // const alert = useAlert();
    const {id} = useParams();

    // const [filters, setFilters] = useState({});


    // const handleFilters = (e) => {
    //   const value = e?.target?.value;
    //   setFilters({
    //     [e.target.name]: value,
    //   });
    // };
    // console.log(filters)
    const sizeArray = [
        {size:'XS',clicked:false},
        {size:'S',clicked:false},
        {size:'M',clicked:false},
        {size:'L',clicked:false},
        {size:'XL',clicked:false},
        {size:'2XL',clicked:false}]
    const [sizeContainer, setSizeContainer] = useState(sizeArray);
    const { product, loading } = useSelector(state => state.productDetails);
    useEffect(() => {
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
    })
    useEffect(() => {
        dispatch(getProductDetails(id));
    },[dispatch, id])
    // useEffect(() => {
    //     dispatch(getProductDetails(id));
    // })

    const options = {
      // edit:false,
      // activeColor: "tomato",
      value: product.ratings,
      size:"large",
      // isHalf: true,
      readOnly: true,
      precision: 0.5,
    };

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const selectSize = (e) => {
        console.log("you just clicked",e.innerHTML,e.target.value,e);
        console.log("you just clicked1",sizeContainer);

        const updatedItems = sizeContainer.map(item => {
            if (item.size === e.target.innerHTML) {
                setSize(item.size);
              return {
                ...item,
                clicked: true
              };
            } else {
              return {
                ...item,
                clicked: false
              };
            }
          });

        setSizeContainer(updatedItems);
        console.log("you just clicked2",sizeContainer);
        console.log("you just clicked3",updatedItems);
      
        // setStyle("cont2");

        // $(".scroll").parent().toggleClass("active", false);
        // $(this).parent().toggleClass("active", true);

        $('.liactive').removeClass('active');
        $(this).addClass('active');
      };

    const increaseQuantity = () => {
      if (product?.Stock <= quantity) return;
  
      const qty = quantity + 1;
      setQuantity(qty);
    };
  
    const decreaseQuantity = () => {
      if (1 >= quantity) return;
  
      const qty = quantity - 1;
      setQuantity(qty);
    };
    // console.log(product)


const submitReviewToggle = () => {
  open? setOpen(false) : setOpen(true);
}

  const addToCartHandler = (event) => {
    event.preventDefault()
    dispatch(addItemsToCart(id, quantity, size,product));
    // alert?.success("Item Added To Cart");
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id)

    dispatch(newReview(myForm));

    setOpen(false)
    };

  return (
    
      <Fragment>
        <MetaData title={`${product?.name} - Products`} />
        {/* {loading?( 
          <Loader/>
          ) : ( */}
            <Fragment>
                
                <main>
                    {/*<div class="breadcrumb-area-2 box-plr-45 gray-bg-4">*/}
                    <div class="box-plr-45 gray-bg-4">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <nav aria-label="breadcrumb" class="breadcrumb-list-2">
                                        <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item"><a href="/Shop">Shop</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">{`${product?.name}`}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="product__details-area pb-45 box-plr-45 gray-bg-4">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 d-none">
                                    <div class="product__details-nav-wrapper d-sm-flex align-items-center">
                                        <div class="product__details-nav mr-120">
                                            <ul class="nav nav-tabs flex-sm-column" id="productDetailsNav" role="tablist">
                                                {product?.images &&
                                                  product?.images?.map((item, i) => (                                                
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id={`pro-nav-${i}-tab`} data-bs-toggle="tab" data-bs-target={`#pro-nav-${i}`} type="button" role="tab" aria-controls={`#pro-nav-${i}`} aria-selected="true">
                                                            <img class="product_nav_image" key={i} src={item?.url} alt={`${i} Slide`} />
                                                        </button>
                                                    </li>
                                                  ))
                                                }
                                            </ul>
                                        </div>
                                        <div class="product__details-thumb">
                                            <div class="tab-content" id="productDetailsTabContent">
                                                {product?.images &&
                                                  product?.images?.map((item, i) => (                                                
                                                    <div class="tab-pane fade show active" id={`#pro-nav-${i}`} role="tabpanel" aria-labelledby={`pro-nav-${i}-tab`}>
                                                      <div class="product-nav-thumb-wrapper">
                                                          <a href={item?.url} class="product-img-zoom popup-image d-none">
                                                          <i class="fal fa-compress"></i>
                                                          </a>
                                                          <img key={i} src={item?.url} alt={`${i} Slide`} />
                                                      </div>
                                                    </div>
                                                  ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                <Carousel>
                                    {product.images &&
                                        product.images.map((item, i) => (
                                        <img
                                            className="CarouselImage"
                                            key={i}
                                            src={item.url}
                                            alt={`${i} Slide`}
                                        />
                                        ))
                                    }
                                </Carousel>
                                </div>
                                <div class="col-xxl-4 col-xl-6 col-lg-6">
                                    <div class="product__details-content pt-40">
                                        <h3 class="product__details-title">
                                            {`${product?.name}`}
                                        </h3>
                                        <div class="product__details-price">
                                            <span class="price">{`$ ${product?.price}`}</span>
                                        </div>
                                        <div class="product__details-rating d-flex align-items-center mb-15">
                                            <ul class="mr-10">
                                                <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                <li><a href="#"><i class="fal fa-star"></i></a></li>
                                            </ul>
                                            <div class="product__details-customer">
                                                <span>{product.numberOfReviews} Total Reviews</span>
                                            </div>
                                        </div>
                                        <p class="product-id">Product: #{product._id}</p>
                                        <p class="product-des">{product.description}</p>
                                        <div class="product__details-color align-items-center mb-25 d-none">
                                            <span>Color:</span>
                                            <ul>
                                                <li><a href="#" class="black"></a></li>
                                                <li><a href="#" class="active brown"></a></li>
                                                <li><a href="#" class="blue"></a></li>
                                                <li><a href="#" class="red"></a></li>
                                                <li><a href="#" class="white"></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__details-size d-sm-flex align-items-center mb-30">
                                            <span>Size: </span>
                                            <ul class="mr-30">
                                            { product?.Size && sizeContainer.map((el) => {
                                                
                                                        // {sizeArray.includes(el) ? (<li><a href="#" >{el}</a></li>) : (<li><a href="#" class="unavailable">{el}</a></li>)}
                                                        if(product?.Size.includes(el.size)){
                                                            return <li class="liactive"><a onClick={selectSize} value={el.size} class="scroll" className={el.clicked ? "active" : ""}>{el.size}</a></li>
                                                        }
                                                        if(!(product?.Size.includes(el.size))){
                                                            return <li><a class="unavailable">{el.size}</a></li>
                                                        }
                                            })
                                            }
                                                {/* { product?.Size && product?.Size?.map((el) => 
                                                    ((!sizeArray.includes(el)) && <li><a href="#" class="unavailable">{el}</a></li>))
                                                } */}
                                                {/* { product?.Size && product?.Size?.map((el) => 
                                                    ((!sizeArray.includes(el)) && <li><a href="#" class="unavailable">{el}</a></li>))
                                                } */}

                                                {/* <li>
                                                    <a href="#" class="unavailable">S</a>
                                                </li>
                                                <li>
                                                    <a href="#" >M</a>
                                                </li>
                                                <li>
                                                    <a href="#">L</a>
                                                </li>
                                                <li>
                                                    <a href="#">XL</a>
                                                </li>
                                                <li>
                                                    <a href="#">2XL</a>
                                                </li> */}
                                            </ul>
                                            <button type="button" class="product-size-guide-btn float-sm-end" data-bs-toggle="modal" data-bs-target="#productSizeModal">Size Guide</button>
                                        </div>
                                        <div class="product__details-action">
                                            <form action="#">
                                                <div class="product__details-quantity d-sm-flex align-items-center">
                                                    <div class="product-quantity mb-20 mr-15">
                                                    <div class="cart-plus-minus"><input type="text" value="1" /></div>
                                                    </div>
                                                    <div class="product-add-cart mb-20">
                                                      <button class="s-btn s-btn-2 s-btn-big"
                                                      disabled={product.Stock < 1 ? true : false}
                                                      onClick={addToCartHandler}
                                                      >
                                                      Add to Cart
                                                      </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="product__details-meta mb-25">
                                            <ul>
                                                <li>
                                                    <div class="product-availibility">
                                                      <span>Availability:</span>
                                                      <p>
                                                          <span>
                                                            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                                            {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                                            </b>
                                                          </span>
                                                      </p>
                                                    </div>
                                                </li>
                                                <li class="d-none">
                                                    <div class="product-sku">
                                                    <span>Sku:</span>
                                                    <p>
                                                        <span>0026AG90</span>
                                                    </p>
                                                    </div>
                                                </li>
                                                <li class="d-none">
                                                    <div class="product-sku">
                                                    <span>Categories:</span>
                                                    <p>
                                                        <a href="#">Lighting,</a>
                                                        <a href="#">Lamp,</a>
                                                        <a href="#">Decor</a>
                                                    </p>
                                                    </div>
                                                </li>
                                                <li class="d-none">
                                                    <div class="product-sku">
                                                    <span>Tags:</span>
                                                    <p>
                                                        <a href="#">PinK Store,</a>
                                                        <a href="#">Furniture,</a>
                                                        <a href="#">Livingroom,</a>
                                                        <a href="#">Table</a>
                                                    </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product__details-social align-items-center d-none">
                                            <span>Share: </span>
                                            <ul>
                                                <li>
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="product__info-area pt-95">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="product__info-btn text-center" role="tablist">
                                        <ul class="nav nav-tabs d-sm-flex justify-content-center" id="productInfoTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" type="button" id="des-tab" data-bs-toggle="tab" data-bs-target="#des"  role="tab" aria-controls="des" aria-selected="true">Description</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" type="button" id="addi-tab" data-bs-toggle="tab" data-bs-target="#addi"  role="tab" aria-controls="addi" aria-selected="true">Additional Information</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" type="button" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" role="tab" aria-controls="review" aria-selected="true">Reviews ({product.numberOfReviews})</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="product__info-tab-content tab-content pb-75">
                                        <div class="tab-pane fade show active" id="des" role="tabpanel" aria-labelledby="des-tab">
                                            <div class="product__details-description pt-1">
                                                <div class="row d-none">
                                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                        <div class="description-thumb m-img text-center">
                                                            <img src={product_des_1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                        <div class="description-thumb m-img text-center">
                                                            <img src={product_des_2} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                        <div class="description-thumb m-img text-center">
                                                            <img src={product_des_3} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xxl-12 ">
                                                        <p class="product-additional-des mt-90">{product.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="addi" role="tabpanel" aria-labelledby="addi-tab">
                                            <div class="product__details-info mt-50">
                                                <ul>
                                                <li>
                                                    <h4>Weight</h4>
                                                    <span>2 lbs</span>
                                                </li>
                                                <li>
                                                    <h4>Dimensions</h4>
                                                    <span>12 × 16 × 19 in</span>
                                                </li>
                                                <li>
                                                    <h4>Product</h4>
                                                    <span>Purchase this product on rag-bone.com</span>
                                                </li>
                                                <li>
                                                    <h4>Color</h4>
                                                    <span>Gray, Black</span>
                                                </li>
                                                <li>
                                                    <h4>Size</h4>
                                                    <span>S, M, L, XL</span>
                                                </li>
                                                <li>
                                                    <h4>Model</h4>
                                                    <span>Model	</span>
                                                </li>
                                                <li>
                                                    <h4>Shipping</h4>
                                                    <span>Standard shipping: $5,95</span>
                                                </li>
                                                <li>
                                                    <h4>Care Info</h4>
                                                    <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                                                </li>
                                                <li>
                                                    <h4>Brand</h4>
                                                    <span>Kazen</span>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade " id="review" role="tabpanel" aria-labelledby="review-tab">
                                            <div class="product__details-review mt-50">
                                                <div class="row">
                                                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                        <div class="produc-review-wrapper">
                                                            {product.reviews && product.reviews[0] ? (
                                                            <div className="reviews">
                                                                {product.reviews &&
                                                                product.reviews.map((review) => (
                                                                <ReviewCard key={review._id} review={review} />
                                                                ))}
                                                            </div>
                                                            ) : (
                                                            <p className="noReviews">No Reviews Yet</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                        <div class="product-review-form pl-60">
                                                            <form action="#" class="border p-4">
                                                                <h3 class="product-review-title">YOU'RE REVIEWING: <span>“{`${product?.name}`}”</span></h3>
                                                                <p class="product-review-form-des d-none">Your email address will not be published. Required fields are marked *</p>
                                                                <div class="product-review-form-rating mb-40">
                                                                    <p>Your Rating</p>
                                                                    <Rating
                                                                        onChange={(e) =>
                                                                    setRating(e.target.value)}
                                                                    value={rating}
                                                                    size="large"
                                                                    />
                                                                    <ul class="d-none">
                                                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product-review-form-wrapper">
                                                                    <div class="row">
                                                                        <div class="col-xxl-12">
                                                                            <div class="product-review-input">
                                                                                <label>Your Review *</label>
                                                                                <textarea
                                                                                    className="submitDialogTextArea"
                                                                                    cols="30"
                                                                                    rows="5"
                                                                                    value={comment}
                                                                                    onChange={(e) => setComment(e.target.value)}
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xxl-6 d-none">
                                                                            <div class="product-review-input">
                                                                                <label>Name *</label>
                                                                                <input type="text" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xxl-6 d-none">
                                                                            <div class="product-review-input">
                                                                                <label>Email *</label>
                                                                                <input type="email" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xxl-12 d-none">
                                                                            <div class="product-review-agree d-flex align-items-center mb-45">
                                                                                <input type="checkbox" id="agree" />
                                                                                <label for="agree">Save my name, email, and website in this browser for the next time I comment.</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-xxl-12">
                                                                            <div class="product-review-btn">
                                                                                <button onClick={reviewSubmitHandler} type="submit" class="s-btn s-btn-2 s-btn-big-2">Submit Review</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                
                    <section class="product__details-banner-text black-bg-2 text-center d-none">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xxl-6 col-xl-8 col-lg-8">
                                    <p>Karakoram! is surrounded by impassable mountains, ridges, lakes and river rapids, historical architectural brutality and grandeur through which the fearless move only forward without looking back. </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="product__zoom-area pt-100 pb-100 d-none">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                    <div class="product__zoom-thumb w-img">
                                        <img src={product_details_size} alt="" />
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                    <div class="product__zoom-content">
                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging. A light chair, easy to move around the dining table and about the room. Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>

                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging.</p>

                                        <p>A new collection of lounge furniture, occasional tables and a stool by Edward Barber & Jay Osgerby offers a relaxed, contemporary attitude toward interior design. The lounge furniture includes four individualized sized sofas, and three complementary ottomans. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product__zoom-area pt-100 d-none">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                    <div class="product__zoom-content">
                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging. A light chair, easy to move around the dining table and about the room. Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>

                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging.</p>

                                        <p>A new collection of lounge furniture, occasional tables and a stool by Edward Barber & Jay Osgerby offers a relaxed, contemporary attitude toward interior design. The lounge furniture includes four individualized sized sofas, and three complementary ottomans. </p>
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6  order-first order-lg-last">
                                    <div class="product__zoom-thumb w-img">
                                        <img src={product_details_zoom} alt="" class="product-zoom-img-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product__zoom-area pt-100 pb-90 d-none">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                    <div class="product__zoom-thumb w-img">
                                        <img src={product_details_zoom_1} alt="" class="rightImg" />
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6">
                                    <div class="product__zoom-content">
                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging. A light chair, easy to move around the dining table and about the room. Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>

                                        <p>The gently rounded top together with the back and seat offers a variety of comfortable seating positions, ideal for both long visits to the dining table and relaxed lounging.</p>

                                        <p>A new collection of lounge furniture, occasional tables and a stool by Edward Barber & Jay Osgerby offers a relaxed, contemporary attitude toward interior design. The lounge furniture includes four individualized sized sofas, and three complementary ottomans. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="product-line"></div>

                    <div class="top-selling-product pt-95 pb-65">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-12">
                                    <div class="product-details-section-title text-center mb-75">
                                        <h3>YOU MAY ALSO LIKE</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row pb-20">
                                    <a href="/" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".1s">
                                            <div class="product-thumb">
                                                <img src={rash_guard_brave_blue_1} alt="#"></img>
                                                <img src={rash_guard_brave_blue_2} alt="#"></img>
                                                <div class="cart-btn cart-btn-1 p-abs">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                                <div class="product-action product-action-1 p-abs">
                                                    <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                        <i class="fal fa-eye"></i>
                                                        <i class="fal fa-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="pro-title pro-title-2"><a href="/">RASH GUARD "BRAVE"</a></h4>
                                                <div class="pro-price">
                                                    <span>$223.00</span>
                                                    <del>$64.00</del>
                                                </div>
                                                <div class="rating">
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".3s">
                                            <div class="product-thumb">
                                                <img src={mma_gloves_brave} alt="#"></img>
                                                <div class="cart-btn cart-btn-1 p-abs">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                                <div class="product-action product-action-1 p-abs">
                                                    <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                        <i class="fal fa-eye"></i>
                                                        <i class="fal fa-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="pro-title pro-title-2"><a href="/">MMA Gloves "BRAVE"</a></h4>
                                                <div class="pro-price">
                                                    <span>$223.00</span>
                                                    <del>$64.00</del>
                                                </div>
                                                <div class="rating">
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".6s">
                                            <div class="product-thumb">
                                                <img src={rash_guard_brave_blue_1} alt="#"></img>
                                                <img src={rash_guard_brave_blue_2} alt="#"></img>
                                                <div class="cart-btn cart-btn-1 p-abs">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                                <div class="product-action product-action-1 p-abs">
                                                    <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal"> 
                                                        <i class="fal fa-eye"></i>
                                                        <i class="fal fa-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="pro-title pro-title-2"><a href="/">RASH GUARD "BRAVE"</a></h4>
                                                <div class="pro-price">
                                                    <span>$223.00</span>
                                                    <del>$64.00</del>
                                                </div>
                                                <div class="rating">
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".9s">
                                            <div class="product-thumb">
                                                <img src={mma_gloves_brave} alt="#"></img>
                                                <div class="cart-btn cart-btn-1 p-abs">
                                                    <a href="#">Add to cart</a>
                                                </div>
                                                <div class="product-action product-action-1 p-abs">
                                                    <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                        <i class="fal fa-eye"></i>
                                                        <i class="fal fa-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="pro-title pro-title-2"><a href="/">MMA Gloves "BRAVE"</a></h4>
                                                <div class="pro-price">
                                                    <span>$223.00</span>
                                                    <del>$64.00</del>
                                                </div>
                                                <div class="rating">
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star active"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                    <i class="fal fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product__modal-area modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="product__modal-inner position-relative">
                                    <div class="product__modal-close">
                                        <button data-bs-dismiss="modal" aria-label="Close">
                                            <i class="ti-close"></i>
                                        </button>
                                    </div>
                                    <div class="product__modal-left">
                                        <div class="tab-content mb-10" id="productModalThumb">
                                            <div class="tab-pane fade show active" id="pro-1" role="tabpanel" aria-labelledby="pro-1-tab">
                                                <div class="product__modal-thumb w-img">
                                                    <img src={product_modal_1} alt=""></img>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                                                <div class="product__modal-thumb w-img">
                                                    <img src={product_modal_2} alt=""></img>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                                                <div class="product__modal-thumb w-img">
                                                    <img src={product_modal_1} alt=""></img>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="pro-4" role="tabpanel" aria-labelledby="pro-4-tab">
                                                <div class="product__modal-thumb w-img">
                                                    <img src={product_modal_2} alt=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product__modal-nav">
                                            <ul class="nav nav-tabs" id="productModalNav" role="tablist">
                                                <li class="nav-item mr-10" role="presentation">
                                                <button class="nav-link active" id="pro-1-tab" data-bs-toggle="tab" data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1" aria-selected="true">
                                                    <img src={product_modal_sm_2} alt=""></img>
                                                </button>
                                                </li>
                                                <li class="nav-item mr-10" role="presentation">
                                                <button class="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2" type="button" role="tab" aria-controls="pro-2" aria-selected="false">
                                                    <img src={product_modal_sm_1} alt=""></img>
                                                </button>
                                                </li>
                                                <li class="nav-item mr-10" role="presentation">
                                                <button class="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3" type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                                    <img src={product_modal_sm_2} alt=""></img>
                                                </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="pro-4-tab" data-bs-toggle="tab" data-bs-target="#pro-4" type="button" role="tab" aria-controls="pro-4" aria-selected="false">
                                                    <img src={product_modal_sm_1} alt=""></img>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__modal-right">
                                        <h3 class="product__modal-title">
                                            <a href="/"></a>
                                        </h3>
                                        <div class="product__modal-rating d-flex align-items-center">
                                            <ul class="mr-10">
                                                <li>
                                                    <a href="#"><i class="ti-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="ti-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="ti-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="ti-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="ti-star"></i></a>
                                                </li>
                                            </ul>
                                            <div class="customer-review">
                                                <a href="#">(1 customer review)</a>
                                            </div>
                                        </div>
                                        <div class="product__modal-price mb-10">
                                            <span class="price new-price">$700.00 &nbsp;</span>

                                            <span class="price old-price">$899.99</span>
                                        </div>
                                        <div class="product__modal-available">
                                            <p> Availability: <span>In Stock</span> </p>
                                        </div>
                                        <div class="product__modal-sku">
                                            <p> Sku: <span> 0026AG90-1</span> </p>
                                        </div>
                                        <div class="product__modal-des">
                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod legunt saepius.…</p>
                                        </div>
                                        <div class="product__modal-quantity mb-15">
                                            <h5>Quantity:</h5>
                                            <form action="#">
                                                <div class="pro-quan-area d-sm-flex align-items-center">
                                                    <div class="product-quantity mr-20 mb-25">
                                                        <div class="cart-plus-minus p-relative"><input type="text" value="1" /></div>
                                                    </div>
                                                    <div class="product__modal-cart mb-25">
                                                        <button class="product-modal-cart-btn " type="submit">Add to cart</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="product__modal-categories d-sm-flex align-items-center">
                                            <span>Categories: </span>
                                            <ul>
                                                <li><a href="#">Decor, </a></li>
                                                <li><a href="#">Lamp, </a></li>
                                                <li><a href="#">Lighting</a></li>
                                            </ul>
                                        </div>
                                        <div class="product__modal-categories d-sm-flex align-items-center">
                                            <span>Tags: </span>
                                            <ul>
                                                <li><a href="#">Furniture, </a></li>
                                                <li><a href="#">Lighting, </a></li>
                                                <li><a href="#">Living Room, </a></li>
                                                <li><a href="#">Table</a></li>
                                            </ul>
                                        </div>
                                        <div class="product__modal-share d-sm-flex align-items-center">
                                            <span>Share this product: </span>
                                            <ul>
                                                <li>
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product__details-sizetab-modal modal fade" id="productSizeModal" tabindex="-1"  aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="product__details-sizetab">
                                    <div class="product__details-sizetab-top text-center mb-30">
                                        <span><img class="w-50" src={bravelogo} alt="" /></span>
                                        <h3 class="product__details-sizetab-title">Size Charts</h3>
                                    </div>
                                    <div class="product__details-sizetab-content">
                                        <div class="product-details-sizetab-nav mb-20 text-center">
                                            <ul>
                                                <li>
                                                    <a href="#">women</a>
                                                </li>
                                                <li>
                                                    <a href="#">men</a>
                                                </li>
                                                <li>
                                                    <a href="#">girls</a>
                                                </li>
                                                <li>
                                                    <a href="#">boys</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-details-sizetab-nav-2 tab-content" id="productSizeContent">
                                            <ul class="nav nav-tabs justify-content-center" id="productInnerTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="tops-tab" data-bs-toggle="tab" data-bs-target="#tops" type="button" role="tab" aria-controls="tops" aria-selected="true">Tops</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="bottoms-tab" data-bs-toggle="tab" data-bs-target="#bottoms" type="button" role="tab" aria-controls="bottoms" aria-selected="false">Bottoms</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="suiting-tab" data-bs-toggle="tab" data-bs-target="#suiting" type="button" role="tab" aria-controls="suiting" aria-selected="false">Suiting</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="outerwear-tab" data-bs-toggle="tab" data-bs-target="#outerwear" type="button" role="tab" aria-selected="false">Outerwear</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="sports-tab" data-bs-toggle="tab" data-bs-target="#sports" type="button" role="tab"  aria-selected="false">Sports</button>
                                                </li>
                                            </ul>
                                        </div>
                                    <div class="product__details-sizetab-accordion">
                                        <div class="tab-content" id="productSizeAccordion">
                                            <div class="tab-pane fade show active" id="tops" role="tabpanel" aria-labelledby="tops-tab">
                                                <div class="accordion" id="accordionMeasurements">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="measurementsbtn">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#measurementsOne" aria-expanded="true" aria-controls="measurementsOne">
                                                        Measurements
                                                        </button>
                                                    </h2>
                                                    <div id="measurementsOne" class="accordion-collapse collapse show" aria-labelledby="measurementsbtn" data-bs-parent="#accordionMeasurements">
                                                        <div class="accordion-body">
                                                            <div class="product-measurements-content">
                                                                <div class="product-measurements-top d-flex align-items-center justify-content-between mb-20">
                                                                    <h3 class="product-measurements-title">Size charts Outerwear</h3>
                                                                    <div class="product-measurements-cm">
                                                                        <ul class="nav nav-tabs" id="prooductCmTab" role="tablist">
                                                                            <li class="nav-item" role="presentation">
                                                                            <button class="nav-link active" id="inch-tab" data-bs-toggle="tab" data-bs-target="#inch" type="button" role="tab" aria-controls="inch" aria-selected="true">inch</button>
                                                                            </li>
                                                                            <li class="nav-item" role="presentation">
                                                                            <button class="nav-link" id="cm-tab" data-bs-toggle="tab" data-bs-target="#cm" type="button" role="tab" aria-controls="cm" aria-selected="true">cm</button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-content" id="productCmContent">
                                                                    <div class="tab-pane fade show active" id="inch" role="tabpanel" aria-labelledby="inch-tab">
                                                                        <div class="product-size-table">
                                                                            <table class="table text-center">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Size (US)</th>
                                                                                        <th>Chest</th>
                                                                                        <th>Neck</th>
                                                                                        <th>Waist</th>
                                                                                        <th>Arm Length</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>X</td>
                                                                                        <td>32-34</td>
                                                                                        <td>13-13.5 </td>
                                                                                        <td>26-28</td>
                                                                                        <td>31-32</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>S</td>
                                                                                        <td>35-37</td>
                                                                                        <td>14-14.5</td>
                                                                                        <td>29-31</td>
                                                                                        <td>32-33</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>M</td>
                                                                                        <td>38-40</td>
                                                                                        <td>15-15.5</td>
                                                                                        <td>32-34</td>
                                                                                        <td>33-34</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>L</td>
                                                                                        <td>41-43</td>
                                                                                        <td>16-16.5</td>
                                                                                        <td>35-37</td>
                                                                                        <td>34-35</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XL</td>
                                                                                        <td>44-46</td>
                                                                                        <td>17-17.5</td>
                                                                                        <td>38-40</td>
                                                                                        <td>35-36</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XXL</td>
                                                                                        <td>47-49</td>
                                                                                        <td> 18-18.5</td>
                                                                                        <td>41-43</td>
                                                                                        <td>36-37</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XXXL</td>
                                                                                        <td>50-52</td>
                                                                                        <td>18-18.5</td>
                                                                                        <td>44-45</td>
                                                                                        <td>36-37</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane fade" id="cm" role="tabpanel" aria-labelledby="cm-tab">
                                                                        <div class="product-size-table">
                                                                            <table class="table text-center">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Size (US)</th>
                                                                                        <th>Chest</th>
                                                                                        <th>Neck</th>
                                                                                        <th>Waist</th>
                                                                                        <th>Arm Length</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>X</td>
                                                                                        <td>32-34</td>
                                                                                        <td>13-13.5 </td>
                                                                                        <td>26-28</td>
                                                                                        <td>31-32</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>S</td>
                                                                                        <td>35-37</td>
                                                                                        <td>14-14.5</td>
                                                                                        <td>29-31</td>
                                                                                        <td>32-33</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>M</td>
                                                                                        <td>38-40</td>
                                                                                        <td>15-15.5</td>
                                                                                        <td>32-34</td>
                                                                                        <td>33-34</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>L</td>
                                                                                        <td>41-43</td>
                                                                                        <td>16-16.5</td>
                                                                                        <td>35-37</td>
                                                                                        <td>34-35</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XL</td>
                                                                                        <td>44-46</td>
                                                                                        <td>17-17.5</td>
                                                                                        <td>38-40</td>
                                                                                        <td>35-36</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XXL</td>
                                                                                        <td>47-49</td>
                                                                                        <td> 18-18.5</td>
                                                                                        <td>41-43</td>
                                                                                        <td>36-37</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>XXXL</td>
                                                                                        <td>50-52</td>
                                                                                        <td>18-18.5</td>
                                                                                        <td>44-45</td>
                                                                                        <td>36-37</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="guidebtn">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#guideOne" aria-expanded="true" aria-controls="guideOne">
                                                        Measuring Guide
                                                        </button>
                                                    </h2>
                                                    <div id="guideOne" class="accordion-collapse collapse " aria-labelledby="guidebtn" data-bs-parent="#accordionMeasurements">
                                                        <div class="accordion-body">
                                                            <div class="product-guide d-md-flex align-items-center">
                                                            <div class="product-guide-thumb mr-30">
                                                                <img src={measurement_guide} alt="" />
                                                            </div>
                                                            <div class="product-guide-content">
                                                                <div class="chest mb-25">
                                                                    <h3>Chest</h3>
                                                                    <p>Measure under your arms around the fullest part of your chest.</p>
                                                                </div>
                                                                <div class="arm mb-25">
                                                                    <h3>Arm Length</h3>
                                                                    <p>Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your arm length.</p>
                                                                </div>
                                                                <div class="neck mb-25">
                                                                    <h3>Neck</h3>
                                                                    <p>Measure around the middle of your neck (at the Adam’s apple), keeping tape a bit loose.</p>
                                                                </div>
                                                                <div class="waist">
                                                                    <h3>Waist</h3>
                                                                    <p>Measure around your natural waistline, keeping the tape a bit loose.</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="sizeConversionbtn">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sizeConversionOne" aria-expanded="true">
                                                        Size Conversions
                                                        </button>
                                                    </h2>
                                                    <div id="sizeConversionOne" class="accordion-collapse collapse " aria-labelledby="sizeConversionbtn" data-bs-parent="#accordionMeasurements">
                                                        <div class="accordion-body">
                                                            <div class="product-size-table product-size-table-2">
                                                            <p>All conversions are approximate. Fits may vary by style or personal preference; sizes may vary by manufacturer.</p>
                                                            <table class="table text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size (US)</th>
                                                                        <th>Numeric Size (US)</th>
                                                                        <th>UK</th>
                                                                        <th>EU</th>
                                                                        <th>Japan </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>X</td>
                                                                        <td>34</td>
                                                                        <td>34</td>
                                                                        <td>44</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>S</td>
                                                                        <td>36</td>
                                                                        <td>36</td>
                                                                        <td>46</td>
                                                                        <td>S</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M</td>
                                                                        <td>38</td>
                                                                        <td>38</td>
                                                                        <td>48</td>
                                                                        <td>M</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>L</td>
                                                                        <td>40</td>
                                                                        <td>40</td>
                                                                        <td>50</td>
                                                                        <td>L</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XL</td>
                                                                        <td>42</td>
                                                                        <td>42</td>
                                                                        <td>52</td>
                                                                        <td>XL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXL</td>
                                                                        <td>44</td>
                                                                        <td>44</td>
                                                                        <td>54</td>
                                                                        <td>XXL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXXL</td>
                                                                        <td>46</td>
                                                                        <td>46</td>
                                                                        <td>56</td>
                                                                        <td>XXXL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="bottoms" role="tabpanel" aria-labelledby="bottoms-tab">
                                                <div class="accordion" id="accordionMeasurements2">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="measurementsbtn2">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#measurementsTwo" aria-expanded="true" aria-controls="measurementsTwo">
                                                        Measurements
                                                        </button>
                                                    </h2>
                                                    <div id="measurementsTwo" class="accordion-collapse collapse show" aria-labelledby="measurementsbtn2" data-bs-parent="#accordionMeasurements2">
                                                        <div class="accordion-body">
                                                            <div class="product-measurements-content">
                                                            <div class="product-measurements-top d-flex align-items-center justify-content-between mb-20">
                                                                <h3 class="product-measurements-title">Size charts Outerwear</h3>
                                                                <div class="product-measurements-cm">
                                                                    <ul class="nav nav-tabs" id="prooductCmTab2" role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link active" id="inch-tab-2" data-bs-toggle="tab" data-bs-target="#inch2" type="button" role="tab" aria-controls="inch2" aria-selected="true">inch</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link" id="cm-tab-2" data-bs-toggle="tab" data-bs-target="#cm2" type="button" role="tab" aria-controls="cm2" aria-selected="true">cm</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="tab-content" id="productCmContent2">
                                                                <div class="tab-pane fade show active" id="inch2" role="tabpanel" aria-labelledby="inch-tab-2">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade" id="cm2" role="tabpanel" aria-labelledby="cm-tab-2">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="guidebtn2">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#guideTwo" aria-expanded="true" aria-controls="guideTwo">
                                                        Measuring Guide
                                                        </button>
                                                    </h2>
                                                    <div id="guideTwo" class="accordion-collapse collapse " aria-labelledby="guidebtn2" data-bs-parent="#accordionMeasurements2">
                                                        <div class="accordion-body">
                                                            <div class="product-guide d-md-flex align-items-center">
                                                            <div class="product-guide-thumb mr-30">
                                                                <img src={measurement_guide} alt="" />
                                                            </div>
                                                            <div class="product-guide-content">
                                                                <div class="chest mb-25">
                                                                    <h3>Chest</h3>
                                                                    <p>Measure under your arms around the fullest part of your chest.</p>
                                                                </div>
                                                                <div class="arm mb-25">
                                                                    <h3>Arm Length</h3>
                                                                    <p>Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your arm length.</p>
                                                                </div>
                                                                <div class="neck mb-25">
                                                                    <h3>Neck</h3>
                                                                    <p>Measure around the middle of your neck (at the Adam’s apple), keeping tape a bit loose.</p>
                                                                </div>
                                                                <div class="waist">
                                                                    <h3>Waist</h3>
                                                                    <p>Measure around your natural waistline, keeping the tape a bit loose.</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="sizeConversionbtn2">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sizeConversionTwo" aria-expanded="true">
                                                        Size Conversions
                                                        </button>
                                                    </h2>
                                                    <div id="sizeConversionTwo" class="accordion-collapse collapse " aria-labelledby="sizeConversionbtn2" data-bs-parent="#accordionMeasurements2">
                                                        <div class="accordion-body">
                                                            <div class="product-size-table product-size-table-2">
                                                            <p>All conversions are approximate. Fits may vary by style or personal preference; sizes may vary by manufacturer.</p>
                                                            <table class="table text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size (US)</th>
                                                                        <th>Numeric Size (US)</th>
                                                                        <th>UK</th>
                                                                        <th>EU</th>
                                                                        <th>Japan </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>X</td>
                                                                        <td>34</td>
                                                                        <td>34</td>
                                                                        <td>44</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>S</td>
                                                                        <td>36</td>
                                                                        <td>36</td>
                                                                        <td>46</td>
                                                                        <td>S</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M</td>
                                                                        <td>38</td>
                                                                        <td>38</td>
                                                                        <td>48</td>
                                                                        <td>M</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>L</td>
                                                                        <td>40</td>
                                                                        <td>40</td>
                                                                        <td>50</td>
                                                                        <td>L</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XL</td>
                                                                        <td>42</td>
                                                                        <td>42</td>
                                                                        <td>52</td>
                                                                        <td>XL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXL</td>
                                                                        <td>44</td>
                                                                        <td>44</td>
                                                                        <td>54</td>
                                                                        <td>XXL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXXL</td>
                                                                        <td>46</td>
                                                                        <td>46</td>
                                                                        <td>56</td>
                                                                        <td>XXXL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="suiting" role="tabpanel" aria-labelledby="suiting-tab">
                                                <div class="accordion" id="accordionMeasurements3">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="measurementsbtn3">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#measurementsThree" aria-expanded="true" aria-controls="measurementsThree">
                                                        Measurements
                                                        </button>
                                                    </h2>
                                                    <div id="measurementsThree" class="accordion-collapse collapse show" aria-labelledby="measurementsbtn3" data-bs-parent="#accordionMeasurements3">
                                                        <div class="accordion-body">
                                                            <div class="product-measurements-content">
                                                            <div class="product-measurements-top d-flex align-items-center justify-content-between mb-20">
                                                                <h3 class="product-measurements-title">Size charts Outerwear</h3>
                                                                <div class="product-measurements-cm">
                                                                    <ul class="nav nav-tabs" id="prooductCmTab3" role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link active" id="inch-tab-3" data-bs-toggle="tab" data-bs-target="#inch3" type="button" role="tab" aria-controls="inch3" aria-selected="true">inch</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link" id="cm-tab-3" data-bs-toggle="tab" data-bs-target="#cm3" type="button" role="tab" aria-controls="cm3" aria-selected="true">cm</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="tab-content" id="productCmContent3">
                                                                <div class="tab-pane fade show active" id="inch3" role="tabpanel" aria-labelledby="inch-tab-3">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade" id="cm3" role="tabpanel" aria-labelledby="cm-tab-3">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="guidebtn3">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#guideThree" aria-expanded="true" aria-controls="guideOne">
                                                        Measuring Guide
                                                        </button>
                                                    </h2>
                                                    <div id="guideThree" class="accordion-collapse collapse " aria-labelledby="guidebtn3" data-bs-parent="#accordionMeasurements3">
                                                        <div class="accordion-body">
                                                            <div class="product-guide d-md-flex align-items-center">
                                                            <div class="product-guide-thumb mr-30">
                                                                <img src={measurement_guide} alt="" />
                                                            </div>
                                                            <div class="product-guide-content">
                                                                <div class="chest mb-25">
                                                                    <h3>Chest</h3>
                                                                    <p>Measure under your arms around the fullest part of your chest.</p>
                                                                </div>
                                                                <div class="arm mb-25">
                                                                    <h3>Arm Length</h3>
                                                                    <p>Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your arm length.</p>
                                                                </div>
                                                                <div class="neck mb-25">
                                                                    <h3>Neck</h3>
                                                                    <p>Measure around the middle of your neck (at the Adam’s apple), keeping tape a bit loose.</p>
                                                                </div>
                                                                <div class="waist">
                                                                    <h3>Waist</h3>
                                                                    <p>Measure around your natural waistline, keeping the tape a bit loose.</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="sizeConversionbtn3">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sizeConversionThree" aria-expanded="true">
                                                        Size Conversions
                                                        </button>
                                                    </h2>
                                                    <div id="sizeConversionThree" class="accordion-collapse collapse " aria-labelledby="sizeConversionbtn3" data-bs-parent="#accordionMeasurements3">
                                                        <div class="accordion-body">
                                                            <div class="product-size-table product-size-table-2">
                                                            <p>All conversions are approximate. Fits may vary by style or personal preference; sizes may vary by manufacturer.</p>
                                                            <table class="table text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size (US)</th>
                                                                        <th>Numeric Size (US)</th>
                                                                        <th>UK</th>
                                                                        <th>EU</th>
                                                                        <th>Japan </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>X</td>
                                                                        <td>34</td>
                                                                        <td>34</td>
                                                                        <td>44</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>S</td>
                                                                        <td>36</td>
                                                                        <td>36</td>
                                                                        <td>46</td>
                                                                        <td>S</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M</td>
                                                                        <td>38</td>
                                                                        <td>38</td>
                                                                        <td>48</td>
                                                                        <td>M</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>L</td>
                                                                        <td>40</td>
                                                                        <td>40</td>
                                                                        <td>50</td>
                                                                        <td>L</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XL</td>
                                                                        <td>42</td>
                                                                        <td>42</td>
                                                                        <td>52</td>
                                                                        <td>XL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXL</td>
                                                                        <td>44</td>
                                                                        <td>44</td>
                                                                        <td>54</td>
                                                                        <td>XXL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXXL</td>
                                                                        <td>46</td>
                                                                        <td>46</td>
                                                                        <td>56</td>
                                                                        <td>XXXL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="outerwear" role="tabpanel" aria-labelledby="outerwear-tab">
                                                <div class="accordion" id="accordionMeasurements4">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="measurementsbtn4">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#measurementsFour" aria-expanded="true" aria-controls="measurementsFour">
                                                        Measurements
                                                        </button>
                                                    </h2>
                                                    <div id="measurementsFour" class="accordion-collapse collapse show" aria-labelledby="measurementsbtn4" data-bs-parent="#accordionMeasurements4">
                                                        <div class="accordion-body">
                                                            <div class="product-measurements-content">
                                                            <div class="product-measurements-top d-flex align-items-center justify-content-between mb-20">
                                                                <h3 class="product-measurements-title">Size charts Outerwear</h3>
                                                                <div class="product-measurements-cm">
                                                                    <ul class="nav nav-tabs" id="prooductCmTab4" role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link active" id="inch-tab-4" data-bs-toggle="tab" data-bs-target="#inch4" type="button" role="tab"  aria-selected="true">inch</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link" id="cm-tab-4" data-bs-toggle="tab" data-bs-target="#cm4" type="button" role="tab"  aria-selected="true">cm</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="tab-content" id="productCmContent4">
                                                                <div class="tab-pane fade show active" id="inch4" role="tabpanel" aria-labelledby="inch-tab-4">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade" id="cm4" role="tabpanel" aria-labelledby="cm-tab-4">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="guidebtn4">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#guideFour" aria-expanded="true" aria-controls="guideFour">
                                                        Measuring Guide
                                                        </button>
                                                    </h2>
                                                    <div id="guideFour" class="accordion-collapse collapse " aria-labelledby="guidebtn4" data-bs-parent="#accordionMeasurements4">
                                                        <div class="accordion-body">
                                                            <div class="product-guide d-md-flex align-items-center">
                                                            <div class="product-guide-thumb mr-30">
                                                                <img src={measurement_guide} alt="" />
                                                            </div>
                                                            <div class="product-guide-content">
                                                                <div class="chest mb-25">
                                                                    <h3>Chest</h3>
                                                                    <p>Measure under your arms around the fullest part of your chest.</p>
                                                                </div>
                                                                <div class="arm mb-25">
                                                                    <h3>Arm Length</h3>
                                                                    <p>Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your arm length.</p>
                                                                </div>
                                                                <div class="neck mb-25">
                                                                    <h3>Neck</h3>
                                                                    <p>Measure around the middle of your neck (at the Adam’s apple), keeping tape a bit loose.</p>
                                                                </div>
                                                                <div class="waist">
                                                                    <h3>Waist</h3>
                                                                    <p>Measure around your natural waistline, keeping the tape a bit loose.</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="sizeConversionbtn4">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sizeConversionFour" aria-expanded="true">
                                                        Size Conversions
                                                        </button>
                                                    </h2>
                                                    <div id="sizeConversionFour" class="accordion-collapse collapse " aria-labelledby="sizeConversionbtn4" data-bs-parent="#accordionMeasurements4">
                                                        <div class="accordion-body">
                                                            <div class="product-size-table product-size-table-2">
                                                            <p>All conversions are approximate. Fits may vary by style or personal preference; sizes may vary by manufacturer.</p>
                                                            <table class="table text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size (US)</th>
                                                                        <th>Numeric Size (US)</th>
                                                                        <th>UK</th>
                                                                        <th>EU</th>
                                                                        <th>Japan </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>X</td>
                                                                        <td>34</td>
                                                                        <td>34</td>
                                                                        <td>44</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>S</td>
                                                                        <td>36</td>
                                                                        <td>36</td>
                                                                        <td>46</td>
                                                                        <td>S</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M</td>
                                                                        <td>38</td>
                                                                        <td>38</td>
                                                                        <td>48</td>
                                                                        <td>M</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>L</td>
                                                                        <td>40</td>
                                                                        <td>40</td>
                                                                        <td>50</td>
                                                                        <td>L</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XL</td>
                                                                        <td>42</td>
                                                                        <td>42</td>
                                                                        <td>52</td>
                                                                        <td>XL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXL</td>
                                                                        <td>44</td>
                                                                        <td>44</td>
                                                                        <td>54</td>
                                                                        <td>XXL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXXL</td>
                                                                        <td>46</td>
                                                                        <td>46</td>
                                                                        <td>56</td>
                                                                        <td>XXXL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="sports-tab">
                                                <div class="accordion" id="accordionMeasurements5">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="measurementsbtn5">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#measurementsFive" aria-expanded="true" >
                                                        Measurements
                                                        </button>
                                                    </h2>
                                                    <div id="measurementsFive" class="accordion-collapse collapse show" aria-labelledby="measurementsbtn5" data-bs-parent="#accordionMeasurements5">
                                                        <div class="accordion-body">
                                                            <div class="product-measurements-content">
                                                            <div class="product-measurements-top d-flex align-items-center justify-content-between mb-20">
                                                                <h3 class="product-measurements-title">Size charts Outerwear</h3>
                                                                <div class="product-measurements-cm">
                                                                    <ul class="nav nav-tabs" id="prooductCmTab5" role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link active" id="inch-tab-5" data-bs-toggle="tab" data-bs-target="#inch5" type="button" role="tab" aria-selected="true">inch</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                        <button class="nav-link" id="cm-tab-5" data-bs-toggle="tab" data-bs-target="#cm5" type="button" role="tab" aria-selected="true">cm</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="tab-content" id="productCmContent5">
                                                                <div class="tab-pane fade show active" id="inch5" role="tabpanel" aria-labelledby="inch-tab-5">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade" id="cm5" role="tabpanel" aria-labelledby="cm-tab-5">
                                                                    <div class="product-size-table">
                                                                        <table class="table text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Size (US)</th>
                                                                                <th>Chest</th>
                                                                                <th>Neck</th>
                                                                                <th>Waist</th>
                                                                                <th>Arm Length</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X</td>
                                                                                <td>32-34</td>
                                                                                <td>13-13.5 </td>
                                                                                <td>26-28</td>
                                                                                <td>31-32</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>S</td>
                                                                                <td>35-37</td>
                                                                                <td>14-14.5</td>
                                                                                <td>29-31</td>
                                                                                <td>32-33</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>M</td>
                                                                                <td>38-40</td>
                                                                                <td>15-15.5</td>
                                                                                <td>32-34</td>
                                                                                <td>33-34</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>L</td>
                                                                                <td>41-43</td>
                                                                                <td>16-16.5</td>
                                                                                <td>35-37</td>
                                                                                <td>34-35</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XL</td>
                                                                                <td>44-46</td>
                                                                                <td>17-17.5</td>
                                                                                <td>38-40</td>
                                                                                <td>35-36</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXL</td>
                                                                                <td>47-49</td>
                                                                                <td> 18-18.5</td>
                                                                                <td>41-43</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>XXXL</td>
                                                                                <td>50-52</td>
                                                                                <td>18-18.5</td>
                                                                                <td>44-45</td>
                                                                                <td>36-37</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="guidebtn5">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#guideFive" aria-expanded="true" aria-controls="guideFive">
                                                        Measuring Guide
                                                        </button>
                                                    </h2>
                                                    <div id="guideFive" class="accordion-collapse collapse " aria-labelledby="guidebtn5" data-bs-parent="#accordionMeasurements5">
                                                        <div class="accordion-body">
                                                            <div class="product-guide d-md-flex align-items-center">
                                                            <div class="product-guide-thumb mr-30">
                                                                <img src={measurement_guide} alt="" />
                                                            </div>
                                                            <div class="product-guide-content">
                                                                <div class="chest mb-25">
                                                                    <h3>Chest</h3>
                                                                    <p>Measure under your arms around the fullest part of your chest.</p>
                                                                </div>
                                                                <div class="arm mb-25">
                                                                    <h3>Arm Length</h3>
                                                                    <p>Bend your elbow 90 degrees and place your hand on your hip. Hold the tape at the center back of your neck. Measure across your shoulder to your elbow and down to your wrist. The total length is your arm length.</p>
                                                                </div>
                                                                <div class="neck mb-25">
                                                                    <h3>Neck</h3>
                                                                    <p>Measure around the middle of your neck (at the Adam’s apple), keeping tape a bit loose.</p>
                                                                </div>
                                                                <div class="waist">
                                                                    <h3>Waist</h3>
                                                                    <p>Measure around your natural waistline, keeping the tape a bit loose.</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="sizeConversionbtn5">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sizeConversionFive" aria-expanded="true">
                                                        Size Conversions
                                                        </button>
                                                    </h2>
                                                    <div id="sizeConversionFive" class="accordion-collapse collapse " aria-labelledby="sizeConversionbtn5" data-bs-parent="#accordionMeasurements5">
                                                        <div class="accordion-body">
                                                            <div class="product-size-table product-size-table-2">
                                                            <p>All conversions are approximate. Fits may vary by style or personal preference; sizes may vary by manufacturer.</p>
                                                            <table class="table text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Size (US)</th>
                                                                        <th>Numeric Size (US)</th>
                                                                        <th>UK</th>
                                                                        <th>EU</th>
                                                                        <th>Japan </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>X</td>
                                                                        <td>34</td>
                                                                        <td>34</td>
                                                                        <td>44</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>S</td>
                                                                        <td>36</td>
                                                                        <td>36</td>
                                                                        <td>46</td>
                                                                        <td>S</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M</td>
                                                                        <td>38</td>
                                                                        <td>38</td>
                                                                        <td>48</td>
                                                                        <td>M</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>L</td>
                                                                        <td>40</td>
                                                                        <td>40</td>
                                                                        <td>50</td>
                                                                        <td>L</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XL</td>
                                                                        <td>42</td>
                                                                        <td>42</td>
                                                                        <td>52</td>
                                                                        <td>XL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXL</td>
                                                                        <td>44</td>
                                                                        <td>44</td>
                                                                        <td>54</td>
                                                                        <td>XXL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>XXXL</td>
                                                                        <td>46</td>
                                                                        <td>46</td>
                                                                        <td>56</td>
                                                                        <td>XXXL</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product__details-sizetab-bottom pt-35">
                                        <div class="attention mb-20">
                                            <p><span>Attention:</span> This guide provides general sizing information only, and fit can vary depending on style and brand. For more specific sizing information on the product, please refer to product description.</p>
                                        </div>
                                        <div class="note">
                                            <h3>Note :</h3>
                                            <ul>
                                                <li>
                                                All puik models are wearing size small in tops and dresses, and size 1, 3, or 5 in jeans depending on their body type.
                                                </li>
                                                <li>
                                                Most kalles jeans & dresses have some stretch, please refer to product description for fabric details.
                                                </li>
                                                <li>
                                                Most kalles bottoms have an inseam of 31-34” depending on the cut and style. Sizing may vary depending on cut and style.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
                {/* <script type="text/javascript">
                    $('document').ready(function (){
                        $('.liactive').click(function (){
                            $('.liactive').removeClass('active');
                            $(this).addClass('active');
                        })
                    });
                </script> */}

              </Fragment>
          {/* )} */}
      </Fragment>
  )
}

export default ProductDetails