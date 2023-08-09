import React from "react";

export const Menu = ({ menu }) => {
  const restaurantDishes = menu.map(({ name }) => name).join(", ");

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
