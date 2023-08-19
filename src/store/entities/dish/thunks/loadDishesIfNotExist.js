import { dishActions } from "..";
import { selectRestaurantMenuByID } from "../../restaurant/selectors";
import { selectDishIDs } from "../selectors";

export const loadDishesIfNotExist = (restaurantID) => (dispatch, getState) => {
  const state = getState();

  const restaurantDishIDs = selectRestaurantMenuByID(state, { restaurantID });
  const dishIDs = selectDishIDs(state);

  if (restaurantDishIDs.every((id) => dishIDs.includes(id))) {
    return;
  }

  dispatch(dishActions.startLoading());

  fetch("http://localhost:3001/api/products?restaurantId=${restaurantID}")
    .then((response) => response.json())
    .then((dishes) => dispatch(dishActions.finishLoading(dishes)))
    .catch(() => dispatch(dishActions.failLoading()));
};
