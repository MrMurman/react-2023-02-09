import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const userSlice = createSlice({
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
      state.entities = payload.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
      state.status = REQUEST_STATUSES.success;
    },
  },
});

export const userActions = {
  ...userSlice.actions,
};
