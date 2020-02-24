import React from "react";
import "./additionalinfo.css";

const AdditionalInfo = props => {
  const { total, additionalComments, handleComments, handleCheckout } = props;
  return (
    <div className="additional-info-wrap">
      <div className="additional-info">
        <h5>additional comments</h5>
        <textarea
          id=""
          cols="45"
          rows="10"
          value={additionalComments}
          onChange={e => handleComments(e.target.value)}
        ></textarea>
      </div>
      <div className="delivery-info">
        <h5>delivery info</h5>
        <p>
          All orders will be sent by special Deliery which will be insured and
          will need to be signed for. Allow 4-6 weeks for delivery
        </p>
      </div>
      <div className="sub-total">
        <ul>
          <li>
            <span>sub total</span>
            <p>${total}</p>
          </li>
          <li>
            <span>tax</span>
            <p>$0</p>
          </li>
          <li>
            <span>total</span>
            <p>${total}</p>
          </li>
        </ul>
        <div className="checkout-btn">
          <a href="#as" onClick={() => handleCheckout()}>
            checkout
          </a>
        </div>
        <p>
          or<a href="#sgt">continue shopping</a>
        </p>
      </div>
    </div>
  );
};

export default React.memo(AdditionalInfo);
