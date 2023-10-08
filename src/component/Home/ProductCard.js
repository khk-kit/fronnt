import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const options = {
    size:"medium",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  

  // const navigateToProduct = (e) => {
  //   // e.preventDefault();
  //   // const data = {
  //   //   subtotal,
  //   //   shippingCharges,
  //   //   tax,
  //   //   totalPrice,
  //   // };

  //   // sessionStorage.setItem("orderInfo", JSON.stringify(data));

  //   navigate(`/product/${`${product._id}`}`);
  // };
  return (
    /*
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`$${product.price}`}</span>
    </Link>
    */

    <a className="productCard" href={`/product/${product._id}`} class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".1s">
            <div class="product-thumb">
                <img src={product.images[0].url} alt={product.name} />
                <div class="cart-btn cart-btn-1 p-abs">
                    <a href={`/product/${product._id}`}>View Details</a>
                    {/* <a href='' onClick={navigateToProduct()}>View Details</a> */}
                </div>
                <span class="discount discount-3 p-abs d-none">-20%</span>
                <div class="product-action product-action-1 p-abs d-none">
                    <a href="#" class="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModal">
                        <i class="fal fa-eye"></i>
                        <i class="fal fa-eye"></i>
                    </a>
                </div>
            </div>
            <div class="product-content">
                <h4 class="pro-title pro-title-2"><a to={`/product/${product._id}`}>{product.name}</a></h4>
                <div class="pro-price">
                    <span>{`$${product.price}`}</span>
                </div>
                <div class="rating d-none">
                    <i class="fal fa-star active"></i>
                    <i class="fal fa-star active"></i>
                    <i class="fal fa-star active"></i>
                    <i class="fal fa-star"></i>
                    <i class="fal fa-star"></i>
                </div>
            </div>
        </div>
    </a>

  );
};

export default ProductCard;