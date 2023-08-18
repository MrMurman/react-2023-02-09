import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectDishModule = (state) => state.dish;

export const selectDishByID = (state, { dishID }) => {
  //   console.log("dishID inide selector", dishID);
  //   console.log("state inide selector", selectDishModule(state));
  //   console.log("general state", state);
  return selectDishModule(state).entities[dishID];
};

export const selectDishIDs = (state) => selectDishModule(state).ids;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsDishLoaded = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.success;
