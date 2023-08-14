import React from "react";

import StarBlack from "./img/star-black-opt.svg";
import StarGold from "./img/star-gold-opt.svg";

export const Rating = (value, onChange, size) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 5;

  function drawView(rating) {
    if (rating < 1 || rating > 5) {
      return null;
    }

    let fillerStars = MAX_VALUE - rating;
    let totalStars = [];

    for (let i = 1; i <= rating; i++) {
      let goldStar = <img src={StarGold} />;
      totalStars.push(goldStar);
    }

    if (fillerStars != 0) {
      for (let i = 1; i <= fillerStars; i++) {
        let blackStar = <img src={StarBlack} />;
        totalStars.push(blackStar);
      }
    }

    return totalStars;
  }
  return <div>{drawView(value)}</div>;
};
