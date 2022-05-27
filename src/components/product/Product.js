import React from "react";
import styles from "./Product.module.css";

const product = () => {
  return (
    <div className={`${styles.gridItem}`}>
      <div className={`${styles.gridImage}`}>
        <img
          className={`${styles.coffeeImage}`}
          src="/images/coffee.png"
          alt="coffee"
        />
      </div>
      <div className={`${styles.flexContainer}`}>
        <h2>
          <b>Coffee Lattee</b>
        </h2>
        <h3 className={`${styles.price}`}>₹450</h3>
      </div>
      <p>
        "Never trust anyone who doesn't drink coffee." "Our culture runs on
        coffee and gasoline, the first often tasting like the second."
      </p>
      <div className={`${styles.btnContainer}`}>
        <button className={`${styles.btn}`}>ADD</button>
      </div>
    </div>
  );
};

export default product;
