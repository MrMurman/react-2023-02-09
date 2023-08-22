import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    failLoading: (state) => {
      state.status = REQUEST_STATUSES.failed;
    },
    finishLoading: (state, { payload }) => {
      // {payload} = action
      // state.entities = {
      //   ...state.entities,
      //   ...payload.reduce((acc, product) => {
      //     acc[product.id] = product;

      //     return acc;
      //   }, {}),
      // };
      // state.ids = Array.from(
      //   new Set([...state.ids, ...payload.map(({ id }) => id)])
      // );

      dishEntityAdapter.setMany(state, payload); // payload = action.payload
      state.status = REQUEST_STATUSES.success;
    },
  },
});

export const dishActions = {
  ...dishSlice.actions,
};
