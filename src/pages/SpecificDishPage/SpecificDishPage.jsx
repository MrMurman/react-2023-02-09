import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { loadSpecificDish } from "../../store/entities/dish/thunks/loadSpecificDish";
import { useDispatch, useSelector } from "react-redux";
import { selectDishByID } from "../../store/entities/dish/selectors";
import { Dish } from "../../components/Dish/Dish";
import styles from "./styles.module.css";
import { RestaurantList } from "../../components/RestaurantList/RestaurantList";

export const SpecificDishPage = () => {
  const { dishID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSpecificDish(dishID));
  }, [dishID]);

  //   console.log(dishID);
  const dish = useSelector((state) => selectDishByID(state, dishID));
  //   console.log(dish);

  return (
    <div>
      {/* <h3>{`Dish name: ${dish.name}`}</h3> */}
      <Dish dishID={dishID} className={styles.dish} />
      <RestaurantList dishID={dishID} />
    </div>
  );
};
