import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { restaurantReducer } from "./entities/restaurant/reducer";
import { dishReducer } from "./entities/dish/reducer";
import { reviewReducer } from "./entities/review/reducer";
import { userReducer } from "./entities/user/reducer";
import { logger } from "./middleware/logger";
import {
  loadRestaurantIfNotExist,
  loadRestaurantsIfNotExist,
} from "./entities/restaurant/middleware/loadRestaurantsIfNotExist";
import { customThunk } from "./middleware/customThunk";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(customThunk, logger, loadRestaurantIfNotExist)
);

console.log("state", store.getState());
