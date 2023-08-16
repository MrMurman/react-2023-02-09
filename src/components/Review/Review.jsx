import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { SIZE } from "../../constants/size";
import { useSelector } from "react-redux";
import {
  selectReviewByID,
  selectReviewUserByID,
} from "../../store/entities/review/selectors";
import { User } from "../User/User";

export const Review = ({ reviewID }) => {
  const review = useSelector((state) => selectReviewByID(state, { reviewID }));
  const { userId, text, rating } = review;

  console.log(userId);

  return (
    <div className={styles.root}>
      <div>
        <User userID={userId} />
      </div>
      <div>{text}</div>
      <div>
        <Rating value={rating} size={SIZE.s} />
      </div>
    </div>
  );
};
