import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadUserIfNotExist } from "./thunks/loadUserIfNotExist";

// const initialState = {
//   entities: {},
//   ids: [],
//   status: REQUEST_STATUSES.idle,
// };

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
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
  //     state.entities = payload.reduce((acc, user) => {
  //       acc[user.id] = user;

  //       return acc;
  //     }, {});
  //     state.ids = payload.map(({ id }) => id);
  //     state.status = REQUEST_STATUSES.success;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(loadUserIfNotExist.pending, (state) => {
        state.loadingStatus = REQUEST_STATUSES.loading;
      })
      .addCase(loadUserIfNotExist.fulfilled, (state, { payload }) => {
        userEntityAdapter.setAll(state, payload);
        state.loadingStatus = REQUEST_STATUSES.success;
      })
      .addCase(loadUserIfNotExist.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      }),
});

export const userActions = {
  ...userSlice.actions,
};
