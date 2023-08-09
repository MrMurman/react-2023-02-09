import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {!!reviews.length && <Menu menu={menu} />}
      {reviews.length ? <Reviews reviews={reviews} /> : null}
    </div>
  );
};
