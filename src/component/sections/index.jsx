import React from "react";
import styles from "./styles.module.scss";

const Sections = ({ children, style }) => {
  return (
    <div style={style} className={styles.containerSection}>
      {children}
    </div>
  );
};

export default Sections;
