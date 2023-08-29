import React from "react";
import { useSelector } from "react-redux";
import { selectCartIDs } from "../../store/cart/selectors";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

export const Cart = () => {
  //const cart = useSelector((state) => selectCartEntries(state));
  const cart = useSelector(selectCartIDs);

  return (
    <div className={styles.root}>
      {cart.map((dishID) => (
        // <li key={dishID}>
        /* {id} : {count} */
        <Dish className={styles.dish} dishID={dishID} key={dishID} />
        // </li>
      ))}
    </div>
  );
};
