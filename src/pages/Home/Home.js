import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <div className={`${styles.tired}`}>
        <div className={`${styles.tiredMargin}`}>
          <h2>Tired?</h2>
          <h1 className={`${styles.coffeeMargin}`}>
            <b>
              <span className={styles.coffee}>Coffee </span>
            </b>
            is the best medicine
          </h1>
          <p>
            “Once you wake up and <br /> smell the coffee, it’s hard to <br />{" "}
            go back to sleep.”
          </p>
        </div>
        <div className={`${styles.hero}`}>
          <img src="/images/hero.png" alt="hero" />
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
