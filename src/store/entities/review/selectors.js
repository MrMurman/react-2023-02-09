export const selectReviewModule = (state) => state.review;

export const selectReviewByID = (state, { reviewID }) =>
  selectReviewModule(state).entities[reviewID];

export const selectReviewIDs = (state) => selectReviewModule(state).ids;

export const selectReviewUserByID = (state, { reviewID }) => {
  console.log("state inside review selectors", state);
  console.log("reviewID inside review selectors", reviewID);
  console.log(
    "state inside review selectors",
    selectReviewByID(state, { reviewID })
  );
  return selectReviewByID(state, { reviewID })?.userId;
};
