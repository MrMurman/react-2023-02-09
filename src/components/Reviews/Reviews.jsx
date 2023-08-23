import React, { useEffect } from "react";
import { Review } from "../Review/Review";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsByID } from "../../store/entities/restaurant/selectors";
import styles from "./styles.module.css";
import { loadReviewIfNotExist } from "../../store/entities/review/thunks/loadReviewIfNotExist";
import { selectIsReviewLoading } from "../../store/entities/review/selectors";
import { loadUserIfNotExist } from "../../store/entities/user/thunks/loadUserIfNotExist";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { restaurantID } = useParams();
  console.log(restaurantID);

  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    selectRestaurantReviewsByID(state, { restaurantID })
  );

  useEffect(() => {
    dispatch(loadReviewIfNotExist(restaurantID));
  }, [restaurantID]);

  const isLoading = useSelector(selectIsReviewLoading);

  //console.log("reviews in Reviews", reviews);

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((reviewID) => (
          <Review className={styles.review} reviewID={reviewID} />
        ))}
      </div>
      {/* <NewReviewForm /> */}
    </div>
  );
};
