import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { restaurantReducer } from "./entities/restaurant/reducer";
import { dishReducer } from "./entities/dish/reducer";
import { reviewReducer } from "./entities/review/reducer";
import { userReducer } from "./entities/user/reducer";
import { logger } from "./middleware/logger";
import { customThunk } from "./middleware/customThunk";
import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { loadRestaurantIfNotExist } from "./entities/restaurant/middleware/loadRestaurantsIfNotExist";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  // restaurant: restaurantReducer,
  restaurant: restaurantSlice.reducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(customThunk, logger, loadRestaurantIfNotExist)
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      //customThunk,
      logger,
      loadRestaurantIfNotExist,
    ]),
});

// in toolKit you get defaultMiddlewares with thunks, this is why customthunk is no longer needed
// in order to leverage defalut stuff, u need to concat your own array with the func result

console.log("state", store.getState());
