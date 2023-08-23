import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurants,
  selectRestaurantsFilteredByName,
} from "../../store/entities/restaurant/selectors";
import { Tabs } from "../../components/Tabs/Tabs";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabs = () =>
  //                          { onTabClick, activeID }
  {
    // const [value, setValue] = useState(""); / this is default imp of input component values
    const [searchParams, setSearchParams] = useSearchParams();
    // this specific search hook is used to represent search values inside URL
    // page refresh doesn't affect URL

    const restaurants = useSelector((state) =>
      selectRestaurantsFilteredByName(state, {
        searchValue: searchParams.get("search") || "",
      })
    );
    // it works as fast as f*ck. In case of real usage with backend debounces are required
    // so that server won't be DDoSed

    const restaurantTabs = restaurants.map(({ id, name }) => ({
      id,
      title: name,
    }));
    return (
      <div>
        <input
          value={searchParams.get("search") || ""}
          onChange={(event) => setSearchParams({ search: event.target.value })}
        />
        <Tabs
          tabs={restaurantTabs}
          //  onTabClick={onTabClick} activeID={activeID}
        />
      </div>
    );
  };
