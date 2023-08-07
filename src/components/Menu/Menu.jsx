import React from "react";

export const Menu = ({ restaurant }) => {
  const { menu } = restaurant;
  const restaurantDishes = menu.map(({ name }) => name).join(", ");

  return (
    <div>
      <h3>Menu</h3>
      <div>{restaurantDishes}</div>
    </div>
  );
};
