import { REQUEST_STATUSES } from "../../../constants/statuses";
import { RESTAURANT_ACTIONS } from "./actions";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.startLoading:
      return { ...state, status: REQUEST_STATUSES.pending };
    case RESTAURANT_ACTIONS.finishLoading:
      return {
        entities: action.payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {}),
        ids: action.payload.map(({ id }) => id),
        status: REQUEST_STATUSES.success,
      };
    case RESTAURANT_ACTIONS.failLoading:
      return { ...state, status: REQUEST_STATUSES.failed };

    default:
      return state;
  }
};
