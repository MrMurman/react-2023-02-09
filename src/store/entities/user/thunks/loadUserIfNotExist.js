import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "..";
import { selectUserIDs } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

// export const loadUserIfNotExist = () => (dispatch, getState) => {
//   const state = getState();

//   const userIds = selectUserIDs(state);

//   if (userIds.length) {
//     return;
//   }

//   dispatch(userActions.startLoading());
//   fetch("http://localhost:3001/api/users/")
//     .then((response) => response.json())
//     .then((users) => dispatch(userActions.finishLoading(users)))
//     .catch(() => userActions.failLoading());
// };

export const loadUserIfNotExist = createAsyncThunk(
  "users/loadUserIfNotExist",

  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (selectUserIDs(state)?.length) {
      return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/users/");

    return await response.json();
  }
);
