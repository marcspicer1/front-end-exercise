import React from "react";
import "./App.css";
import Header from "../components/header/Header";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ProductTable from "../components/productTable/ProductTable";
import AdditionalInfo from "../components/additionalInfo/AdditionalInfo";
import { productList } from "../constants/constants";
import ModalPopup from "../components/modal/ModalPopup";

class App extends React.Component {
  state = {
    products: productList,
    total: 1995,
    open: false,
    additionalComments: "",
    selectedProduct: null
  };
  // Remove product from cart and update the cart
  removeProduct = () => {
    const { products, total, selectedProduct } = this.state;
    //Update Total Amount
    let totalAmount =
      total - products[selectedProduct].qty * products[selectedProduct].price;
    let tempData = products;
    //Remove Selected Product
    tempData.splice(selectedProduct, 1);
    this.setState({ products: tempData, open: false }, () => {
      this.setTotal(totalAmount);
    });
  };

  //Update Quantity of Product and update the cart
  changeQuantity = (index, action) => {
    const { total, products } = this.state;
    let tempData = products;
    // Check if Action is Decrement
    // and quantity is 1, return null
    if (action === "dec" && tempData[index].qty === 1) {
      return;
    }
    // Check action and update quantity accordingly
    action === "dec" ? (tempData[index].qty -= 1) : (tempData[index].qty += 1);
    this.setState({ products: tempData }, () => {
      //Update Total Amount
      let totalAmount =
        action === "dec"
          ? total - products[index].price
          : total + products[index].price;
      this.setTotal(totalAmount);
    });
  };

  // Add comments to order
  handleComments = msg => {
    this.setState({ additionalComments: msg });
  };

  // Handle checkout API functionality and console the order
  handleCheckout = () => {
    const checkoutData = {
      products: this.state.products,
      total: this.state.total,
      subtotal: this.state.total,
      message: this.state.additionalComments
    };
    new Promise(function(resolve, reject) {
      // A mock async action using setTimeout
      setTimeout(function() {
        resolve(10);
      }, 3000);
    })
      .then(res => {
        console.log("Checkout Data:", checkoutData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Update the cart with total amount
  setTotal = value => {
    this.setState({ total: value });
  };

  // Open Popup Modal
  onOpenModal = index => {
    this.setState({ selectedProduct: index, open: true });
  };
  // Close Popup Modal
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { products, total, additionalComments, open } = this.state;
    return (
      <>
        <Header count={products.length} />
        <div className="cart-outer">
          <div className="container">
            <Breadcrumbs />
            <ProductTable
              products={products}
              removeProduct={this.removeProduct}
              changeQuantity={(index, event) =>
                this.changeQuantity(index, event)
              }
              onOpenModal={this.onOpenModal}
            />
            <AdditionalInfo
              total={total}
              additionalComments={additionalComments}
              handleComments={this.handleComments}
              handleCheckout={this.handleCheckout}
            />
          </div>
        </div>
        <ModalPopup
          open={open}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
          removeProduct={this.removeProduct}
        />
      </>
    );
  }
}

export default App;
