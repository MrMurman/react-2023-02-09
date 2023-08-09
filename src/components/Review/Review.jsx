import React from "react";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <React.Fragment>
      <div>{user}</div>
      <div>{text}</div>
      <div>{rating}</div>
    </React.Fragment>
  );
};
