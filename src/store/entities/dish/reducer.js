import { REQUEST_STATUSES } from "../../../constants/statuses";
import { DISH_ACTIONS } from "./actions";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const dishReducer = (state = initialState, action) => {
  switch (action?.type) {
    case DISH_ACTIONS.startLoading:
      return { ...state, status: REQUEST_STATUSES.pending };
    case DISH_ACTIONS.finishLoading:
      return {
        entities: {
          ...state.entities,
          ...action.payload.reduce((acc, product) => {
            acc[product.id] = product;

            return acc;
          }, {}),
        },
        ids: Array.from(
          new Set([...state.ids, action.payload.map(({ id }) => id)])
        ),
        status: REQUEST_STATUSES.success,
      };
    case DISH_ACTIONS.failLoading:
      return { ...state, status: REQUEST_STATUSES.failed };

    default:
      return state;
  }
};
