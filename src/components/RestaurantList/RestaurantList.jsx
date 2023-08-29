import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIDsFilteredByDishID } from "../../store/entities/restaurant/selectors";
import { loadRestaurantIfNotExistAsync } from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExist";
import { RestaurantLink } from "../RestaurantLink/RestaurantLink";

export const RestaurantList = ({ dishID }) => {
  const dispatch = useDispatch();
  const restaurantsIDs = useSelector((state) =>
    selectRestaurantIDsFilteredByDishID(state, { dishID })
  );

  useEffect(() => {
    dispatch(loadRestaurantIfNotExistAsync());
  }, []);

  return (
    <div>
      <h3>Available in:</h3>
      {restaurantsIDs.map((restaurantsId) => (
        <RestaurantLink
          key={restaurantsId}
          restaurantID={restaurantsId}
          className={styles.restaurant}
        />
      ))}
    </div>
  );
};
