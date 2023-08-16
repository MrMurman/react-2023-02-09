import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/entities/restaurant/selectors";
import { Tabs } from "../../components/Tabs/Tabs";

export const RestaurantTabs = ({ onTabClick, activeID }) => {
  const restaurants = useSelector(selectRestaurants);

  const restaurantTabs = restaurants.map(({ id, name }) => ({
    id,
    title: name,
  }));
  return (
    <Tabs tabs={restaurantTabs} onTabClick={onTabClick} activeID={activeID} />
  );
};
