import React, { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Button } from "../../components/Button/Button";
import { Tabs } from "../../components/Tabs/Tabs";
import { transformRestaurantsToTabs } from "../../components/utils/transformRestaurantsToTabs";
import { Cart } from "../../components/Cart/Cart";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { useSelector } from "react-redux";
import { selectRestaurantIDs } from "../../store/entities/restaurant/selectors";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIDs);
  const [activeRestaurantID, setActiveRestaurantID] = useState(
    restaurantIds[0]
  );

  if (!activeRestaurantID) {
    return null;
  }

  return (
    <div>
      <RestaurantTabs
        activeID={activeRestaurantID}
        onTabClick={setActiveRestaurantID}
      />
      {activeRestaurantID && <Restaurant restaurantID={activeRestaurantID} />}
      <Cart />
    </div>
  );
};
