import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { loadSpecificDish } from "../../store/entities/dish/thunks/loadSpecificDish";
import { useDispatch, useSelector } from "react-redux";
import { selectDishByID } from "../../store/entities/dish/selectors";

export const SpecificDishPage = () => {
  const { dishID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSpecificDish(dishID));
  }, []);

  //   console.log(dishID);
  const dish = useSelector((state) => selectDishByID(state, dishID));
  //   console.log(dish);

  return (
    <div>
      <h3>{`Dish name: ${dish.name}`}</h3>
    </div>
  );
};
