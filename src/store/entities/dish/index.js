import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadAllDishes } from "./thunks/loadAllDishes";
import { loadSpecificDish } from "./thunks/loadSpecificDish";
import { loadDishesIfNotExist } from "./thunks/loadDishesIfNotExist";

// const initialState = {
//   entities: {},
//   ids: [],
//   status: REQUEST_STATUSES.idle,
// };

export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: REQUEST_STATUSES.idle,
  }),
  // reducers: {
  //   startLoading: (state) => {
  //     state.status = REQUEST_STATUSES.pending;
  //   },
  //   failLoading: (state) => {
  //     state.status = REQUEST_STATUSES.failed;
  //   },
  //   finishLoading: (state, { payload }) => {
  //     // {payload} = action
  //     // state.entities = {
  //     //   ...state.entities,
  //     //   ...payload.reduce((acc, product) => {
  //     //     acc[product.id] = product;

  //     //     return acc;
  //     //   }, {}),
  //     // };
  //     // state.ids = Array.from(
  //     //   new Set([...state.ids, ...payload.map(({ id }) => id)])
  //     // );

  //     dishEntityAdapter.setMany(state, payload); // payload = action.payload
  //     state.status = REQUEST_STATUSES.success;
  //   },
  // },
  extraReducers: (build) =>
    build
      .addCase(loadSpecificDish.pending, (state) => {
        state.loadingStatus = REQUEST_STATUSES.loading;
      })
      .addCase(loadSpecificDish.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertOne(state, payload);
        state.loadingStatus = REQUEST_STATUSES.fulfilled;
      })
      .addCase(loadSpecificDish.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      })
      .addCase(
        loadDishesIfNotExist.pending,
        (state) => (state.loadingStatus = REQUEST_STATUSES.loading)
      )
      .addCase(loadDishesIfNotExist.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = REQUEST_STATUSES.fulfilled;
      })
      .addCase(loadDishesIfNotExist.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      })
      .addCase(loadAllDishes.pending, (state) => {
        state.loadingStatus = REQUEST_STATUSES.loading;
      })
      .addCase(loadAllDishes.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = REQUEST_STATUSES.success;
      })
      .addCase(loadAllDishes.rejected, (state) => {
        state.loadingStatus = REQUEST_STATUSES.failed;
      }),
});

export const dishActions = {
  ...dishSlice.actions,
};
