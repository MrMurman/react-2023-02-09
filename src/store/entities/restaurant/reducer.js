import { normalizedRestaurants } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
    //  {
    //   ...acc,
    //   [restaurant.id]: restaurant,
    // };

    // usually we create a new obj, because spontaneous mutation is a bad thing
    // but in this case, this temp object is used only inside this func
    // this is why we can actually mutate acc without any problems
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantReducer = (state = initialState, action) => state;
