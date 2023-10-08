import './Shop.css'
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import { getProductCategory } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
// import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import Metadata from '../layout/Metadata';

import MultiRangeSlider from "../../component/multiRangeSlider/MultiRangeSlider.js";
import $ from "jquery";
import product_modal_1 from "../../assets/img/products/modal/product_modal_1.png";
import product_modal_2 from "../../assets/img/products/modal/product_modal_2.jpg";
import product_modal_sm_1 from "../../assets/img/products/modal/product_modal_sm_1.jpg";
import product_modal_sm_2 from "../../assets/img/products/modal/product_modal_sm_2.jpg";

const categories = [
  "T-shirts",
  "Gloves",
  "Hoodies",
  "Iphone",
  "Iphone 14 pro",
]

const Shop_category = () => {
      const dispatch = useDispatch();

      const queryParameters = new URLSearchParams(window.location.search)
      const type_category = queryParameters.get("category")
      const type_gender = queryParameters.get("gender")

      console.log('Query Parms--->',type_category,type_gender);

      const [currentPage, setCurrentPage]= useState(1);
      // const [price, setPrice] = useState([0, 25000]);
      const [category, setCategory]= useState("");

    const {products, loading, productsCount, resultPerPage, filteredProductsCount} = useSelector(
      (state) => state.products
    );

    // const keyword = match.params.keyword;
    const setCurrentPageNo = (e)=>{
      setCurrentPage(e)
    }

    // const priceHandler = (event, newPrice) => {
    //   console.log(newPrice);
    //   setPrice(newPrice);
    // };

    useEffect(()=>{
      dispatch(getProductCategory(type_category,type_gender));
    },[dispatch,type_category,type_gender])

    let count = filteredProductsCount;

  return (
    <Fragment>

      {/* NIZAR CODE */}

      <main>

            
            <div class="breadcrumb-area pt-255 pb-265 mb-120 shop_banner_bg">
                <div class="container">
                    <div class="breadcrumb-title text-center">
                        <h2>Shop</h2>
                    </div>
                    <div class="breadcrumb-list">
                        <Link to="/">Home</Link>
                        <Link to="/Shop">Shop</Link>
                        <span>Shop Sidebar</span>
                    </div>
                </div>
            </div>

            
            <div class="shop-area mb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 order-first order-lg-last">
                            <div class="shop-top-area mb-40 d-none">
                                <div class="row">
                                    <div class="col-xxl-4 col-xl-2 col-md-3 col-sm-3">
                                        <div class="shop-top-left">
                                            <span class="label mr-15">View:</span>
                                            <div class="nav d-inline-block tab-btn-group" id="nav-tab" role="tablist">
                                                <button class="active" data-bs-toggle="tab" data-bs-target="#tab1" type="button"><i class="fas fa-border-none"></i></button>
                                                <button data-bs-toggle="tab" data-bs-target="#tab2" type="button"><i class="fas fa-list"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-6 col-md-6 col-sm-6">
                                        <p class="show-total-result text-sm-center">Showing 1–12 of 24 results</p>
                                    </div>
                                    <div class="col-xl-4 col-xl-4 col-md-3 col-sm-3">
                                        <div class="text-sm-end">
                                            <div class="select-default">
                                                <select name="short" id="short" class="shorting-select">
                                                    <option value="">Default sorting</option>
                                                    <option value="">ASC</option>
                                                    <option value="">DEC</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="shop-main-area">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade  show active" id="tab1">
                                        <div class="row pb-20">
                                        {products &&
                                        products.map((product) => (
                                          <ProductCard key={product._id} product={product} />
                                        ))}
                                        </div>
                                    </div>                                   
                                </div>
                            </div>

                            <div class="shop-pagination">
                                <div class="basic-pagination">
                                    <nav>
                                    <ul>
                                        <li>
                                            <Link to="/Shop">
                                                <i class="far fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Shop">1</Link>
                                        </li>
                                        <li>
                                            <Link to="/Shop" class="active">2</Link>
                                        </li>
                                        <li>
                                            <Link to="/Shop">3</Link>
                                        </li>
                                        <li>
                                            <Link to="/Shop">
                                                <i class="far fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
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
                                            <Link to="#"><i class="ti-star"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="ti-star"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="ti-star"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="ti-star"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="ti-star"></i></Link>
                                        </li>
                                    </ul>
                                    <div class="customer-review">
                                        <Link to="#">(1 customer review)</Link>
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
                                        <li><Link to="#">Decor, </Link></li>
                                        <li><Link to="#">Lamp, </Link></li>
                                        <li><Link to="#">Lighting</Link></li>
                                    </ul>
                                </div>
                                <div class="product__modal-categories d-sm-flex align-items-center">
                                    <span>Tags: </span>
                                    <ul>
                                        <li><Link to="#">Furniture, </Link></li>
                                        <li><Link to="#">Lighting, </Link></li>
                                        <li><Link to="#">Living Room, </Link></li>
                                        <li><Link to="#">Table</Link></li>
                                    </ul>
                                </div>
                                <div class="product__modal-share d-sm-flex align-items-center">
                                    <span>Share this product: </span>
                                    <ul>
                                        <li>
                                            <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="fab fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="fab fa-pinterest-p"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="fab fa-google-plus-g"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>


        {
        /*
        loading ? (<Loader/>
        ):(<Fragment>
            <Metadata title="Products"/>
            <h2 className="productsHeading">Product</h2>
            <div className="products">
                {products &&
                products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

        
            <div className="filterBox">
                <Typography>Price</Typography>
                <Slider
                // value={price}
                // onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
                />

                <Typography>Categories</Typography>
                <ul className="categoryBox">
                    {categories.map((category) => (
                        <li
                        className="category-link"
                        key={category}
                        onClick={() => setCategory(category)}
                        >
                        {category}
                        </li>
                    ))}
                </ul>
            </div>

            {resultPerPage < count && (
                <div className="paginationBox">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
                </div>
            )}

            </Fragment>
        )
        */
        }
    </Fragment>
  )
}

export default Shop_category;