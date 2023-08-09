import React from "react";

export const Reviews = ({ reviews }) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(", ");

  return (
    <div>
      <h3>Reviews</h3>
      <div>{restaurantReviews}</div>
    </div>
  );
};
