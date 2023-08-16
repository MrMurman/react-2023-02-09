const initialState = {};

export const cartReducer = (state = initialState, action) => {
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
