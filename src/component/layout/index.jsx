import React from "react";
import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return <div className={styles.containerLayout}>{children}</div>;
};
