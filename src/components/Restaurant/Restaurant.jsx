import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { Reviews } from "../../components/Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantByID } from "../../store/entities/restaurant/selectors";
import { Link, Outlet, Route, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tabs } from "../Tabs/Tabs";

export const Restaurant = () => {
  // we used to have restaurantID passed down as props, but now we use hook to receive it
  const { restaurantID } = useParams(); // here should be passed the exact placeholder text from path

  const restaurant = useSelector((state) =>
    selectRestaurantByID(state, { restaurantID })
  );

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  const restaurantTabs = ["Menu", "Reviews"].map((name) => ({
    id: name.toLowerCase(),
    title: name,
  }));

  // const restaurantTabs2 = [
  //   {
  //     id: "menu",
  //     title: "Menu",
  //   },
  //   {
  //     id: "reviews",
  //     title: "Reviews",
  //   },
  // ];

  return (
    <div>
      <h2>{name}</h2>
      <span>
        <Tabs tabs={restaurantTabs} />
        {/* <Link to="menu">
          <Button>Menu</Button>
        </Link>
        <Link to="reviews">
          <Button>Reviews</Button>
        </Link> */}
      </span>

      <Outlet />
      {/* <Menu restaurantID={restaurantID} /> */}
      {/* <Reviews restaurantID={restaurantID} /> */}
    </div>
  );
};
