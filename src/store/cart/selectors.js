export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishName }) =>
  selectCartModule(state)[dishName] || 0;

export const selectCartEntries = (state) =>
  Object.entries(selectCartModule(state));
