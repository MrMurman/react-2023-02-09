import {
  RESTAURANT_ACTIONS,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../actions";
import { selectRestaurantIDs } from "../selectors";

export const loadRestaurantIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== RESTAURANT_ACTIONS.load) {
    return next(action);
  }

  const restaurantIds = selectRestaurantIDs(store.getState());

  if (restaurantIds.length) {
    return;
  }

  store.dispatch(startLoadingRestaurants());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(failLoadingRestaurants());
};
