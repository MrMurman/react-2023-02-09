import { useContext } from "react";
import { StoreContext } from "../contexts/context";

export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch.bind(store);
};
