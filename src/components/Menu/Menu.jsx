import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((menu) => (
          <li>
            <Dish menu={menu} />
          </li>
        ))}
      </ul>
    </div>
  );
};
