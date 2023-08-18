import { store } from "..";

export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

// export const logger = (store) => {
//   return (next) => {
//     return (action) => {};
//   };
// };

// const loggerWithStore = logger(store);
// const loggerWithStoreAndNext = loggerWithStore(next);
