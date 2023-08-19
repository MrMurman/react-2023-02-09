import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { SIZE } from "../../constants/size";
import { useSelector } from "react-redux";
import {
  selectIsReviewLoading,
  selectReviewByID,
  selectReviewUserByID,
} from "../../store/entities/review/selectors";
import { User } from "../User/User";
import classNames from "classnames";

export const Review = ({ reviewID, className }) => {
  const review = useSelector((state) => selectReviewByID(state, { reviewID }));

  const isLoading = useSelector(selectIsReviewLoading);

  if (!review) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }
  // why there is no review at when the view is drawn??????????????????????
  const { userId, text, rating } = review;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <User userID={userId} />
        <Rating value={rating} size={SIZE.s} />
      </div>

      <div>{text}</div>
    </div>
  );
};
