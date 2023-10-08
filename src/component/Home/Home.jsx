import React, { Fragment, useEffect, useRef } from 'react';
import'./Home.css';
import Metadata from '../layout/Metadata';
import  { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
// import { CgMouse } from "react-icons/all";
// import { Card } from '@material-ui/core';
import ProductCard from './ProductCard.js';
import $ from "jquery";
import bravelogo from "../../assets/img/logo-black.png";
import home2_category_1 from "../../assets/img/category/home2/category-1.jpg";
import home2_category_2 from "../../assets/img/category/home2/category-2.jpg";
import home2_category_3 from "../../assets/img/category/home2/category-3.jpg";
import banner_banner_3 from "../../assets/img/banner/banner-3.jpg";
import banner_banner_4 from "../../assets/img/banner/banner-4.jpg";
import rash_guard_brave_blue_1 from "../../assets/img/products/rash_guard_brave_blue_1.png";
import rash_guard_brave_blue_2 from "../../assets/img/products/rash_guard_brave_blue_2.png";
import mma_gloves_brave from "../../assets/img/products/mma_gloves_brave.png";
import product_modal_1 from "../../assets/img/products/modal/product_modal_1.png";
import product_modal_2 from "../../assets/img/products/modal/product_modal_2.jpg";
import product_modal_sm_1 from "../../assets/img/products/modal/product_modal_sm_1.jpg";
import product_modal_sm_2 from "../../assets/img/products/modal/product_modal_sm_2.jpg";

const Home = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector(state => state.products);
    const listElement = useRef(null);

    useEffect(() => {
        var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide,8000);
        
        function nextSlide() {
            //slides[currentSlide].className = 'slide';
            //currentSlide = (currentSlide+1)%slides.length;
            //slides[currentSlide].className = 'slide showing';

            slides[currentSlide]?.classList.remove('showing');
            currentSlide = (currentSlide+1)%slides.length;
            slides[currentSlide]?.classList.add('showing');
        }
    });
    useEffect(() => {
        // if (error) {
        //   alert.error(error);
        //   dispatch(clearErrors());
        // }
        dispatch(getProduct());
    }, [dispatch,
    //  error, alert
    ]);

    // console.log(products)

  return (
    <Fragment>
    {loading ? (
        <Loader />
    ) : (
      <Fragment>
        <Metadata title="BRAVE Athleisure" />

        {/* This is Nizar Work Area */}

        <div>
            <main>
                <ul id="slides">
                    <li class="slide showing">
                        <div class="slider-area-rel">
                            <div class="slider-active dot-style dot-style-1 dot-bottom-center">
                                <div class=" single-slider-2 default-bg slider-height-2 d-flex align-items-center">
                                    <div class="container container-2">
                                        <div class="row align-items-center">
                                            <div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8 pt-215 pb-10">
                                                <div class="slider-content-2">
                                                    <span class="s-subtitle s-subtitle-3 pb-25" data-animation="fadeInUp" data-delay=".3s"> </span>
                                                    <h2 class="s-title s-title-2 pb-28" data-animation="fadeInUp" data-delay=".5s"></h2>
                                                    <p class="s-desc pb-75" data-animation="fadeInUp" data-delay=".7s">Form is designed by BRAVE Athleisure and is part of the Form series.</p>
                                                    <div class="p-btn p-btn-5" data-animation="fadeInUp" data-delay=".9s">
                                                        <a href="/Shop">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="slide">
                    <div class="slider-area-rel">
                            <div class="slider-active dot-style dot-style-1 dot-bottom-center">
                                <div class=" single-slider-2 default-bg slider-height-2 d-flex align-items-center">
                                    <div class="container container-2">
                                        <div class="row align-items-center">
                                            <div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8 pt-215 pb-10">
                                                <div class="slider-content-2">
                                                    <span class="s-subtitle s-subtitle-3 pb-25" data-animation="fadeInUp" data-delay=".3s"> </span>
                                                    <h2 class="s-title s-title-2 pb-28" data-animation="fadeInUp" data-delay=".5s"></h2>
                                                    <p class="s-desc pb-75" data-animation="fadeInUp" data-delay=".7s"></p>
                                                    <div class="p-btn p-btn-5" data-animation="fadeInUp" data-delay=".9s">
                                                        <a href="/Shop">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="slide">
                        <div class="slider-area-rel">
                            <div class="slider-active dot-style dot-style-1 dot-bottom-center">
                                <div class=" single-slider-2 default-bg slider-height-2 d-flex align-items-center">
                                    <div class="container container-2">
                                        <div class="row align-items-center">
                                            <div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8 pt-215 pb-10">
                                                <div class="slider-content-2">
                                                    <span class="s-subtitle s-subtitle-3 pb-25" data-animation="fadeInUp" data-delay=".3s"> </span>
                                                    <h2 class="s-title s-title-2 pb-28" data-animation="fadeInUp" data-delay=".5s"></h2>
                                                    <p class="s-desc pb-75" data-animation="fadeInUp" data-delay=".7s">Form is designed by BRAVE Athleisure and is part of the Form series.</p>
                                                    <div class="p-btn p-btn-5" data-animation="fadeInUp" data-delay=".9s">
                                                        <a href="/Shop">Discover now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                

                <div class="category-area fix mt-3-px pb-75">
                    <div class="row row-3">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
                            <a href="/Shop">
                                <div class="single-category mb-20 p-rel wow fadeInUp" data-wow-delay=".3s">
                                    <div class="cat-thumb fix">
                                        <img src={home2_category_1} alt="#" />
                                    </div>
                                    <div class="cat-content p-abs bottom-left">
                                        <h4 class="pb-15">Sleeves Styles</h4>
                                        <span class="cat-subtitle">More Products</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
                            <a href="/Shop">
                                <div class="single-category mb-20 p-rel wow fadeInUp" data-wow-delay=".3s">
                                    <div class="cat-thumb fix">
                                        <img src={home2_category_2} alt="#" />
                                    </div>
                                    <div class="cat-content p-abs bottom-left">
                                        <h4 class="pb-15">Gloves</h4>
                                        <span class="cat-subtitle">More Products</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
                            <a href="/Shop">
                                <div class="single-category mb-20 p-rel wow fadeInUp" data-wow-delay=".3s">
                                    <div class="cat-thumb fix">
                                        <img src={home2_category_3} alt="#" />
                                    </div>
                                    <div class="cat-content p-abs bottom-left">
                                        <h4 class="pb-15">Trouser Collections</h4>
                                        <span class="cat-subtitle">More Products</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="top-selling-area pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="section-title top-selling-title text-center pb-47">
                                    <span class="p-subtitle p-subtitle-2">Explore The Lookbook</span>
                                    <h3 class="p-title pb-15 mb-0">Top Selling Products</h3>
                                    <p class="p-desc">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row pb-20">
                          {products &&
                          products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                          ))}
                        </div>
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="btn-area text-center wow fadeInUp" data-wow-delay="1.2s">
                                    <div class="p-btn p-btn-1">
                                        <a href="/Shop">SHOW ALL PRODUCTS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="banner-area pb-95 d-none">
                    <div class="pl-15 pr-15">
                        <div class="row">
                            <div class="col-xxl-6 col-lg-6 col-md-6 ps-0">
                                <div class="single-banner single-banner-2 p-rel fix mb-30 mb-md-0 wow">
                                    <div class="thumb">
                                        <img src={banner_banner_3} class=" wow fadeInRight h-100"
                                            data-wow-delay=".10s" alt="#" />
                                    </div>
                                    <div class="banner-content banner-content-2 wow fadeInLeft" data-wow-delay=".10s">
                                        <span>For women products</span>
                                        <h4><a href="/Shop">Premium Travel Backpack</a></h4>
                                        <p>Price guarantee. Found it cheaper - we'll match</p>
                                        <div class="p-btn p-btn-2">
                                            <a href="/Shop">SHOP COLLECTION</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-lg-6 col-md-6 pe-0">
                                <div class="single-banner single-banner-2 p-rel fix wow fadeInRight" data-wow-delay=".15s">
                                    <div class="thumb ">
                                        <img src={banner_banner_4} class=" wow fadeInRLeft h-100"
                                            data-wow-delay=".10s" alt="#" />
                                    </div>
                                    <div class="banner-content banner-content-2  wow fadeInLeft" data-wow-delay=".15s">
                                        <span>TRENDING PRODUCTS</span>
                                        <h4><a href="/Shop">Lifestyle Accessories Parrot</a></h4>
                                        <p>Secure & encrypted checkout</p>
                                        <div class="p-btn p-btn-2">
                                            <a href="/Shop">SHOP COLLECTION</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="top-selling-area pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="section-title top-selling-title text-center pb-47">
                                    <span class="p-subtitle p-subtitle-2">Explore The Lookbook</span>
                                    <h3 class="p-title pb-15 mb-0">Top Selling Products</h3>
                                    <p class="p-desc">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row pb-20">
                            <a href="/ProductDetails" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".1s">
                                    <div class="product-thumb">
                                        <img src={rash_guard_brave_blue_1} alt="#"></img>
                                        <img src={rash_guard_brave_blue_2} alt="#"></img>
                                        <div class="cart-btn cart-btn-1 p-abs">
                                            <a href="#">Add to cart</a>
                                        </div>
                                        <span class="discount discount-2 p-abs d-none">New</span>
                                        <div class="product-action product-action-1 p-abs d-none">
                                            <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                <i class="fal fa-eye"></i>
                                                <i class="fal fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h4 class="pro-title pro-title-2"><a href="/ProductDetails">RASH GUARD "BRAVE"</a></h4>
                                        <div class="pro-price">
                                            <span>$223.00</span>
                                            <del>$64.00</del>
                                        </div>
                                        <div class="rating d-none">
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/ProductDetails" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".3s">
                                    <div class="product-thumb">
                                        <img src={mma_gloves_brave} alt="#"></img>
                                        <div class="cart-btn cart-btn-1 p-abs">
                                            <a href="#">Add to cart</a>
                                        </div>
                                        <div class="product-action product-action-1 p-abs d-none">
                                            <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                <i class="fal fa-eye"></i>
                                                <i class="fal fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h4 class="pro-title pro-title-2"><a href="/ProductDetails">MMA Gloves "BRAVE"</a></h4>
                                        <div class="pro-price">
                                            <span>$223.00</span>
                                            <del>$64.00</del>
                                        </div>
                                        <div class="rating d-none">
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/ProductDetails" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="product-thumb">
                                        <img src={rash_guard_brave_blue_1} alt="#"></img>
                                        <img src={rash_guard_brave_blue_2} alt="#"></img>
                                        <div class="cart-btn cart-btn-1 p-abs">
                                            <a href="#">Add to cart</a>
                                        </div>
                                        <span class="discount discount-2 p-abs d-none">32%</span>
                                        <div class="product-action product-action-1 p-abs d-none">
                                            <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal"> 
                                                <i class="fal fa-eye"></i>
                                                <i class="fal fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h4 class="pro-title pro-title-2"><a href="/ProductDetails">RASH GUARD "BRAVE"</a></h4>
                                        <div class="pro-price">
                                            <span>$223.00</span>
                                            <del>$64.00</del>
                                        </div>
                                        <div class="rating d-none">
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star active"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                            <i class="fal fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/ProductDetails" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".9s">
                                    <div class="product-thumb">
                                        <img src={mma_gloves_brave} alt="#"></img>
                                        <div class="cart-btn cart-btn-1 p-abs">
                                            <a href="#">Add to cart</a>
                                        </div>
                                        <div class="product-action product-action-1 p-abs d-none">
                                            <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                                                <i class="fal fa-eye"></i>
                                                <i class="fal fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h4 class="pro-title pro-title-2"><a href="/ProductDetails">MMA Gloves "BRAVE"</a></h4>
                                        <div class="pro-price">
                                            <span>$223.00</span>
                                            <del>$64.00</del>
                                        </div>
                                        <div class="rating d-none">
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
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="btn-area text-center wow fadeInUp" data-wow-delay="1.2s">
                                    <div class="p-btn p-btn-1">
                                        <a href="/Shop">SHOW ALL PRODUCTS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="subscribe-area subscribe-area-2 black-bg gray-bg-2 pt-95 d-none">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="section-title text-center">
                                    <span class="p-subtitle p-subtitle-2">OUR NEWSLETTER</span>
                                    <h3 class="p-title pb-15 mb-0">join our newsletter</h3>
                                    <p class="p-desc  pb-15">Subscribe to the Puik Store mailing list to receive updates on new
                                        arrivals, special offers<br/>
                                        and other discount information.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xxl-8 col-xl-8">
                                <div class="subscribe-form text-center">
                                    <form action="#">
                                        <input type="text" placeholder="Your email address..."></input>
                                        <button type="submit" class="subscribe-btn subscribe-btn-2">Subscribe</button>
                                    </form>
                                </div>
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
                                        <a href="/ProductDetails"></a>
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


                <div class="subscribe-popup d-none">
                    <div class="subscribe-wrapper s-popup-padding h-100">
                        <div class="pl-75 pr-75">
                            <div class="row">
                                <div class="col-xxl-6">
                                    <div class="subscribe-content">
                                        <div class="logo mb-65">
                                            <a href="/"><img src={bravelogo} alt="" /></a>
                                        </div>
                                        <h4 class="popup-title">Comming Soon</h4>
                                        <p class="popup-desc">We’ll be here soon with our new<br/> 
                                            awesome site, subscribe to be notified.</p>
                                        <div class="comming-countdown  pb-45">
                                            <div class="countdown-inner" data-countdown="" data-date="Mar 02 2024 20:20:22">
                                                <ul>
                                                    <li><span data-days="">401</span> Days</li>
                                                    <li><span data-hours="">1</span> hours</li>
                                                    <li><span data-minutes="">29</span> mins</li>
                                                    <li><span data-seconds="">40</span> secs</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="subscribe-form-2 mb-30">
                                            <input type="email" placeholder="Enter your email..."></input>
                                            <button class="p-btn border-0">Subscribe</button>
                                        </div>
                                        <div class="popup-social">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                            <a href="#"><i class="fal fa-basketball-ball"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subscribe-thumb"></div>
                </div>

            </main>

        </div>

        {/* This is Nizar Work Area */}

              
      </Fragment>
    )}
  </Fragment>
  );
}

export default Home;

