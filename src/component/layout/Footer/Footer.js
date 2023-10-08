import React from 'react';
import "./Footer.css";
import payment_image from "../../../assets/img/icon/payments-2.png";

const Footer = () => {
  return (
    <footer class="footer-area footer-1 black-bg pt-100  gray-bg-2 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="widget f-widget pb-30 wow fadeInUp" data-wow-delay=".4s">
                        <h5 class="f-widget-title white-color">Information</h5>
                        <ul>
                            <li><a href="/Shop">Shop</a></li>
                            <li><a href="/About">About Us</a></li>
                            <li><a href="/Login">Login</a></li>
                            <li><a href="/SignUp">Register</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="widget f-widget pb-30 wow fadeInUp" data-wow-delay=".6s">
                        <h5 class="f-widget-title white-color">Our Service</h5>
                        <ul>
                            
                            <li><a href="/TermsConditions">Terms & Conditions</a></li>
                            <li><a href="/ReturnsRefunds">Returns & Refunds</a></li>
                            <li><a href="/Contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="widget f-widget pb-30  wow fadeInUp" data-wow-delay=".8s">
                        <h5 class="f-widget-title white-color">Payment & Shipping</h5>
                        <ul>
                            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                            <li><a href="/ShippingPolicy">Shipping Policy</a></li>
                            <li><a href="/Faq">Help & Support</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="widget f-widget pb-30 wow fadeInUp" data-wow-delay="1s">
                        <h5 class="f-widget-title white-color">LOOKING FOR BRAVE Athleisure?</h5>
                        <address>
                            <ul>
                                <li>Road-2830, Block-428, Building-2304,</li>
                                <li>Office-71, 72, Seef, BAHRAIN</li>
                                <li>(+973) 1700 0038</li>
                                <li><a href="mailto:customerservices@braveathleisure.com">customerservices@braveathleisure.com</a></li>
                            </ul>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="copyright-text copyright-text-3 text-center pt-20">
                <div class="container">
                    <p>Working Hours: Sat-Thu: <span>9:00 am – 6:00 pm.</span>
                    <br/>
                        Copyright © BRAVE Athleisure Store all rights reserved. Powered by BRAVE Athleisure</p>
                    <img src={payment_image} alt="img" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer