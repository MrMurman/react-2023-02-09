import React, { useEffect } from "react";
import { Dish } from "../Dish/Dish";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuByID } from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";
import { loadDishesIfNotExist } from "../../store/entities/dish/thunks/loadDishesIfNotExist";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";

export const Menu = ({ restaurantID }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantMenuByID(state, { restaurantID })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(loadDishesIfNotExist(restaurantID));
  }, [restaurantID]);

  if (isLoading) {
    return <span>Loading ...</span>;
  }
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
