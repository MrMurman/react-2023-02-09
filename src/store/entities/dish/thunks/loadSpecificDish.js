import { dishActions } from "..";

export const loadSpecificDish = (dishID) => (dispatch, getState) => {
  dispatch(dishActions.startLoading());

  fetch(`http://localhost:3001/api/products?productId=${dishID}`)
    .then((response) => response.json())
    .then((dish) => dispatch(dishActions.finishLoading(dish)))
    .catch(dishActions.failLoading());
};
