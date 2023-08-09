import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  const restaurantReviews = reviews.map(({ text }) => text).join(", ");

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(
          (review) =>
            !!review && (
              <li>
                <Review review={review} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};
