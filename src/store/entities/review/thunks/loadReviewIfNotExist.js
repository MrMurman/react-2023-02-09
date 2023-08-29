import { createAsyncThunk } from "@reduxjs/toolkit";
import { reviewActions } from "..";
import { selectRestaurantReviewsByID } from "../../restaurant/selectors";
import { selectReviewIDs } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

// export const loadReviewIfNotExist = (restaurantID) => (dispatch, getState) => {
//   const state = getState();

//   const restaurantReviewsIDs = selectRestaurantReviewsByID(state, {
//     restaurantID,
//   });
//   const reviewIds = selectReviewIDs(state);

//   if (restaurantReviewsIDs?.every((id) => reviewIds?.includes(id))) {
//     return;
//   }

//   dispatch(reviewActions.startLoading());
//   fetch("http://localhost:3001/api/reviews?restaurantId=${restaurantID}")
//     .then((response) => response.json())
//     .then((reviews) => dispatch(reviewActions.finishLoading(reviews)))
//     .catch(reviewActions.failLoading());
// };

export const loadReviewIfNotExist = createAsyncThunk(
  "review/loadReviewsIfNotExist",
  async (restaurantID, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurantReviewsIDs = selectRestaurantReviewsByID(state, {
      restaurantID,
    });
    const reviewIDs = selectReviewIDs(state);

    if (restaurantReviewsIDs.every((id) => reviewIDs.includes(id))) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantID}`
    );

    return await response.json();
  }
);
