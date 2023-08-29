import { createAsyncThunk } from "@reduxjs/toolkit";
import { dishActions } from "..";
import { selectRestaurantMenuByID } from "../../restaurant/selectors";
import { selectDishIDs } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

// export const loadDishesIfNotExist = (restaurantID) => (dispatch, getState) => {
//   const state = getState();

//   const restaurantDishIDs = selectRestaurantMenuByID(state, { restaurantID });
//   const dishIDs = selectDishIDs(state);

//   if (restaurantDishIDs.every((id) => dishIDs.includes(id))) {
//     return;
//   }

//   dispatch(dishActions.startLoading());

//   fetch("http://localhost:3001/api/products?restaurantId=${restaurantID}")
//     .then((response) => response.json())
//     .then((dishes) => dispatch(dishActions.finishLoading(dishes)))
//     .catch(() => dispatch(dishActions.failLoading()));
// };

export const loadDishesIfNotExist = createAsyncThunk(
  "dish/loadDishesIfNotExist",
  async (restaurantID, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurantDishIDs = selectRestaurantMenuByID(state, {
      restaurantID,
    });
    const loadedDishesIDs = selectDishIDs(state);

    if (restaurantDishIDs.every((id) => loadedDishesIDs.includes(id))) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch(
      `http://localhost:3001/api/products?restaurantId=${restaurantID}`
    );

    return await response.json();
  }
);
