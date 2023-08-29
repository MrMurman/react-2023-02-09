import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementDish: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] + 1 : 1;
      // state.status = {
      //   ...state,
      //   payload: state[payload] ? state[payload] + 1 : 1,
      // };
    },
    decrementDish: (state, { payload }) => {
      state[payload] = state[payload] !== 0 ? state[payload] - 1 : 0;
      // state.status = {
      //   ...state,
      //   payload: state[payload] !== 0 ? state[payload] - 1 : 0,
      // };
    },
  },
});

export const cartActions = {
  ...cartSlice.actions,
};
