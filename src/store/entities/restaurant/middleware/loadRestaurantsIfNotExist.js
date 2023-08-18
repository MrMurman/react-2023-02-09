import { loadRestaurantsAction, restaurantActions, restaurantSlice } from "..";
import {
  RESTAURANT_ACTIONS,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../actions";
import { selectRestaurantIDs } from "../selectors";

export const loadRestaurantIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== loadRestaurantsAction.type) {
    return next(action);
  }

  const restaurantIds = selectRestaurantIDs(store.getState());

  if (restaurantIds.length) {
    return;
  }

  //store.dispatch(startLoadingRestaurants());
  // likewise everuthing below is updtated from actions written by us to Slice
  //store.dispatch(restaurantSlice.actions.startLoading());
  store.dispatch(restaurantActions.startLoading());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(restaurantSlice.actions.finishLoading(restaurants))
    )
    .catch(restaurantSlice.actions.failLoading());
};
