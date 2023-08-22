import { dishEntityAdapter } from ".";
import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectDishModule = (state) => state.dish;
const dishSelectors = dishEntityAdapter.getSelectors(selectDishModule);

export const selectDishByID = dishSelectors.selectById;
// = (state, { dishID }) => selectDishModule(state).entities[dishID];

export const selectDishIDs = dishSelectors.selectIds;
// = (state) => selectDishModule(state).ids;

export const selectDishes = dishSelectors.selectAll;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsDishLoaded = (state) =>
  selectDishLoadingStatus(state) === REQUEST_STATUSES.success;
