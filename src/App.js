import './App.css';
// import Header from "./component/layout/Header/Header.js";
// import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect, useState, useMemo, useLayoutEffect } from "react";
import Home from "./component/Home/Home.jsx";
import Profile from "./component/profile/Profile.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Checkout from "./component/Checkout/Checkout.jsx";
import Error from "./component/Error/Error.jsx";
import Faq from "./component/Faq/Faq.jsx";
import ShippingPolicy from "./component/ShippingPolicy/ShippingPolicy.jsx";
import ReturnsRefunds from "./component/ReturnsRefunds/ReturnsRefunds.jsx";
import PaymentMethod from "./component/PaymentMethod/PaymentMethod.jsx";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "./component/TermsConditions/TermsConditions.jsx";
import axios from "axios";
import Shop from "./component/Shop/Shop.jsx";
import Shop_category from "./component/Shop/Shop2.jsx";
import Signin from "./component/SignIn/SignIn.jsx";
import Signup from "./component/SignUp/SignUp.jsx";
import Login from "./component/Login/Login.jsx";
import Search from './component/Search/Search.jsx';
import ProductDetails from "./component/Product/ProductDetails.js";
import Footer from './component/layout/Footer/Footer.js'
import store from "./store.js"
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions';
import { useSelector, useDispatch } from "react-redux";
import UpdateProfile from './component/profile/UpdateProfile';
import Shipping from './component/Shipping/Shipping.jsx';
import UpdatePassword from './component/profile/UpdatePassword.jsx';
import ForgotPassword from './component/profile/ForgotPassword.jsx';
import ResetPassword from './component/profile/ResetPassword.jsx';
import ConfirmOrder from './component/Shipping/ConfirmOrder.jsx';
import ConfirmPayment from './component/payment/ConfirmPayment.jsx';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import ProductList from "./component/admin/ProductList.jsx"
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from "./component/admin/UpdateProduct.jsx";
import OrderList from "./component/admin/OrderList.jsx";
import ProcessOrder from "./component/admin/ProcessOrder.jsx";
import UsersList from "./component/admin/UsersList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx"
import ProductReviews from "./component/admin/ProductReviews.jsx"
// import { useNavigate } from "react-router-dom";

import { logout } from "./actions/userAction";

import  { getProduct } from "../src/actions/productAction";
import { useCallback } from 'react'

// import ProtectedRoute from './component/Route/ProtectedRoute';
// import ProductDetails from "./component/Product/ProductDetails";

// NIZAR CODE
import $ from "jquery";
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './assets/css/slick.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/nice-select.css';
import './assets/css/ui-range-slider.css';
import './assets/css/main.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/popper.js/dist/popper.min.js';

import bravelogo from "./assets/img/logo/logo-black.png";
import menu_bannerwomen from "./assets/img/banner/menu/banner-women.jpg";
import menu_bannermen from "./assets/img/banner/menu/banner-men.jpg";
import products_1 from "./assets/img/products/product-1.jpg";
import products_2 from "./assets/img/products/product-2.jpg";
import products_3 from "./assets/img/products/product-3.jpg";

import ProtectedRoute from "./utils/protectedRoute";

import http from './interceptor/httpservice'

