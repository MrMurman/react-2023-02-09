import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantByID = (state, { restaurantID }) =>
  selectRestaurantModule(state).entities[restaurantID];

export const selectRestaurantIDs = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantModule(state).entities);

export const selectRestaurantsFilteredByName = (state, { searchValue }) =>
  Object.values(selectRestaurantModule(state).entities).filter(
    ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

export const selectRestaurantMenuByID = (state, { restaurantID }) =>
  selectRestaurantByID(state, { restaurantID })?.menu;

export const selectRestaurantReviewsByID = (state, { restaurantID }) =>
  selectRestaurantByID(state, { restaurantID })?.reviews;

export const selectRestaurantUsersById = (state, { restaurantId }) =>
  selectRestaurantByID(state, { restaurantId })?.user;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsRestaurantLoaded = (state) =>
  selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.success;

export const selectRestaurantIDsFilteredByDishID = (state, { dishID }) =>
  selectRestaurantIDs(state).filter((restaurantID) => {
    const restaurant = selectRestaurantByID(state, { restaurantID });

    return !!restaurant?.menu.includes(dishID);
  });
