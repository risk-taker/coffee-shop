import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const cartItem = {
    display: "flex",
    alignItem: "center",
    textDecoration: "none",
    backgroundColor: "#BC906A",
    color: "#0D0F12",
    borderRadius: "15px",
    padding: " 2px 8px",
  };
  const textDeco = {
    textDecoration: "none",
    color: "#0D0F12",
    fontSize: "larger",
    padding: "0 15px 0 0",
  };
  const margin = {
    marginRignt: "15px",
  };
  return (
    <div className={`${styles.navbar} container`}>
      <div>
        <Link style={textDeco} to="/">
          Home
        </Link>
        <Link style={textDeco} to="product">
          Products
        </Link>
      </div>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <div>
        <Link style={cartItem} to="cart">
          <h2 className={`${styles.cartMargin}`}>2</h2>
          <span>
            <img src="/images/cart.png" alt="cart" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
