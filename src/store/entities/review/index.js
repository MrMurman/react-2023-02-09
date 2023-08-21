import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = REQUEST_STATUSES.pending;
    },
    failLoading: (state) => {
      state.status = REQUEST_STATUSES.failed;
    },
    finishLoading: (state, { payload }) => {
      state.entities = payload.reduce((acc, review) => {
        acc[review.id] = review;

        return acc;
      }, state.entities);

      // state.entities = {
      //   ...state.entities,
      //   ...payload.reduce((acc, review) => {
      //     acc[review.id] = review

      //     return acc
      //   }, {})
      // } just as same as above
      state.ids = Array.from(
        new Set([...state.ids, ...payload.map(({ id }) => id)])
      );
      state.status = REQUEST_STATUSES.success;
    },
  },
});

export const reviewActions = {
  ...reviewSlice.actions,
};
