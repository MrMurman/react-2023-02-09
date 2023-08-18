import { selectRestaurantMenuByID } from "../../restaurant/selectors";
import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../actions";
import { selectDishIDs } from "../selectors";

export const loadDishesIfNotExist = (restaurantID) => (dispatch, getState) => {
  const state = getState();

  const restaurantDishIDs = selectRestaurantMenuByID(state, { restaurantID });
  const dishIDs = selectDishIDs(state);

  if (restaurantDishIDs.every((id) => dishIDs.includes(id))) {
    return;
  }

  dispatch(startLoadingDishes());

  fetch("http://localhost:3001/api/products?id=${restaurantID}")
    .then((response) => response.json())
    .then((dishes) => dispatch(finishLoadingDishes(dishes)))
    .catch(() => dispatch(failLoadingDishes()));
};
