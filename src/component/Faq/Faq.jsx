import React, { Fragment } from 'react';
import './Faq.css';
import faq_bg from "../../assets/img/faq/faq-bg.jpg";

const Faq = () => {
    document.title = 'Faq | BRAVE Athleisure';
  return (
    <Fragment>

        <main>

            <section class="page__title-area pt-80 pb-65">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xxl-8 col-xl-10">
                            <div class="page__title-wrapper text-center">
                                <span class="page__title-pre">Hi, BRAVE Athleisure Store</span>
                                <h3 class="page__title">FAQ</h3>
                                <p>The most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. When you talk about it, other people get excited about it. There are few plugins and apps available for this purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="faq__bg">
                <div class="container-fluid p-0">
                    <div class="row gx-0">
                        <div class="col-xxl-12">
                            <div class="faq__thumb w-img">
                                <img src={faq_bg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="faq__area pt-95 pb-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                            <div class="faq__wrapper">
                                <div class="faq__accordion">
                                    <h3 class="faq__title">Shopping Information</h3>
                                    <div class="accordion" id="faqAccordion">
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq1">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                                                Can I order over the phone?
                                            </button>
                                        </h2>
                                        <div id="faqOne" class="accordion-collapse collapse show" aria-labelledby="faqAccordion" data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="true" aria-controls="faqTwo">
                                                Donec mattis finibus elit ut tristique?
                                            </button>
                                        </h2>
                                        <div id="faqTwo" class="accordion-collapse collapse" aria-labelledby="faqAccordion" data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="true" aria-controls="faqThree">
                                                Vestibulum a lorem placerat, porttitor urna vel?
                                            </button>
                                        </h2>
                                        <div id="faqThree" class="accordion-collapse collapse" aria-labelledby="faqAccordion" data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq4">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour" aria-expanded="true" aria-controls="faqFour">
                                                Pellentesque habitant morbi tristique senectus et netus?
                                            </button>
                                        </h2>
                                        <div id="faqFour" class="accordion-collapse collapse" aria-labelledby="faqAccordion" data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq5">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive" aria-expanded="true" aria-controls="faqFive">
                                                Nam pellentesque aliquam metus?
                                            </button>
                                        </h2>
                                        <div id="faqFive" class="accordion-collapse collapse" aria-labelledby="faqAccordion" data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                            <div class="faq__wrapper faq__wrapper-right">
                                <div class="faq__accordion">
                                    <h3 class="faq__title">Payment Information</h3>
                                    <div class="accordion" id="faqAccordion2">
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq6">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqSix" aria-expanded="true" aria-controls="faqSix">
                                                What does come with my purchase? 
                                            </button>
                                        </h2>
                                        <div id="faqSix" class="accordion-collapse collapse show" aria-labelledby="faqAccordion2" data-bs-parent="#faqAccordion2">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq7">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSev" aria-expanded="true" aria-controls="faqSev">
                                                Are there any recurring fees?
                                            </button>
                                        </h2>
                                        <div id="faqSev" class="accordion-collapse collapse" aria-labelledby="faqAccordion2" data-bs-parent="#faqAccordion2">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq8">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqEigh" aria-expanded="true" aria-controls="faqEigh">
                                                Is it possible to customize? 
                                            </button>
                                        </h2>
                                        <div id="faqEigh" class="accordion-collapse collapse" aria-labelledby="faqAccordion2" data-bs-parent="#faqAccordion2">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq9">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqNine" aria-expanded="true" aria-controls="faqNine">
                                                How to get my support?
                                            </button>
                                        </h2>
                                        <div id="faqNine" class="accordion-collapse collapse" aria-labelledby="faqAccordion2" data-bs-parent="#faqAccordion2">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq10">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTen" aria-expanded="true" aria-controls="faqTen">
                                                Why should I trust Ecomm? 
                                            </button>
                                        </h2>
                                        <div id="faqTen" class="accordion-collapse collapse" aria-labelledby="faqAccordion2" data-bs-parent="#faqAccordion2">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
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


            
            <section class="contact__form-area p-rel">
                <div class="contact__map-wrapper">
                    <div class="contact__map"></div>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                            <div class="contact__form  pb-100">
                                <form action="#" class="d-none">
                                    <div class="contact__form-title text-center">
                                        <h3>Still Question?</h3>
                                        <p>Your email address will not be published. </p>
                                    </div>
                                    <div class="contact__form-input">
                                        <input type="text" placeholder="Name *" />
                                    </div>
                                    <div class="contact__form-input">
                                        <input type="email" placeholder="Email *" />
                                    </div>
                                    <div class="contact__form-input">
                                        <textarea placeholder="Comment *"></textarea>
                                    </div>
                                    <button class="contact__form-btn mt-15" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            
            <section class="faq__area pt-95 pb-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                            <div class="faq__wrapper">
                                <div class="faq__accordion">
                                    <h3 class="faq__title">Ordering from Puik</h3>
                                    <div class="accordion" id="faqAccordion4">
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq16">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqSixth" aria-expanded="true" aria-controls="faqSixth">
                                                What courier do you use for deliveries?      
                                            </button>
                                        </h2>
                                        <div id="faqSixth" class="accordion-collapse collapse show" aria-labelledby="faqAccordion4" data-bs-parent="#faqAccordion4">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq17">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSevth" aria-expanded="true" aria-controls="faqSevth">
                                                How long does it take for home delivery?      
                                            </button>
                                        </h2>
                                        <div id="faqSevth" class="accordion-collapse collapse" aria-labelledby="faqAccordion4" data-bs-parent="#faqAccordion4">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq18">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqEith" aria-expanded="true" aria-controls="faqEith">
                                                I placed an order on Friday for next day delivery, why did I not get it until Tuesday?      
                                            </button>
                                        </h2>
                                        <div id="faqEith" class="accordion-collapse collapse" aria-labelledby="faqAccordion4" data-bs-parent="#faqAccordion4">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq19">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqNinth" aria-expanded="true" aria-controls="faqNinth">
                                                Why am I being charged for delivery on my order when it states standard delivery is free?      
                                            </button>
                                        </h2>
                                        <div id="faqNinth" class="accordion-collapse collapse" aria-labelledby="faqAccordion4" data-bs-parent="#faqAccordion4">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq20">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwty" aria-expanded="true" aria-controls="faqTwty">
                                                I haven’t received a dispatch email/email confirmation?      
                                            </button>
                                        </h2>
                                        <div id="faqTwty" class="accordion-collapse collapse" aria-labelledby="faqAccordion4" data-bs-parent="#faqAccordion4">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                            <div class="faq__wrapper faq__wrapper-right">
                                <div class="faq__accordion">
                                    <h3 class="faq__title">Order and returns</h3>
                                    <div class="accordion" id="faqAccordion3">
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq11">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqEle" aria-expanded="true" aria-controls="faqEle">
                                                Why does it not tell us on the website that the parts will be delivered by the branch?      
                                            </button>
                                        </h2>
                                        <div id="faqEle" class="accordion-collapse collapse show" aria-labelledby="faqAccordion3" data-bs-parent="#faqAccordion3">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq12">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwl" aria-expanded="true" aria-controls="faqTwl">
                                                I'm new, how do I order?      
                                            </button>
                                        </h2>
                                        <div id="faqTwl" class="accordion-collapse collapse" aria-labelledby="faqAccordion3" data-bs-parent="#faqAccordion3">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq13">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThir" aria-expanded="true" aria-controls="faqThir">
                                                Is it safe to order online?      
                                            </button>
                                        </h2>
                                        <div id="faqThir" class="accordion-collapse collapse" aria-labelledby="faqAccordion3" data-bs-parent="#faqAccordion3">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq14">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqfourth" aria-expanded="true" aria-controls="faqfourth">
                                                Which credit cards do you accept?      
                                            </button>
                                        </h2>
                                        <div id="faqfourth" class="accordion-collapse collapse" aria-labelledby="faqAccordion3" data-bs-parent="#faqAccordion3">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="faq15">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFivth" aria-expanded="true" aria-controls="faqFivth">
                                                What currencies can I use?      
                                            </button>
                                        </h2>
                                        <div id="faqFivth" class="accordion-collapse collapse" aria-labelledby="faqAccordion3" data-bs-parent="#faqAccordion3">
                                            <div class="accordion-body">
                                                <div class="faq__content">
                                                    <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. </p>
                                                </div>
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
            

        </main>

    </Fragment>
  )
}

export default Faq