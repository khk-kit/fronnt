import React, { Fragment } from 'react';
import './ShippingPolicy.css';

const ShippingPolicy = () => {
    document.title = 'Shipping Policy | BRAVE Athleisure';
  return (
    <Fragment>

        <main>

            <div class="breadcrumb-area pt-255 pb-265 shipping_policy_banner_bg">
                <div class="container">
                    <div class="breadcrumb-title text-center">
                        <h2>Shipping Policy</h2>
                    </div>
                    <div class="breadcrumb-list">
                        <a href="/">Home</a>
                        <span>Shipping Policy</span>
                    </div>
                </div>
            </div>

            <section class="faq__area pt-95 pb-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-xl-8 col-lg-8 mx-auto">
                            <div class="faq__wrapper">
                                <div class="faq__accordion">
                                    <h4>SHIPMENT TRACKING</h4>
                                    <p>
                                    A confirmation email from Green Hill will be sent to you with tracking number once your order is processed and shipped. By which you can track your shipment, the tracking of the shipment is available up to 24 hours from the time of shipment dispatch.
                                    </p>


                                    <h4>DISCLAIMER:</h4>
                                    <p>
                                    Customers from outside the EUROPE and GERMANY are responsible for the legal delivery into their respective countries, as the orders shipped to those countries may be subject to import duties, taxes and other tariffs. Although it may not be the case with most of the countries, but due to different custom rules and regulations in different countries, the customer may pay an additional cost of custom duties. To avoid any inconvenience with your shipment at your destination, it is highly recommended to know about the custom rules and regulations imposed in your own country.
                                    </p>
                                    <p>
                                    All the additional custom clearance charges and import duties under Green Hill product shipping is paid by the customer, however if the parcel is returned because the customer was not located by the courier, or is returned by the custom authorities from destination countries, we refund these orders without shipping and the return shipping fee.
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

export default ShippingPolicy