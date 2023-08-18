import React from "react";
import { Dish } from "../Dish/Dish";
import { useSelector } from "react-redux";
import { selectRestaurantMenuByID } from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";

export const Menu = ({ restaurantID }) => {
  const menu = useSelector((state) =>
    selectRestaurantMenuByID(state, { restaurantID })
  );
  return (
    <div>
      <h3>Menu</h3>
      <div className={StyleSheet.dishes}>
        {menu.map((dishID) => (
          <Dish dishID={dishID} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
