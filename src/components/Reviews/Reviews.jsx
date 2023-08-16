import React from "react";
import { Review } from "../Review/Review";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { useSelector } from "react-redux";
import { selectRestaurantReviewsByID } from "../../store/entities/restaurant/selectors";

export const Reviews = ({ restaurantID }) => {
  const reviews = useSelector((state) =>
    selectRestaurantReviewsByID(state, { restaurantID })
  );

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((reviewID) => (
          <li>
            <Review reviewID={reviewID} />
          </li>
        ))}
      </ul>
      <NewReviewForm />
    </div>
  );
};
