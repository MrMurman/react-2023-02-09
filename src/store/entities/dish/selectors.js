export const selectDishModule = (state) => state.dish;

export const selectDishByID = (state, { dishID }) => {
  //   console.log("dishID inide selector", dishID);
  //   console.log("state inide selector", selectDishModule(state));
  //   console.log("general state", state);
  return selectDishModule(state).entities[dishID];
};

export const selectDishIDs = (state) => selectDishModule(state).ids;
