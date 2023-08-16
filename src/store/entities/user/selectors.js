export const selectUserModule = (state) => state.user;

export const selectUserByID = (state, { userID }) =>
  selectUserModule(state).entities[userID];

export const selectUserIDs = (state) => selectUserModule(state).ids;
