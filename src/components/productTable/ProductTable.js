import React from "react";
import "./producttable.css";

const ProductTable = props => {
  const { products, changeQuantity, onOpenModal } = props;

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>product name</th>
            <th>price</th>
            <th>quantity</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="product">
                    <div className="product-img">
                      <img src={data.img} alt="jet-ski" />
                    </div>
                    <div className="product-info">
                      <h6>{data.name}</h6>
                      <p>{data.id}</p>
                    </div>
                  </div>
                </td>
                <td>${data.price}</td>
                <td>
                  <div className="qty-wrapper">
                    <div className="qty-div">
                      <div className="qty-input">
                        <i
                          className="less"
                          onClick={() => changeQuantity(index, "dec")}
                        >
                          -
                        </i>
                        <p>{data.qty}</p>
                        <i
                          className="more"
                          onClick={() => changeQuantity(index, "inc")}
                        >
                          +
                        </i>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#asdf" onClick={() => onOpenModal(index)}>
                    x
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
