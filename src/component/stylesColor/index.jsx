import React, { useEffect } from "react";
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

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className={styles.container}>
      <span onClick={handleClickDark}>
        <div className={`${styles.dark}`}></div>
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
