import React from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({ restaurants }) => {
  return (
    <div>
      <div>
        <div>
          <Restaurant restaurant={restaurants[0]} />
          <Restaurant restaurant={restaurants[1]} />
          <Restaurant restaurant={restaurants[2]} />
          <Restaurant restaurant={restaurants[3]} />
        </div>
      </div>
    </div>
  );
};
