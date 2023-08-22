import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantActions } from "..";
import { selectRestaurantIDs } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

export const loadRestaurantIfNotExist = () => (dispatch, getState) => {
  const state = getState();

  const restaurantIds = selectRestaurantIDs(state);

  if (restaurantIds.length) {
    return;
  }

  dispatch(restaurantActions.startLoading());
  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      dispatch(restaurantActions.finishLoading(restaurants))
    )
    .catch(() => restaurantActions.failLoading());
};

export const loadRestaurantIfNotExistAsync = createAsyncThunk(
  "restaurant",
  async (_, { getState, rejectWithValue }) => {
    const restaurantIds = selectRestaurantIDs(getState());

    if (restaurantIds.length) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");

    return await response.json();
  }
);
