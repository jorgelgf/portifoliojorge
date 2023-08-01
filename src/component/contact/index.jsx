import React from "react";
import styles from "./styles.module.scss";
const Contact = () => {
  return (
    <div className={styles.container}>
      <a href="http://wa.me/5584996222569" target="_blank" rel="noreferrer">
        <div>Whatsapp</div>
      </a>
      <a href="mailto:jlgurgelfernandes@gmail.com" rel="noreferrer">
        <div>E-mail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/jorgelgf/"
        target="_blank"
        rel="noreferrer"
      >
        <div>LinkedIn</div>
      </a>
      <a
        href="https://www.facebook.com/jorgeluisgf/"
        target="_blank"
        rel="noreferrer"
      >
        <div>Facebook</div>
      </a>
    </div>
  );
};

export default Contact;
