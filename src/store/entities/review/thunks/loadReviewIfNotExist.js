import { reviewActions } from "..";
import { selectRestaurantReviewsByID } from "../../restaurant/selectors";
import { selectReviewIDs } from "../selectors";

export const loadReviewIfNotExist = (restaurantID) => (dispatch, getState) => {
  const state = getState();

  const restaurantReviewsIDs = selectRestaurantReviewsByID(state, {
    restaurantID,
  });
  const reviewIds = selectReviewIDs(state);
  console.log("here");
  if (restaurantReviewsIDs?.every((id) => reviewIds?.includes(id))) {
    return;
  }
  console.log("here");

  dispatch(reviewActions.startLoading());
  fetch("http://localhost:3001/api/reviews?restaurantId=${restaurantID}")
    .then((response) => response.json())
    .then((reviews) => dispatch(reviewActions.finishLoading(reviews)))
    .catch(reviewActions.failLoading());
};
