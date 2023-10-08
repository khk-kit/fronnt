import React, { Fragment } from 'react';
import './PaymentMethod.css';
import paymentmethod_bg from "../../assets/img/shipping/paymentmethod_bg.png";

const PaymentMethod = () => {
    document.title = 'Payment Method | BRAVE Athleisure';
  return (
    <Fragment>

        <main>

        <section class="page__title-area pt-80 pb-65">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xxl-8 col-xl-10">
                            <div class="page__title-wrapper text-center">
                                <h3 class="page__title">Payment Method</h3>
                                <p>There are a number of factors any ecommerce business owner should consider before choosing a provider: the strength of security the provider offers; the provider’s ability to process multiple payment methods; where your customers are located; and any associated costs and fees you will incur for using the provider’s service.</p>
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
                                <img src={paymentmethod_bg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="faq__area pt-95 pb-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-xl-8 col-lg-8 mx-auto">
                            <div class="faq__wrapper">
                                <div class="faq__accordion">
                                    <h4>Security</h4>
                                    <p>
                                    In order to securely process payments, your site will need an SSL certificate, or secure sockets layer certificate. An SSL certificate is a code applied to your web server that provides a “layer” of security for online communication and transactions. When a customer’s web browser contacts your business’ website, the SSL certificate encrypts the connection, effectively shielding customer information from prying eyes.
                                    </p>
                                    <p>
                                    Once you’ve set up an SSL certificate for your site, you’ll want to ensure your ecommerce payment provider is PCI compliant. PCI stands for “payment card industry,” a set of regulations that merchants must follow to accept payments online. Compliance is mandated by credit card companies to ensure the security of credit card transactions passing through your processor.
                                    </p>

                                    <h4>Accommodating several types of payments</h4>
                                    <p>
                                    Your best option for ecommerce payment processing will be able to process a variety of payment options—not just a credit and debit card, but PayPal, Venmo, and e-checks too.
                                    </p>

                                    <h4>Accepting international payments</h4>
                                    <p>
                                    If your business only sells to the US market, you may not have to consider selecting a payment processor that allows for international transactions. However, if you plan to have customers overseas, you will want to select a service that can facilitate foreign payments.
                                    </p>
                                    <p>
                                    Your payment gateway will need to be able to support credit and debit cards from various foreign banks, and allow users to convert payments to their country’s currency. The gateway should also offer support for navigating various tax systems.
                                    </p>

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

export default PaymentMethod