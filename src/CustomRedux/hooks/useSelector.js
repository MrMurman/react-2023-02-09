import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/context";

export const useSelector = (select) => {
  const store = useContext(StoreContext);
  const [value, setValue] = useState(() => select(store.getState()));

  useEffect(() => {
    const callback = (state) => setValue(select(state));
    store.subscribe(callback);

    return () => {
      //clean-up func. Is used when component is destroyed or when state is changed
      store.unsubscribe(callback);
    };
  }, [store]);

  return value;
};
