import React from "react";
import { Cart } from "../../components/Cart/Cart";
import styles from "./styles.module.css";

export const CartPage = () => {
  return (
    <div className={styles.root}>
      <Cart />
    </div>
  );
};
