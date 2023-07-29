import React from "react";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return <div className={styles.containerLayout}>{children}</div>;
};

export default Layout;