function App() {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    let isLoggedInn = false;
    let userDetails = JSON.parse(localStorage.getItem('User'));
    if(userDetails){
        isLoggedInn = true;
    }else{
        isLoggedInn = false;
    }
    
    useLayoutEffect(()=>{
        ProductData(); //Doesn't want until render is completed 
    }, [])
    
    const { cartItems } = useSelector((state) => state.cart);
    const [userInformation, updateUserInfo] = useState();
    const [userInformation2, updateUserInfo2] = useState();

    // let manProduct = [];
    // let womanProduct = [];
    // const { userIfo } = loadUser();

    function logoutUser() {
        dispatch(logout()).then(()=>{
            // alert(this.props.value)
            // navigate("/Signup");
            window.location.reload();
         })
        
    }
    

    const {isAuthenticated, user} = useSelector((state)=> state.user);
    const { loading, products } = useSelector(state => state.products);
    const [stripeApiKey, setStripeApiKey] = useState("");

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const[manProduct, setManProduct] = useState([]);
    const[womanProduct, setWomanProduct] = useState([]);

    async function getStripeApiKey() {
        const { data } = await http.get("/api/v1/stripeapikey");

        setStripeApiKey(data.stripeApiKey);
    }

    function goToAdmin(){
        console.log('User deatil--->',isAuthenticated,userInformation);

        if(userInformation){
            if(userInformation.user.role === 'admin'){
                // navigate("/admin/dashboard");
            }
            else{
                // navigate("/Signup");
            }
        }else{
            // navigate("/Signup");
        }
    }

    // const { userInformation3 } = dispatch(loadUser());

    const fetchUserData = () => {
        fetch("http://localhost:4000/api/v1/me")
          .then(response => {
            // console.log('fetchUserData',response);
            // console.log('fetchUserData',response.json());
            return response.json()
          })
          .then(data => {
            updateUserInfo(data);
            if(data.user.role === 'admin'){
                // navigate("/admin/dashboard");
                setIsAdminLoggedIn(true);
            }
          })
        // const { userInformation2 } = await http.get(`/api/v1/me`);
      }

    const ProductData = () => {
        fetch("http://localhost:4000/api/v1/products?keyword=")
          .then(response => {
            // console.log('fetchUserData',response);
            // console.log('fetchUserData',response.json());
            return response.json()
          })
          .then(data => {
            console.log('Product Data--->',data);
                let tempManProductArray = [];
                let tempWomanProductArray = [];
                let tempManCategoryArray = [];
                let tempWomanCategoryArray = [];
                if(data){
                    for(let i = 0; i< data.products.length; i++){
                        if(data.products[i].gender === 'Man' && !tempManCategoryArray.includes(data.products[i].category)){
                            tempManProductArray.push(data.products[i]);
                            tempManCategoryArray.push(data.products[i].category);
                        }
                        if(data.products[i].gender === 'Woman' && !tempWomanCategoryArray.includes(data.products[i].category)){
                            tempWomanProductArray.push(data.products[i]);
                            tempWomanCategoryArray.push(data.products[i].category);
                        }
                    }
                    console.log('tempManProductArray',tempManProductArray);
                    console.log('tempWomanProductArray',tempWomanProductArray);
                }
                setManProduct(tempManProductArray);
                setWomanProduct(tempWomanProductArray);
                // setManProduct(new Set (...tempManProductArray));
                // setWomanProduct(new Set (...tempWomanProductArray));
                // debugger;
                // manProduct = new Set (...tempManProductArray);
                // womanProduct = new Set (...tempWomanProductArray);
            // updateUserInfo(data);
            // if(data.user.role === 'admin'){
            //     // navigate("/admin/dashboard");
            //     setIsAdminLoggedIn(true);
            // }
          })
        // const { userInformation2 } = await http.get(`/api/v1/me`);
      }

    

    useEffect(() => {
        fetchUserData();
    },[])

    // useEffect(() => {
    //     ProductData();
    // },[])

    

    

    // function getCategory(){
    //     let tempManProductArray = [];
    //     let tempWomanProductArray = [];
    //     if(products){
    //         for(let i = 0; i< products.length; i++){
    //             if(products[i].gender === 'Man'){
    //                 tempManProductArray.push(products[i].category);
    //             }
    //             if(products[i].gender === 'Woman'){
    //                 tempWomanProductArray.push(products[i].category);
    //             }
    //         }
    //     }
    //     manProduct = new Set (...tempManProductArray);
    //     womanProduct = new Set (...tempWomanProductArray);

    // }

    // const getCategory = useCallback((manProduct,womanProduct) => {
    //     let tempManProductArray = [];
    //     let tempWomanProductArray = [];
    //     if(products){
    //         for(let i = 0; i< products.length; i++){
    //             if(products[i].gender === 'Man'){
    //                 tempManProductArray.push(products[i].category);
    //             }
    //             if(products[i].gender === 'Woman'){
    //                 tempWomanProductArray.push(products[i].category);
    //             }
    //         }
    //     }
    //     manProduct = new Set (...tempManProductArray);
    //     womanProduct = new Set (...tempWomanProductArray);
    //   }, [products]);

    //   useEffect(() => {
    //     dispatch(getProduct());
    // },[dispatch])

    // useEffect(() => {
    //     getCategory();
    // },[getCategory])

    // getCategory();

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
      
        // SCROLL HEADER STICKY
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $("#header-sticky").removeClass("sticky");
            } else {
                $("#header-sticky").addClass("sticky");
            }
        });
        // SCROLL HEADER STICKY
      
        // SEARCH TOGGLE START
        $(".search-toggle").on("click", function () {
            $(".search__area").addClass("search-active");
        });
        $(".search-close-btn").on("click", function () {
            $(".search__area").removeClass("search-active");
        });
        // SEARCH TOGGLE END

        // Show Login Toggle Js
        $('#showlogin').on('click', function () {
            $('#checkout-login').slideToggle(900);
        });

        ////////////////////////////////////////////////////
        // Show Coupon Toggle Js
        $('#showcoupon').on('click', function () {
            $('#checkout_coupon').slideToggle(900);
        });


        // SCROLL TO TOP
        var btn = $('#scroll_to_top');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
        // SCROLL TO TOP


        // MEANMENU
        (function ($) {
            "use strict";
            $.fn.meanmenu = function (options) {
                var defaults = {
                    meanMenuTarget: $(this), // Target the current HTML markup you wish to replace
                    meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
                    meanMenuClose: "X", // single character you want to represent the close menu button
                    meanMenuCloseSize: "18px", // set font size of close button
                    meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
                    meanRevealPosition: "right", // left right or center positions
                    meanRevealPositionDistance: "0", // Tweak the position of the menu
                    meanRevealColour: "", // override CSS colours for the reveal background
                    meanScreenWidth: "480", // set the screen width you want meanmenu to kick in at
                    meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
                    meanShowChildren: true, // true to show children in the menu, false to hide them
                    meanExpandableChildren: true, // true to allow expand/collapse children
                    meanExpand: "+", // single character you want to represent the expand for ULs
                    meanContract: "-", // single character you want to represent the contract for ULs
                    meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
                    onePage: false, // set to true for one page sites
                    meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
                    removeElements: "" // set to hide page elements
                };
                options = $.extend(defaults, options);
    
                // get browser width
                var currentWidth = window.innerWidth || document.documentElement.clientWidth;
    
                return this.each(function () {
                    var meanMenu = options.meanMenuTarget;
                    var meanContainer = options.meanMenuContainer;
                    var meanMenuClose = options.meanMenuClose;
                    var meanMenuCloseSize = options.meanMenuCloseSize;
                    var meanMenuOpen = options.meanMenuOpen;
                    var meanRevealPosition = options.meanRevealPosition;
                    var meanRevealPositionDistance = options.meanRevealPositionDistance;
                    var meanRevealColour = options.meanRevealColour;
                    var meanScreenWidth = options.meanScreenWidth;
                    var meanNavPush = options.meanNavPush;
                    var meanRevealClass = ".meanmenu-reveal";
                    var meanShowChildren = options.meanShowChildren;
                    var meanExpandableChildren = options.meanExpandableChildren;
                    var meanExpand = options.meanExpand;
                    var meanContract = options.meanContract;
                    var meanRemoveAttrs = options.meanRemoveAttrs;
                    var onePage = options.onePage;
                    var meanDisplay = options.meanDisplay;
                    var removeElements = options.removeElements;

                    //detect known mobile/tablet usage
                    var isMobile = false;
                    if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ) {
                        isMobile = true;
                    }

                    if ( (navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i)) ) {
                        // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
                        $('html').css("overflow-y" , "scroll");
                    }

                    var meanRevealPos = "";
                    var meanCentered = function() {
                        if (meanRevealPosition === "center") {
                            var newWidth = window.innerWidth || document.documentElement.clientWidth;
                            var meanCenter = ( (newWidth/2)-22 )+"px";
                            meanRevealPos = "left:" + meanCenter + ";right:auto;";

                            if (!isMobile) {
                                $('.meanmenu-reveal').css("left",meanCenter);
                            } else {
                                $('.meanmenu-reveal').animate({
                                    left: meanCenter
                                });
                            }
                        }
                    };

                    var menuOn = false;
                    var meanMenuExist = false;

                    if (meanRevealPosition === "right") {
                        meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
                    }
                    if (meanRevealPosition === "left") {
                        meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
                    }
                    // run center function
                    meanCentered();

                    // set all styles for mean-reveal
                    var $navreveal = "";

                    var meanInner = function() {
                        // get last class name
                        if ($($navreveal).is(".meanmenu-reveal.meanclose")) {
                            $navreveal.html(meanMenuClose);
                        } else {
                            $navreveal.html(meanMenuOpen);
                        }
                    };

                    // re-instate original nav (and call this on window.width functions)
                    var meanOriginal = function() {
                        $('.mean-bar,.mean-push').remove();
                        $(meanContainer).removeClass("mean-container");
                        $(meanMenu).css('display', meanDisplay);
                        menuOn = false;
                        meanMenuExist = false;
                        $(removeElements).removeClass('mean-remove');
                    };

                    // navigation reveal
                    var showMeanMenu = function() {
                        var meanStyles = "background:"+meanRevealColour+";color:"+meanRevealColour+";"+meanRevealPos;
                        if (currentWidth <= meanScreenWidth) {
                            $(removeElements).addClass('mean-remove');
                            meanMenuExist = true;
                            // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
                            $(meanContainer).addClass("mean-container");
                            $('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');

                            //push meanMenu navigation into .mean-nav
                            var meanMenuContents = $(meanMenu).html();
                            $('.mean-nav').html(meanMenuContents);

                            // remove all classes from EVERYTHING inside meanmenu nav
                            if(meanRemoveAttrs) {
                                $('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
                                    // First check if this has mean-remove class
                                    if ($(this).is('.mean-remove')) {
                                        $(this).attr('class', 'mean-remove');
                                    } else {
                                        $(this).removeAttr("class");
                                    }
                                    $(this).removeAttr("id");
                                });
                            }

                            // push in a holder div (this can be used if removal of nav is causing layout issues)
                            $(meanMenu).before('<div class="mean-push" />');
                            $('.mean-push').css("margin-top",meanNavPush);

                            // hide current navigation and reveal mean nav link
                            $(meanMenu).hide();
                            $(".meanmenu-reveal").show();

                            // turn 'X' on or off
                            $(meanRevealClass).html(meanMenuOpen);
                            $navreveal = $(meanRevealClass);

                            //hide mean-nav ul
                            $('.mean-nav ul').hide();

                            // hide sub nav
                            if(meanShowChildren) {
                                // allow expandable sub nav(s)
                                if(meanExpandableChildren){
                                    $('.mean-nav ul ul').each(function() {
                                        if($(this).children().length){
                                            $(this,'li:first').parent().append('<a class="mean-expand font-18px" href="#">'+ meanExpand +'</a>');
                                        }
                                    });
                                    $('.mean-expand').on("click",function(e){
                                        e.preventDefault();
                                            if ($(this).hasClass("mean-clicked")) {
                                                $(this).text(meanExpand);
                                            $(this).prev('ul').slideUp(300, function(){});
                                        } else {
                                            $(this).text(meanContract);
                                            $(this).prev('ul').slideDown(300, function(){});
                                        }
                                        $(this).toggleClass("mean-clicked");
                                    });
                                } else {
                                    $('.mean-nav ul ul').show();
                                }
                            } else {
                                $('.mean-nav ul ul').hide();
                            }

                            // add last class to tidy up borders
                            $('.mean-nav ul li').last().addClass('mean-last');
                            $navreveal.removeClass("meanclose");
                            $($navreveal).click(function(e){
                                e.preventDefault();
                                if( menuOn === false ) {
                                    $navreveal.css("text-align", "center");
                                    $navreveal.css("text-indent", "0");
                                    $navreveal.css("font-size", meanMenuCloseSize);
                                    $('.mean-nav ul:first').slideDown();
                                    menuOn = true;
                                } else {
                                    $('.mean-nav ul:first').slideUp();
                                    menuOn = false;
                                }
                                    $navreveal.toggleClass("meanclose");
                                    meanInner();
                                    $(removeElements).addClass('mean-remove');
                            });

                            // for one page websites, reset all variables...
                            if ( onePage ) {
                                $('.mean-nav ul > li > a:first-child').on( "click" , function () {
                                    $('.mean-nav ul:first').slideUp();
                                    menuOn = false;
                                    $($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                                });
                            }
                        } else {
                            meanOriginal();
                        }
                    };

                    if (!isMobile) {
                        // reset menu on resize above meanScreenWidth
                        $(window).resize(function () {
                            currentWidth = window.innerWidth || document.documentElement.clientWidth;
                            if (currentWidth > meanScreenWidth) {
                                meanOriginal();
                            } else {
                                meanOriginal();
                            }
                            if (currentWidth <= meanScreenWidth) {
                                showMeanMenu();
                                meanCentered();
                            } else {
                                meanOriginal();
                            }
                        });
                    }

                    $(window).resize(function () {
                        // get browser width
                        currentWidth = window.innerWidth || document.documentElement.clientWidth;

                        if (!isMobile) {
                            meanOriginal();
                            if (currentWidth <= meanScreenWidth) {
                                showMeanMenu();
                                meanCentered();
                            }
                        } else {
                            meanCentered();
                            if (currentWidth <= meanScreenWidth) {
                                if (meanMenuExist === false) {
                                    showMeanMenu();
                                }
                            } else {
                                meanOriginal();
                            }
                        }
                    });

                    // run main menuMenu function on load
                    showMeanMenu();
                });
            };
        })($);

        $(document).ready(function () {
            $("#mobile-menu").meanmenu({
                meanMenuContainer: ".mobile-menu",
                meanScreenWidth: "991",
            });
        });

        WebFont.load({
            google:{
                families:["Roboto", "Droid Sans", "chilanka"]
            }
        });
            store.dispatch(loadUser());
        // getStripeApiKey();
    },[])

  return (
    //Java Logic here
    <>
      {/* //html logic here */}
      {/*<UserOptions/>*/}
      <BrowserRouter>
      {/* <BrowserRouter> */}
          <header>
              <div class="header-area">
                  <div class="header-top pl-60 pr-60 d-none d-md-block">
                      <div class="row align-items-center">
                          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-4">
                              <div class="currency has-n-select display-none">
                                  <select name="currency" id="currency">
                                      <option value="USD">USD</option>
                                      <option value="BHD">BHD</option>
                                  </select>
                              </div>
                              <div class="language has-n-select display-none">
                                  <select name="language" id="language">
                                      <option value="english">English</option>
                                      <option value="arabic">Arabic</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-xxl-4 col-xl-4 d-none d-xl-block">
                                <p class="white-text center-text">Early Bird Offer, Get 15% Off On All Products. <a href='/shop' color='blue'> BUY NOW!!! </a></p>
                          </div>
                          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-8">
                              <div class="topbar-menu">
                                  {/* <ul class="end-text">
                                      <li><a href="/About">About Us</a></li>
                                      <li><a href="#">Newsletter</a></li>
                                      <li><a href="#">Contact Us</a></li>
                                      <li><a href="">FAQs</a></li>
                                  </ul> */}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="header-sticky" class="header-main header-main-2 header-padding-2 pl-60 pr-60 header-sticky header-sticky-white border-bottom-gray">
                      <div class="row align-items-center">
                          <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-4">
                              <div class="header-left">
                                  <div class="logo pr-55 d-inline-block">
                                      <a href="/"><img src={bravelogo} alt="#" /></a>
                                  </div>
                              </div> 
                          </div>
                          <div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                              <div class="main-menu p-rel d-flex align-items-center justify-content-center">
                                  <nav id="mobile-menu">
                                      <ul>
                                          <li><a href="/">Home</a></li>
                                          {/* <li class="static">
                                              <a href="/Shop">Shop <i class="icon-arrow-down"></i></a>
                                              <ul class="mega-menu mega-menu-2-col">
                                                  <li class="has-dropdown">
                                                      <a href="/Shop">MEN COLLECTION</a>
                                                      <ul class="has-dropdown">
                                                          <li><a href="/Shop">Shirts</a></li>
                                                          <li><a href="/Shop">Shorts</a></li>
                                                          <li><a href="/Shop">Gloves</a></li>
                                                          <li><a href="/Shop">Trouser</a></li>
                                                      </ul>
                                                  </li>
                                                  <li class="has-dropdown">
                                                      <a href="/Shop">WOMEN COLLECTION</a>
                                                      <ul class="has-dropdown">
                                                          <li><a href="/Shop">Shirts</a></li>
                                                          <li><a href="/Shop">Shorts</a></li>
                                                          <li><a href="/Shop">Gloves</a></li>
                                                          <li><a href="/Shop">Trouser</a></li>
                                                      </ul>
                                                  </li>
                                                  <li class="d-none d-xl-block">
                                                      <div class="menu-banner-wrapper p-rel">
                                                          <a class="w-img" href="/Shop">
                                                              <img src={menu_bannermen} alt="" />
                                                          </a>
                                                          <a href="/Shop" class="menu-banner-btn">men</a>
                                                      </div>
                                                  </li>
                                                  <li class="d-none d-lg-block">
                                                      <div class="menu-banner-wrapper p-rel">
                                                          <a class="w-img" href="/Shop">
                                                              <img src={menu_bannerwomen} alt="" />
                                                          </a>
                                                          <a href="/Shop" class="menu-banner-btn">women</a>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </li> */}
                                          <li class="static">
                                              <a href="/Shop">Shop <i class="icon-arrow-down"></i></a>
                                              <ul class="mega-menu mega-menu-2-col">
                                                  <li class="has-dropdown">
                                                      <a href="/Shop">MEN COLLECTION</a>
                                                      <ul class="has-dropdown">
                                                          {/* <li><a href="/Shop">Shirts</a></li>
                                                          <li><a href="/Shop">Shorts</a></li>
                                                          <li><a href="/Shop">Gloves</a></li>
                                                          <li><a href="/Shop">Trouser</a></li> */}
                                                          {manProduct && manProduct?.map((cat,index) => (
                                                            (<li key={index}><a href={`/Shop_category?category=${cat.category}&gender=${cat.gender}`}>{cat.category}</a></li>)
                                                        ))}
                                                      </ul>
                                                  </li>
                                                  <li class="has-dropdown">
                                                      <a href="/Shop">WOMEN COLLECTION</a>
                                                      <ul class="has-dropdown">
                                                          {/* <li><a href="/Shop">Shirts</a></li>
                                                          <li><a href="/Shop">Shorts</a></li>
                                                          <li><a href="/Shop">Gloves</a></li>
                                                          <li><a href="/Shop">Trouser</a></li> */}
                                                          {womanProduct && womanProduct?.map((cat,index) => (
                                                            (<li key={index}><a href={`/Shop_category?category=${cat.category}&gender=${cat.gender}`}>{cat.category}</a></li>)
                                                        ))}
                                                      </ul>
                                                  </li>
                                                  <li class="d-none d-xl-block">
                                                      <div class="menu-banner-wrapper p-rel">
                                                          <a class="w-img" href="/Shop">
                                                              <img src={menu_bannermen} alt="" />
                                                          </a>
                                                          <a href={`/Shop_category?gender=Man`} class="menu-banner-btn">men</a>
                                                      </div>
                                                  </li>
                                                  <li class="d-none d-lg-block">
                                                      <div class="menu-banner-wrapper p-rel">
                                                          <a class="w-img" href="/Shop">
                                                              <img src={menu_bannerwomen} alt="" />
                                                          </a>
                                                          <a href={`/Shop_category?gender=Woman`} class="menu-banner-btn">women</a>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><a href="/About">About Us</a></li>
                                          <li><a href="/Contact">Contact Us</a></li>
                                          <li><a href="/orders">My Orders</a></li>
                                          {/* <li><a href="/admin/dashboard">Admin</a></li> */}
                                          {/* {isAdminLoggedIn ? (
                                                <li><a href="/admin/dashboard">Admin</a></li>
                                            ) :
                                            (
                                                <li><a href="/Login">Admin</a></li>
                                            )} */}
                                            {isAdminLoggedIn ? (
                                                <li><a href="/admin/dashboard">Admin</a></li>
                                            ) :
                                            (
                                                <span></span>
                                            )}
                                          {/* <li><a href="#" onClick={() => goToAdmin()}>Admin</a></li> */}
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                          <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-6 col-8">
                              <div class="header-right-wrapper d-flex align-items-center justify-content-end">
                                  <div class="header-right header-right-2 d-flex align-items-center justify-content-end">
                                        {!isLoggedInn? (
                                        <a href="/Login" class="d-none d-xxl-inline-block">Login / Register</a>
                                        ) : (
                                        <a href="/profile" class="d-none d-xxl-inline-block mr-10">
                                            <i class="fa fa-user-edit"></i>
                                            &nbsp;Profile
                                        </a>
                                        )}
                                        {!isLoggedInn? (
                                            <span></span>
                                        ) : (
                                            <a onClick={logoutUser} class="d-none d-xxl-inline-block cursor-pointer">
                                                <i class="fa fa-sign-out"></i>
                                                &nbsp;Logout
                                            </a>
                                        )}
                                        <div class="header-icon header-icon-2 d-inline-block ml-30">
                                            <a href="javascript:void(0)" class="search-toggle"><i class="fal fa-search"></i></a>
                                            <button class="d-none" type="button" data-bs-toggle="modal" data-bs-target="#cartMiniModal">
                                                <i class="fal fa-shopping-cart"></i><span>2</span>
                                            </button>
                                            <a href="/Cart" class="">
                                                <i class="fal fa-shopping-cart"></i><span>{cartItems.length}</span>
                                            </a>
                                        </div>
                                  </div>
                                  <div class="header-bar ml-20 d-lg-none">
                                      <button type="button" class="header-bar-btn header-bar-btn-black" data-bs-toggle="modal" data-bs-target="#offCanvasModal">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
        

            <div class="cartmini__area">
                <div class="modal fade" id="cartMiniModal" tabindex="-1" aria-labelledby="cartMiniModal" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="cartmini__wrapper">
                            <div class="cartmini__top d-flex align-items-center justify-content-between">
                                <h4>Your Cart</h4>
                                <div class="cartminit__close">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#cartMiniModal" class="cartmini__close-btn"> <i class="fal fa-times"></i></button>
                                </div>
                            </div>
                            <div class="cartmini__list">
                                <ul>
                                    <li class="cartmini__item p-rel d-flex align-items-start">
                                        <div class="cartmini__thumb mr-15">
                                            <a href="/ProductDetails">
                                                <img src={products_1} alt=""></img>
                                            </a>
                                        </div>
                                        <div class="cartmini__content">
                                            <h3 class="cartmini__title">
                                                <a href="/ProductDetails">Form Armchair Walnut Base</a>
                                            </h3>
                                            <span class="cartmini__price">
                                                <span class="price">1 × $70.00</span>
                                            </span>
                                        </div>
                                        <a href="#" class="cartmini__remove">
                                            <i class="fal fa-times"></i>
                                        </a>
                                    </li>
                                    <li class="cartmini__item p-rel d-flex align-items-start">
                                        <div class="cartmini__thumb mr-15">
                                            <a href="/ProductDetails">
                                                <img src={products_2} alt=""></img>
                                            </a>
                                        </div>
                                        <div class="cartmini__content">
                                            <h3 class="cartmini__title">
                                                <a href="/ProductDetails">Form Armchair Simon Legald</a>
                                            </h3>
                                            <span class="cartmini__price">
                                                <span class="price">1 × $95.99</span>
                                            </span>
                                        </div>
                                        <a href="#" class="cartmini__remove">
                                            <i class="fal fa-times"></i>
                                        </a>
                                    </li>
                                    <li class="cartmini__item p-rel d-flex align-items-start">
                                        <div class="cartmini__thumb mr-15">
                                            <a href="/ProductDetails">
                                                <img src={products_3} alt=""></img>
                                            </a>
                                        </div>
                                        <div class="cartmini__content">
                                            <h3 class="cartmini__title">
                                                <a href="/ProductDetails">Antique Chinese Armchairs</a>
                                            </h3>
                                            <span class="cartmini__price">
                                                <span class="price">1 × $120.00</span>
                                            </span>
                                        </div>
                                        <a href="#" class="cartmini__remove">
                                            <i class="fal fa-times"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="cartmini__total d-flex align-items-center justify-content-between">
                                <h5>Total</h5>
                                <span>$180.00</span>
                            </div>
                            <div class="cartmini__bottom">
                                <a href="/Cart" class="s-btn w-100 mb-20">view cart</a>
                                <a href="/" class="s-btn s-btn-2 w-100">checkout</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div class="search__area">
                <div class="search__close">
                    <button type="button" class="search__close-btn search-close-btn"><i class="fal fa-times"></i></button>
                </div>
                <div class="search__wrapper">
                    <h4>Searching</h4>
                    <div class="search__form">
                        <form action="#">
                            <div class="search__input">
                                <input type="text" placeholder="Search Products"></input>
                                <button type="submit">
                                    <i class="far fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <section class="offcanvas__area">
                <div class="modal fade" id="offCanvasModal" tabindex="-1" aria-labelledby="offCanvasModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="offcanvas__wrapper">
                                <div class="offcanvas__top d-flex align-items-center mb-10 justify-content-between">
                                    <div class="logo">
                                        <a href="/">
                                        <img src={bravelogo} alt="logo" />
                                        </a>
                                    </div>
                                    <div class="offcanvas__close">
                                        <button class="offcanvas__close-btn" data-bs-toggle="modal" data-bs-target="#offCanvasModal">
                                            <svg viewBox="0 0 22 22">
                                                <path d="M12.41,11l5.29-5.29c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L11,9.59L5.71,4.29c-0.39-0.39-1.02-0.39-1.41,0
                                                s-0.39,1.02,0,1.41L9.59,11l-5.29,5.29c-0.39,0.39-0.39,1.02,0,1.41C4.49,17.9,4.74,18,5,18s0.51-0.1,0.71-0.29L11,12.41l5.29,5.29
                                                C16.49,17.9,16.74,18,17,18s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L12.41,11z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="offcanvas__content p-relative z-index-1">
                                    <div class="canvas__menu fix ">
                                        <div class="mobile-menu"></div>
                                    </div>
                                    <div class="offcanvas__action mb-15">
                                        {!isAuthenticated? (
                                        <a href="/Login">Login</a>
                                        ) : (
                                        <a href="/profile" class="d-block">
                                            <i class="fa fa-user-edit"></i>
                                            &nbsp;Profile
                                        </a>
                                        )}
                                        {!isAuthenticated? (
                                            <span></span>
                                        ) : (
                                            <a onClick={logoutUser} class="d-xxl-inline-block cursor-pointer">
                                                <i class="fa fa-sign-out"></i>
                                                &nbsp;Logout
                                            </a>
                                        )}
                                    </div>
                                    <div class="offcanvas__action mb-15 d-sm-block">
                                        <a href="/Cart" class="has-tag">
                                            <i class="far fa-shopping-bag"></i>
                                            <span class="tag">{cartItems.length}</span>
                                        </a>
                                    </div>
                                    <div class="offcanvas__social mt-15">
                                        <ul>
                                            <li>
                                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fab fa-instagram"></i></a>
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
                
            </section>

            <a id="scroll_to_top"></a>


        {/*
        <div>
          <ul class="navbar">
            <li> <Link to="/">Home</Link>&nbsp;</li>
            <li> <Link to="/About">About</Link>&nbsp;</li>
            <li> <Link to="/orders">My Orders</Link>&nbsp;</li>
            <li><Link to="/Shop">Shop</Link>&nbsp;</li>
            <li><Link to="/Cart">Cart</Link>&nbsp;</li>
            <li><Link to="/profile">Profile</Link>&nbsp;</li>
            <li><Link to="/Signup">Sign up</Link>&nbsp;</li>
            <li><Link to="/Signin">Login</Link>&nbsp;</li>
          </ul>
        </div>
        */}

        
        {/* <Home/> */}
        <Routes>
          <Route {...isAuthenticated && <UserOptions user={user} />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/orders" element={<MyOrders/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/admin/Signup" element={<Signin/>}></Route>
          <Route path="/success" element={<OrderSuccess />}></Route>
          {/* <Route path="/profile" element={<ProtectedRoute />}></Route> */}
          {/* <Route path='*' element={<HomePage />} />
          <Route path="/signup" element={<Signup register={registerHandler}></Signup>}></Route>
          <Route path="/signin" element={token !== null ? <HomePage></HomePage> : <Signin ></Signin>} /> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/order/:id" element={<OrderDetails />}></Route>
          <Route path="/me/update" element={<UpdateProfile />}></Route>
          <Route path="/password/update" element={<UpdatePassword />}></Route>
          <Route path='/order/confirm' element={<ConfirmOrder />}></Route>
          {/* <Route path='/process/payment' element={<ConfirmPayment />}></Route> */}
          {/* <Route path='/process/payment' element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ConfirmPayment/>
            </Elements>}>
          </Route> */}
          <Route path='/process/payment' element={
              <ConfirmPayment/>}>
          </Route>
          <Route path="/orders" element={<MyOrders />}></Route>
          {/* // {stripeApiKey && ( */}
          {/* //   <Elements stripe={loadStripe(stripeApiKey)}>
          // <Route path='/process/payment' element={<ConfirmPayment />}></Route>
          // </Elements>
          // )}  */}
          <Route path="/password/forgot" element={<ForgotPassword />}></Route>
          <Route path="/password/reset/:token" element={<ResetPassword />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/Shop_category" element={<Shop_category />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/shop/:keyword" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Error" element={<Error />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
          <Route path="/ShippingPolicy" element={<ShippingPolicy />}></Route>
          <Route path="/ReturnsRefunds" element={<ReturnsRefunds />}></Route>
          <Route path="/PaymentMethod" element={<PaymentMethod />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/TermsConditions" element={<TermsConditions />}></Route>

          {/* Admin Routes */}

          <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path='/admin/products' element={<ProtectedRoute><ProductList /></ProtectedRoute>}></Route>
          <Route path='/admin/createProduct' element={<ProtectedRoute><NewProduct /></ProtectedRoute>}></Route>
          <Route path='/admin/product/:id' element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>}></Route>
          <Route path='/admin/orders' element={<ProtectedRoute><OrderList /></ProtectedRoute>}></Route>
          <Route path='/admin/order/:id' element={<ProtectedRoute><ProcessOrder /></ProtectedRoute>}></Route>
          <Route path='/admin/users' element={<ProtectedRoute><UsersList /></ProtectedRoute>}></Route>
          <Route path='/admin/user/:id' element={<ProtectedRoute><UpdateUser /></ProtectedRoute>}></Route>
          <Route path='/admin/reviews' element={<ProtectedRoute><ProductReviews /></ProtectedRoute>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
