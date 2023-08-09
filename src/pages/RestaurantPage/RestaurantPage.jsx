import React, { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Button } from "../../components/Button/Button";

export const RestaurantPage = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  const activeRestaurant = restaurants[activeRestaurantIndex];

  if (!activeRestaurant) {
    return null;
  }

  return (
    <div>
      {restaurants.map(({ name }) => (
        <Button children={name} onClick={setActiveRestaurantIndex} />
      ))}
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
