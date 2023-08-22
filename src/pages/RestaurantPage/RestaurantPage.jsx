import React, { useEffect, useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Cart } from "../../components/Cart/Cart";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIDs,
} from "../../store/entities/restaurant/selectors";
import { loadRestaurantsAction } from "../../store/entities/restaurant";
import {
  loadRestaurantIfNotExist,
  loadRestaurantIfNotExistAsync,
} from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExist";
import { loadUserIfNotExist } from "../../store/entities/user/thunks/loadUserIfNotExist";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {
  const dispatch = useDispatch();
  // const restaurantIds = useSelector(selectRestaurantIDs);
  // const [activeRestaurantID, setActiveRestaurantID] = useState(
  //   restaurantIds[0]
  // );

  const isLoading = useSelector(selectIsRestaurantLoading);
  // const isLoaded = useSelector(selectIsRestaurantLoaded);

  useEffect(() => {
    dispatch(loadRestaurantIfNotExistAsync());
  }, []);

  // useEffect(() => {
  //   if (isLoaded) {
  //     setActiveRestaurantID(restaurantIds[0]);
  //   }
  // }, [isLoaded]);

  // if (!activeRestaurantID) {
  //   return null;
  // }

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className={styles.root}>
      <RestaurantTabs
      // activeID={activeRestaurantID}
      // onTabClick={setActiveRestaurantID}
      />
      <Outlet />
      {/* {activeRestaurantID && <Restaurant restaurantID={activeRestaurantID} />} */}
    </div>
  );
};
