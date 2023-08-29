import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantByID } from "../../store/entities/restaurant/selectors";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const RestaurantLink = ({ restaurantID, className }) => {
  const restaurant = useSelector((state) => {
    selectRestaurantByID(state, { restaurantID });
  });

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <Link
        to={`/restaurants/${restaurantID}`}
        className={classNames(styles.root, className)}
      >
        {restaurant.name}
      </Link>
    </div>
  );
};
