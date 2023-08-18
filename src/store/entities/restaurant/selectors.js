import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantByID = (state, { restaurantID }) =>
  selectRestaurantModule(state).entities[restaurantID];

export const selectRestaurantIDs = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantModule(state).entities);

export const selectRestaurantMenuByID = (state, { restaurantID }) =>
  selectRestaurantByID(state, { restaurantID })?.menu;

export const selectRestaurantReviewsByID = (state, { restaurantID }) =>
  selectRestaurantByID(state, { restaurantID })?.reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsRestaurantLoaded = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.success;
