import React from "react";
import styles from "./styles.module.scss";

export const Sections = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.containerSection}>
      {children}
    </div>
  );
};
