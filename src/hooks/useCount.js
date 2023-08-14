import { useCallback, useState } from "react";

export const useCount = ({ initialValue = 0, min = 0, max } = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(
    () => count < max && setCount(count + 1),
    [count, max]
  );
  // this callback works as follows: it takes in a function + an array of dependencies
  // then when called, looks for deps, and creates a link to the created func
  // when page re-renders, function is passed again, arguments are calculated
  // then it checks deps from prev round and this round, in case no diff, link is kept, otherwise a new link is generated
  // NOTE, a function is created anyway, but link is not

  const increment2 = useCallback(
    () =>
      setCount((currentCount) =>
        currentCount < max ? currentCount + 1 : currentCount
      ),
    [max]
  );

  // alternative version of hook -- instead of accepting external value and creating a dep
  // it accepts a func that checks current state and if it changes, then it updates itself
  // without re-creating a new link. Thus this func becomes even more stable

  return {
    count: count, // if both key and value have same name, u can state once like -- count
    decrement: () => count > min && setCount(count - 1), // when && used, returns 2nd value, i.e function
    increment: increment, // again, I could write increment once
  };
};
// purposefully left out 1 unstable link (decrement) to see diff in implementation
