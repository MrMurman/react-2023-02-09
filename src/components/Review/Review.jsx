import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div className={styles.root}>
      <div>{user}</div>
      <div>{text}</div>
      <div>
        <Rating value={rating} />
      </div>
    </div>
  );
};
