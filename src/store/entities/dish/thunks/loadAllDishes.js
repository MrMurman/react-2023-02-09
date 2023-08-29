import { createAsyncThunk } from "@reduxjs/toolkit";
import { dishActions } from "..";
import { selectDishes } from "../selectors";

// export const loadAllDishes = () => (dispatch, getState) => {
//   const dishesIDs = selectDishes(getState());

//   if (dishesIDs.length) {
//     return;
//   }

//   dispatch(dishActions.startLoading());
//   fetch("http://localhost:3001/api/products")
//     .then((response) => response.json())
//     .then((dishes) => dispatch(dishActions.finishLoading(dishes)))
//     .catch(() => dishActions.failLoading());
// };

export const loadAllDishes = createAsyncThunk("dish/loadDishes", async () => {
  const response = await fetch("http://localhost:3001/api/products");
  return await response.json();
});
