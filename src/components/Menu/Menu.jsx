import React, { useEffect } from "react";
import { Dish } from "../Dish/Dish";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuByID } from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";
import { loadDishesIfNotExist } from "../../store/entities/dish/thunks/loadDishesIfNotExist";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";
import { Button } from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";

export const Menu = () => {
  const { restaurantID } = useParams();
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectRestaurantMenuByID(state, { restaurantID })
  );
  const isLoading = useSelector(selectIsDishLoading);

  const navigate = useNavigate();

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
      <Button onClick={() => navigate("/cart")}>
        {/* we use {replace: true} after path so that user wont get
         into infinite cycles of redirecting */}
        Перейти к заказу
      </Button>
    </div>
  );
};
