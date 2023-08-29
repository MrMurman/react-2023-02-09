import { createAsyncThunk } from "@reduxjs/toolkit";
import { dishActions } from "..";
import { REQUEST_STATUSES } from "../../../../constants/statuses";
import { selectDishByID } from "../selectors";

// export const loadSpecificDish = (dishID) => (dispatch, getState) => {
//   dispatch(dishActions.startLoading());

//   fetch(`http://localhost:3001/api/products?productId=${dishID}`)
//     .then((response) => response.json())
//     .then((dish) => dispatch(dishActions.finishLoading(dish)))
//     .catch(dishActions.failLoading());
// };

export const loadSpecificDish = createAsyncThunk(
  "dish/loadSpecificDish",

  async (dishID, { getState, rejectWithValue }) => {
    const dish = selectDishByID(getState(), { dishID });
    if (dish) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch(
      `http://localhost:3001/api/products?productId=${dishID}`
    );
    return await response.json();
  }
);
