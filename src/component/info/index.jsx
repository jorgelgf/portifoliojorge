import React from "react";
import styles from "./styles.module.scss";

const Info = () => {
  return (
    <div className={styles.containerInfo}>
      <div>
        <div>
          <i className={styles.startText}>
            Um entusiasta da tecnologia apaixonado pelo desenvolvimento web!
          </i>
        </div>
        <br />
        <div>
          Minha trajetória é marcada por uma formação em redes de computadores e
          um curso técnico em eletrônica, mas é como desenvolvedor web que
          encontrei minha verdadeira paixão.
        </div>
      </div>
      <br />
      <div>
        Atualmente, estou cursando uma pós em engenharia de software,
        aprofundando meus conhecimentos e habilidades para criar experiências
        incríveis na web.
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
        Estou animado para explorar novos desafios e oportunidades no mundo da
        tecnologia como desenvolvedor web!
        <br />
        <br />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          Jorge Gurgel
        </div>
      </div>
    </div>
  );
};

export default Info;
