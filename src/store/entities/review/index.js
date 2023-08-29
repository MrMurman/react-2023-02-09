import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadReviewIfNotExist } from "./thunks/loadReviewIfNotExist";

// const initialState = {
//   entities: {},
//   ids: [],
//   status: REQUEST_STATUSES.idle,
// };

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
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
  //     state.entities = payload.reduce((acc, review) => {
  //       acc[review.id] = review;

  //       return acc;
  //     }, state.entities);

  //     // state.entities = {
  //     //   ...state.entities,
  //     //   ...payload.reduce((acc, review) => {
  //     //     acc[review.id] = review

  //     //     return acc
  //     //   }, {})
  //     // } just as same as above
  //     state.ids = Array.from(
  //       new Set([...state.ids, ...payload.map(({ id }) => id)])
  //     );
  //     state.status = REQUEST_STATUSES.success;
  //   },
  // },
  extraReducers: (build) =>
    build
      .addCase(loadReviewIfNotExist.pending, (state) => {
        state.loadingStatus = REQUEST_STATUSES.loading;
      })
      .addCase(loadReviewIfNotExist.fulfilled, (state, { payload }) => {
        if (payload?.length) {
          reviewEntityAdapter.upsertMany(state, payload);
        }
        state.loadingStatus = REQUEST_STATUSES.success;
      })
      .addCase(loadReviewIfNotExist.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      }),
});

export const reviewActions = {
  ...reviewSlice.actions,
};
