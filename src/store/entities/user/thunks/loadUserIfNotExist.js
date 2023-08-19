import { userActions } from "..";
import { selectUserIDs } from "../selectors";

export const loadUserIfNotExist = (restaurantID) => (dispatch, getState) => {
  const state = getState();

  const userIds = selectUserIDs(state);

  if (userIds.length) {
    return;
  }

  dispatch(userActions.startLoading());
  fetch("http://localhost:3001/api/users?restaurantId=${restaurantID}/")
    .then((response) => response.json())
    .then((users) => dispatch(userActions.finishLoading(users)))
    .catch(userActions.failLoading());
};
