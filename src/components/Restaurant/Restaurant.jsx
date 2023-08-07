import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurant={restaurant} />
      <Reviews restaurant={restaurant} />
    </div>
  );
};
