import React from "react";
import styles from "./Products.module.css";
import Product from "../product/Product";

const Products = () => {
  return (
    <>
      <div className={`container`}>
        <h1>BEST SELLING COFFEE</h1>

        <div className={`${styles.gridContainer}`}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Products;
