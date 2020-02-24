import React from "react";
import "./breadcrumbs.css";
const Breadcrumbs = () => {
  return (
    <div className="card-checkout-wrap">
      <div className="cart">
        <h1>your cart</h1>
      </div>
      <div className="home-checkout">
        <a href="#asdfa">
          Home<i className="fa fa-arrow-right" aria-hidden="true"></i>Checkout
        </a>
      </div>
    </div>
  );
};

export default React.memo(Breadcrumbs);
