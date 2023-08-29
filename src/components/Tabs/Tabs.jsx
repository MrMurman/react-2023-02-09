import React from "react";
import { Button } from "../Button/Button";
import { Tab } from "../Tab/Tab";
import styles from "./styles.module.css";

export const Tabs = ({ tabs }) => {
  //                 { tabs, onTabClick, activeID }

  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }) => (
        <Tab
          title={title}
          to={id}
          key={id}
          // onClick={() => onTabClick(id)}
          // isActive={activeID === id}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
