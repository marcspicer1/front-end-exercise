import React from "react";
import "./header.css";

const Header = props => {
  const { count } = props;
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="order-form">
            <h2>
              order<span>form</span>
            </h2>
          </div>
          <div className="card">
            <a href="#sdf">
              cart<span>{count}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
