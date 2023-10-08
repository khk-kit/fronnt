import React from 'react';
import './About.css';
import bravelogo from "../../assets/img/logo-black.png";
import about_us_bg from "../../assets/img/about/about-us-bg.jpg";
import about_us_bg_1 from "../../assets/img/about/about-us-bg_1.jpg";
import about_img_2 from "../../assets/img/about/about-img-2.jpg";
import about_img_3 from "../../assets/img/about/about-img-3.jpg";
import about_img_4 from "../../assets/img/about/about-img-4.jpg";
import about_img_5 from "../../assets/img/about/about-img-5.jpg";
import about_signature from "../../assets/img/about/singature.png";
import icon_trophy from "../../assets/img/icon/trophy.png";
import icon_user from "../../assets/img/icon/user.png";
import icon_like from "../../assets/img/icon/like.png";
import icon_pen from "../../assets/img/icon/pen.png";
import icon_ship from "../../assets/img/icon/ship.png";

const About = () => {
    
  document.title = 'About Us | BRAVE Athleisure';

  return (
    
    <div>

      <main>

        <section class="page__title-area pt-80 pb-65">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-10">
                        <div class="page__title-wrapper text-center">
                            <span class="page__title-pre"></span>
                            <h3 class="page__title">About Us</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about__banner">
            <div class="container-fluid p-0">
                <div class="row gx-0">
                    <div class="col-xxl-12">
                        <div class="about__banner-thumb w-img">
                            <img src={about_us_bg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about__history pt-95 pb-75">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-10">
                        <div class="about__history-wrapper">
                            <div class="about__history-title-area">
                                <span class="about__history-title-pre">Our History</span>
                                <h3 class="about__history-title">
                                    <span>Hello, We are BRAVE Athleisure</span> <br/>
                                    With 6+ Years of Experience
                                </h3>
                            </div>
                            <p class="about__history-text">It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on low hanging fruit to identify. Lighting is a minimal residence located in Tokyo, Japan, designed by AYO. Large tiles were arranged on the counter top plate near the window.</p>

                            <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. Talk about it. When you talk about it, other people get excited about it. There are few plugins and apps available for this purpose, many of them required a monthly subscription.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about__banner">
            <div class="container-fluid p-0">
                <div class="row gx-0">
                    <div class="col-xxl-12">
                        <div class="about__banner-thumb w-img">
                            <img src={about_us_bg_1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about__gallery d-none">
            <div class="container">
                <div class="row gx-2">
                    <div class="col-xxl-8 col-xl-8 col-lg-8">
                        <div class="about__gallery-wrapper text-center ">
                            <div class="about__gallery-review include-bg mb-8 about__offer">
                                <h3>Eren Christopher</h3>
                                <span>PHOTOGRAPHER</span>
                                <p>Being a designer goes a step further than trying to evoke emotion, it’s trying to make a reaction. It is objective-driven, and that’s what makes it interesting. Designing a product is designing a relationship. Graphic design is the paradise of individuality, eccentricity, heresy, abnormality, hobbies, and humor.</p>

                                <img src={about_signature} alt="" class="about__signature" />
                            </div>
                            <div class="row gx-2">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="about__gallery-thumb w-img mb-10">
                                        <img src={about_img_3} alt="" />
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div class="about__gallery-thumb w-img mb-10">
                                        <img src={about_img_4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4">
                        <div class="about__gallery-thumb mb-8 w-img">
                            <img src={about_img_2} alt="" />
                        </div>
                        <div class="about__gallery-thumb w-img">
                            <img src={about_img_5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features__area mt-100 pb-75">
            <div class="container">
                <div class="row gx-0">
                    <div class="col-xxl-4 offset-xxl-2 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6">
                        <div class="features__item-2 features__item-pb-40 features__item-br features__item-bb text-center">
                            <div class="features__icon-2">
                                <img src={icon_trophy} alt="" />
                            </div>
                            <div class="features__content-2">
                                <h3 class="features__title-2">20+ Years of Experience</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                        <div class="features__item-2 features__item-pb-40 features__item-bb text-center">
                            <div class="features__icon-2">
                                <img src={icon_user} alt="" />
                            </div>
                            <div class="features__content-2">
                                <h3 class="features__title-2">20+ Years of Experience</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 offset-xxl-2  col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6">
                        <div class="features__item-2 features__item-pt-65 features__item-br text-center">
                            <div class="features__icon-2">
                                <img src={icon_like} alt="" />
                            </div>
                            <div class="features__content-2">
                                <h3 class="features__title-2">20+ Years of Experience</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5  col-lg-5  col-md-6">
                        <div class="features__item-2 features__item-pt-65 text-center">
                            <div class="features__icon-2">
                                <img src={icon_pen} alt="" />
                            </div>
                            <div class="features__content-2">
                                <h3 class="features__title-2">20+ Years of Experience</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="about__offer pt-155 pb-130 include-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-8 col-xl-8 col-lg-10">
                        <div class="about__offer-content text-center">
                            <div class="about__offer-icon mb-20">
                                <img src={icon_ship} alt="" />
                            </div>
                            <h3>All Orders Are Free Shipping</h3>
                            <p>Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue <br/> accumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac sollicitudin quam quisque at interdum dignissim fringilla elit risus lorem condimentum eros mollis. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



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



        <div class="subscribe-area pb-100 gray-bg-2 pt-95 d-none">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="section-title text-center">
                            <span class="p-subtitle">OUR NEWSLETTER</span>
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
                                <button type="submit" class="subscribe-btn subscribe-btn-1">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </main>

    </div>

  )
}

export default About