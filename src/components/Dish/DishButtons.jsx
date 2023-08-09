import React from "react";
import { Button } from "../Button/Button";

export const DishButtons = ({ selectedNumbersOfDishes, onClick }) => {
  const handleClick = (increase) => () => {
    onClick(increase);
  };

  return (
    <>
      <Button
        children={"-"}
        onClick={handleClick(false)}
        disabled={selectedNumbersOfDishes == 0 ? true : false}
      />

      {selectedNumbersOfDishes}

      <Button
        children={"+"}
        onClick={handleClick(true)}
        disabled={selectedNumbersOfDishes == 6 ? true : false}
      />
    </>
  );
};
