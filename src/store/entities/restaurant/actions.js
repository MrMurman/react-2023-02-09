export const RESTAURANT_ACTIONS = {
  load: "restaurant/load",
  startLoading: "restaurant/startLoading",
  finishLoading: "restaurant/finishLoading",
  failLoading: "restaurant/failLoading",
};

export const loadRestaurants = () => ({
  type: RESTAURANT_ACTIONS.load,
});

export const startLoadingRestaurants = () => ({
  type: RESTAURANT_ACTIONS.startLoading,
});

export const finishLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTIONS.finishLoading,
  payload: restaurants,
});

export const failLoadingRestaurants = () => ({
  type: RESTAURANT_ACTIONS.failLoading,
});
