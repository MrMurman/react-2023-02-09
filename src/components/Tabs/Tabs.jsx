import React from "react";
import { Button } from "../Button/Button";
import { Tab } from "../Tab/Tab";
import styles from "./styles.module.css";

export const Tabs = ({ tabs, onTabClick, activeID }) => {
  return (
    <div className={styles.root}>
      {tabs.map(({ title, id }) => (
        <Tab
          title={title}
          onClick={() => onTabClick(id)}
          isActive={activeID === id}
        />
      ))}
    </div>
  );
};
