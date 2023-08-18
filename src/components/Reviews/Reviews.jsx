import React from "react";
import { Review } from "../Review/Review";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { useSelector } from "react-redux";
import { selectRestaurantReviewsByID } from "../../store/entities/restaurant/selectors";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantID }) => {
  const reviews = useSelector((state) =>
    selectRestaurantReviewsByID(state, { restaurantID })
  );

  return (
    <div>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((reviewID) => (
          <Review className={styles.review} reviewID={reviewID} />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};
