import { createStore } from "../CustomRedux";

const rootReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "incrementDish":
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
      };
    case "decrementDish":
      return {
        ...state,
        [action.payload]:
          state[action.payload] !== 0 ? state[action.payload] - 1 : 0,
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
