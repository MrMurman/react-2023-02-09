import React from "react";

export const Reviews = ({ restaurant }) => {
  const { reviews } = restaurant;
  const restaurantReviews = reviews.map(({ text }) => text).join(", ");

  return;
  // React.cloneElement("div", {
  //   children: [
  //     React.createElement("h3", { children: "Reviews" }),
  //     React.createElement("div", { children: { restaurantReviews } }),
  //   ],
  // });
  <div>
    <h3>Reviews</h3>
    <div>{restaurantReviews}</div>
  </div>;
};
