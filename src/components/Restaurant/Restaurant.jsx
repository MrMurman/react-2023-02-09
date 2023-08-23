import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantByID } from "../../store/entities/restaurant/selectors";
import { useParams } from "react-router-dom";

export const Restaurant = () => {
  // we used to have restaurantID passed down as props, but now we use hook to receive it
  const { restaurantID } = useParams(); // here should be passed the exact placeholder text from path

  const restaurant = useSelector((state) =>
    selectRestaurantByID(state, { restaurantID })
  );

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantID={restaurantID} />
      <Reviews restaurantID={restaurantID} />
    </div>
  );
};
