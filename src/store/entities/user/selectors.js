import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectUserModule = (state) => state.user;

export const selectUserByID = (state, { userID }) =>
  selectUserModule(state).entities[userID];

export const selectUserIDs = (state) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).status;

export const selectIsUserLoading = (state) =>
  selectUserLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsUserLoaded = (state) =>
  selectUserLoadingStatus(state) === REQUEST_STATUSES.success;
