import React from "react";
import { Button } from "../Button/Button";
import { useCount } from "../../hooks/useCount";

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({ max: 6, initialValue: 1 });

  if (!name) {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
        </div>
      </div>
    </div>
  );
};
