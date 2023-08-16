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
