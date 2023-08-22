import {
  createAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadRestaurantIfNotExistAsync } from "./thunks/loadRestaurantIfNotExist";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

const example1 = {
  id: "adasdas",
  // other
};

const example2 = {
  filmID: "dasdda",
  ///dsds
};

// standard entities are those with ID being "id" and not some form lik "movieId"

const restaurantEntityAdapter = createEntityAdapter();
// {
// selectId: ({ filmID }) => filmID, // this option is only used when entity id is not standard
//sortComparer: (a, b) =>  / is required when there is a need to compare something inside entity
//}

export const restaurantSlice = createSlice({
  name: "restaurant",
  //initialState,
  initialState: restaurantEntityAdapter.getInitialState({
    status: REQUEST_STATUSES.idle,
  }),
  // if nothing is passed inside getInitialState, it returns an object like on line 9, but without status
  // if u need to add other properties, pass them inside th call of the function

  // reducers: {
  //   startLoading: (state) => {
  //     state.status = REQUEST_STATUSES.pending;
  //   },
  //   failLoading: (state) => {
  //     state.status = REQUEST_STATUSES.failed;
  //   },
  //   finishLoading: (state, { payload }) => {
  //     state.entities = payload.reduce((acc, restaurant) => {
  //       acc[restaurant.id] = restaurant;

  //       return acc;
  //     }, {});
  //     state.ids = payload.map(({ id }) => id);
  //     state.status = REQUEST_STATUSES.success;
  //   },
  // },

  // async thunks create actions on their own automatically, hence no need to impalement reducers

  extraReducers: (build) =>
    build
      .addCase(loadRestaurantIfNotExistAsync.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(loadRestaurantIfNotExistAsync.rejected, (state, { payload }) => {
        state.status =
          payload === REQUEST_STATUSES.earlyLoaded
            ? REQUEST_STATUSES.success
            : REQUEST_STATUSES.failed;
      })
      .addCase(
        loadRestaurantIfNotExistAsync.fulfilled,
        (state, { payload }) => {
          // state.entities = payload.reduce((acc, restaurant) => {
          //   acc[restaurant.id] = restaurant;

          //   return acc;
          // }, {});
          // state.ids = payload.map(({ id }) => id);

          restaurantEntityAdapter.setAll(state, payload);
          // all in all, entity adapter is another lvl of abstraction and hides the implementation above
          state.status = REQUEST_STATUSES.success;
        }
      ),
});

export const restaurantActions = {
  ...restaurantSlice.actions,
  loadRestaurantsAction: createAction("restaurant/load"),
};
// export const loadRestaurantsAction = createAction("restaurant/load");
