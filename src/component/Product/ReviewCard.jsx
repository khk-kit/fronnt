import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div class="product-review-item">
        <div class="product-review-top d-flex align-items-center justify-content-between">
            <div class="product-review-name d-sm-flex align-items-center">
                <h4 class="mr-10">{review.name}</h4>
                <span class="date d-none">September 06, 2020</span>
            </div>
            <div class="product-review-rating">
                <Rating {...options} />
            </div>
        </div>
        <p>{review.comment}</p>
    </div>
  );
  
  {/*<div className="reviewCard"><img src={profilePng} alt="User" /><p>{review.name}</p><Rating {...options} /><span className="reviewCardComment">{review.comment}</span></div>*/}
  
};

export default ReviewCard;