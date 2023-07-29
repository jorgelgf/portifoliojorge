import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.fullName} ${
          isVisible ? styles["animate-text"] : ""
        }`}
        style={{
          transition: isVisible ? "opacity 1s ease-out" : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        Jorge Gurgel
      </div>
      <div
        className={`${styles.job} ${isVisible ? styles["animate-text"] : ""}`}
        style={{
          transition: isVisible ? "opacity 1s ease-out" : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        portfólio
      </div>
    </div>
  );
};

export default Welcome;
