import React from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";

export const RestaurantPage = ({ restaurants }) => {
  const { name, menu, reviews } = restaurants[0];

  const restaurantDishes = menu.map(({ name }) => name).join(" ,");

  const restaurantReviews =
    (reviews.reduce((acc, review) => `${acc}, ${review.text}`), "");

  return (
    <div>
      <Restaurant restaurant={restaurants[0]} />
      <Restaurant restaurant={restaurants[1]} />
      <Restaurant restaurant={restaurants[2]} />
      <Restaurant restaurant={restaurants[3]} />
    </div>

    // <div>
    //   <div>
    //     <h2>{name}</h2>
    //     <div>
    //       <h3>Menu</h3>
    //       <div>{restaurantDishes}</div>
    //     </div>

    //     <div>
    //       <h3>Reviews</h3>
    //       <div>{restaurantReviews}</div>
    //     </div>
    //   </div>
    // </div>
  );
};
