export const transformRestaurantsToTabs = (restaurants) =>
  restaurants.map(({ name }) => ({ title: name }));
