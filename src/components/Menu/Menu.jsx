import React from "react";
import { Dish } from "../Dish/Dish";
import { useSelector } from "react-redux";
import { selectRestaurantMenuByID } from "../../store/entities/restaurant/selectors";

export const Menu = ({ restaurantID }) => {
  const menu = useSelector((state) =>
    selectRestaurantMenuByID(state, { restaurantID })
  );
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((dishID) => (
          <li>
            <Dish dishID={dishID} />
          </li>
        ))}
      </ul>
    </div>
  );
};
