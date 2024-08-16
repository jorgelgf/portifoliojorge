import React from "react";
import styles from "./styles.module.scss";
import { Contacts } from "../../utils/Contacts.tsx";
export const Contact = () => {
  return (
    <div className={styles.container}>
      {Contacts.map((data) => {
        return (
          <a key={data.name} href={data.lin} target="_blank" rel="noreferrer">
            <div>{data.name}</div>
          </a>
        );
      })}
    </div>
  );
};
