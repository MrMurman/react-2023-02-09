import React from "react";

import styles from "./styles.module.css";

import StarBlack from "./img/star-black-opt.svg";
import StarGold from "./img/star-gold-opt.svg";
import classNames from "classnames";
import { SIZE } from "../../constants/size";

const MAX_VALUE = 5;

export const Rating = ({
  value,
  onChange,
  size = SIZE.m,
  maxRating = MAX_VALUE,
  className,
}) => {
  // const MIN_VALUE = 1;
  // const MAX_VALUE = 5;
  // let starID = 1;

  // function drawView(rating) {
  //   if (rating < MIN_VALUE || rating > MAX_VALUE) {
  //     return null;
  //   }

  //   let fillerStars = MAX_VALUE - rating;
  //   let totalStars = [];

  //   const className = classNames(styles.root, styles[size]);

  //   for (let i = 1; i <= rating; i++) {
  //     let goldStar = (
  //       <img
  //         src={StarGold}
  //         className={className}
  //         id={starID}
  //         onClick={onChange}
  //       />
  //     );
  //     totalStars.push(goldStar);
  //     starID++;
  //   }

  //   if (fillerStars != 0) {
  //     for (let i = 1; i <= fillerStars; i++) {
  //       let blackStar = (
  //         <img
  //           src={StarBlack}
  //           className={className}
  //           id={starID}
  //           onClick={onChange}
  //         />
  //       );

  //       totalStars.push(blackStar);
  //       starID++;
  //     }
  //   }

  //   return totalStars;
  // }
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating) //creates a new array with 'maxRating' number of elems
          .fill(null) // each elem of the array is set to null
          .map((_, index) => (
            <img
              src={index >= value ? StarBlack : StarGold}
              className={classNames(styles.star, styles[size])}
              onClick={() => onChange?.(index + 1)} //+1 so that rating becomes 1 at index 0
              alt={index >= value ? "black" : "gold"}
            />
          ))}
    </div>
  );
};
