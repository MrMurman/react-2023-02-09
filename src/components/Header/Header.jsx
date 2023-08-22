import React from "react";

import Logo from "./img/logo.svg";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} />
      </Link>
      <Link to="/restaurants" className={styles.link}>
        Restaurants
      </Link>
      <Link to="/cart" className={styles.link}>
        Cart
      </Link>
    </header>
  );
};

// <Link to="/restaurants">Restaurants</Link>  / "/" before restaurants means it is an
// absolute path to new page. it will remove previous paths
