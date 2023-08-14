import React from "react";

import styles from "./styles.module.css";

import StarBlack from "./img/star-black-opt.svg";
import StarGold from "./img/star-gold-opt.svg";
import classNames from "classnames";
import { SIZE } from "../../constants/size";

export const Rating = ({ value = 1, onChange, size = SIZE.m }) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 5;
  let starID = 1;

  function drawView(rating) {
    if (rating < MIN_VALUE || rating > MAX_VALUE) {
      return null;
    }

    let fillerStars = MAX_VALUE - rating;
    let totalStars = [];

    const className = classNames(styles.root, styles[size]);

    for (let i = 1; i <= rating; i++) {
      let goldStar = (
        <img
          src={StarGold}
          className={className}
          id={starID}
          onClick={onChange}
        />
      );
      totalStars.push(goldStar);
      starID++;
    }

    if (fillerStars != 0) {
      for (let i = 1; i <= fillerStars; i++) {
        let blackStar = (
          <img
            src={StarBlack}
            className={className}
            id={starID}
            onClick={onChange}
          />
        );

        totalStars.push(blackStar);
        starID++;
      }
    }

    return totalStars;
  }
  return <div>{drawView(value)}</div>;
};
