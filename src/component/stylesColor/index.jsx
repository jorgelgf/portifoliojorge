import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

//COMPONENTE DE MUDANÇA DE COR

const StylesColor = () => {
  const Navigate = useNavigate();
  let backgroundColor;

  const handleClickDark = () => {
    localStorage.setItem("backgroundColor", "rgb(39, 36, 36)");
    Navigate("/");
  };

  const handleClickLight = () => {
    localStorage.setItem("backgroundColor", "rgb(241, 237, 237)");
    Navigate("/");
  };
  backgroundColor = localStorage.getItem("backgroundColor");

  if (backgroundColor) {
    document.documentElement.style.backgroundColor = backgroundColor;
  }

  return (
    <div className={styles.container}>
      <span onClick={handleClickDark}>
        <div className={`${styles.dark} ${styles.color}`}></div>
        Dark
      </span>
      <span onClick={handleClickLight}>
        <div className={styles.light}></div>
        Light
      </span>
    </div>
  );
};

export default StylesColor;
