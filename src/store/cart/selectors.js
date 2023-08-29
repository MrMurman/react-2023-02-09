import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishID }) =>
  selectCartModule(state)[dishID] || 0;

// export const selectCartEntries = (state) =>
//   Object.entries(selectCartModule(state));

export const selectCartIDs = createSelector(selectCartModule, (state) =>
  Object.keys(state)
);
