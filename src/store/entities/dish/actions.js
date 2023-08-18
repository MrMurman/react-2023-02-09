export const DISH_ACTIONS = {
  load: "dish/load",
  startLoading: "dish/startLoading",
  finishLoading: "dish/finishLoading",
  failLoading: "dish/failLoading",
};

export const loadDishes = () => ({
  type: DISH_ACTIONS.load,
});

export const startLoadingDishes = () => ({
  type: DISH_ACTIONS.startLoading,
});

export const finishLoadingDishes = (dishes) => ({
  type: DISH_ACTIONS.finishLoading,
  payload: dishes,
});

export const failLoadingDishes = () => ({
  type: DISH_ACTIONS.failLoading,
});
