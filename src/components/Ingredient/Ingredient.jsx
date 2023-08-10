import React from "react";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Ingredient = ({ name }) => {
  const [count, setCount] = useState(1);

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
          <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
            -
          </Button>
          {count}
          <Button onClick={() => setCount(count + 1)} disabled={count === 6}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
