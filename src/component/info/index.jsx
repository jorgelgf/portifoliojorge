import React from "react";
import styles from "./styles.module.scss";

export const Info = () => {
  return (
    <session className={styles.containerInfo}>
      <div>
        <div>
          <i className={styles.startText}>
            Um entusiasta da tecnologia apaixonado pelo desenvolvimento web!
          </i>
        </div>
        <br />
        <div>
          Minha trajetória profissional começou com um curso superior em redes
          de computadores e um técnico em eletrônica. No entanto, foi como
          desenvolvedor web que encontrei minha verdadeira paixão.
        </div>
      </div>
      <br />
      <div>
        Recentemente, concluí uma pós-graduação em Engenharia de Software e,
        atualmente, estou cursando uma pós-graduação em Desenvolvimento
        Fullstack para expandir ainda mais meus conhecimentos e habilidades na
        área.
      </div>
      <br />
      <div>
        Além do mundo da tecnologia, sou um amante de felinos, compartilho minha
        vida com dois gatos adoráveis e minha esposa que é o meu pilar de apoio
        nessa jornada de crescimento.
      </div>
      <br />
      <div>
        Meu coração e minha mente estão sempre focados em inovar e aprimorar
        minhas habilidades, buscando sempre unir pessoas e negócios através das
        tecnologias.
      </div>
      <br />
      <div>
        Estou sempre animado para explorar novos desafios e oportunidades no
        mundo da tecnologia como desenvolvedor web!
        <br />
        <br />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          Jorge Gurgel
        </div>
      </div>
    </session>
  );
};
