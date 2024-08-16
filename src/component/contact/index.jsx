import React from "react";
import styles from "./styles.module.scss";
import { Contacts } from "../../utils/Contacts.tsx";
export const Contact = () => {
  return (
    <div className={styles.container}>
      {Contacts.map((data) => {
        console.log(data.name);
        return (
          <a key={data.name} href={data.link} target="_blank" rel="noreferrer">
            <div>{data.name}</div>
          </a>
        );
      })}
    </div>
  );
};
