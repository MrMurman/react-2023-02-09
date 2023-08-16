import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantByID } from "../../store/entities/restaurant/selectors";

export const Restaurant = ({ restaurantID }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantByID(state, { restaurantID })
  );

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantID={restaurantID} />
      <Reviews restaurantID={restaurantID} />
    </div>
  );
};
