import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { restaurantReducer } from "./entities/restaurant/reducer";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
});

export const store = createStore(rootReducer);

console.log("state", store.getState());
