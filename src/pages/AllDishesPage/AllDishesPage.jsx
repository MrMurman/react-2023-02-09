import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDishes,
  selectDishesFilteredByName,
  selectDishesFilteredByNameTwo,
  selectIsDishLoading,
} from "../../store/entities/dish/selectors";
import { loadAllDishes } from "../../store/entities/dish/thunks/loadAllDishes";
import { Dish } from "../../components/Dish/Dish";
import { useSearchParams } from "react-router-dom";

export const AllDishesPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(loadAllDishes());
  }, []);

  //     selectDishesFilteredByName({
  //       searchValue: searchParams.get("search") || "",
  //     })
  //   );
  const [searchParams, setSearchParams] = useSearchParams();

  const dishesOne = useSelector(selectDishes);
  const dishesTwo = useSelector((state) => selectDishes(state));
  // useSelector -> state to the given func, so u don't have to explicitly pass to the function
  // hence these two lines are identical. However, when u use something that expects 2 items, u
  // cant omit them. this is why in filter wrapper I had to explicitly pass both state and action

  //   const dishesThree = useSelector(
  //     selectDishesFilteredByNameTwo({
  //       searchValue: searchParams.get("search") || "",
  //     })
  //   );

  const dishes = useSelector((state) =>
    selectDishesFilteredByName(state, {
      searchValue: searchParams.get("search") || "",
    })
  );

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  return (
    <div>
      <h3>All Dishes</h3>
      <input
        value={searchParams.get("search") || ""}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      <div>
        {dishes.map((dishID) => {
          console.log(dishID);
          return <Dish dishID={dishID.id} />;
        })}
      </div>
    </div>
  );
};
