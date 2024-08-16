import React from "react";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { projects } from "../../utils/Projects";
import {
  Contact,
  Info,
  Layout,
  Sections,
  StylesColor,
  Welcome,
} from "../../component";

const Home = () => {
  const [boolWelcome, setBoolWelcome] = useState(true);
  const [selectHome, setSelectHome] = useState(false);
  const [selectProject, setSelectProject] = useState(true);
  const [selectInfo, setSelectInfo] = useState(true);
  const [selectContact, setSelectContact] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBoolWelcome(false);
    }, 3000);
  }, []);

  //obj de estilo - lado direito
  const sectionRight = {
    display: "flex",
    justifyContent: "space-around",
    padding: "0rem 1rem 0rem 2rem",
    fontWeight: "600",
    fontSize: "1rem",
  };
  const sectionRightHome = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0rem 1rem 0rem 2rem",
    fontWeight: "600",
    fontSize: "1rem",
  };

  const handleClickHome = () => {
    setSelectHome(!selectHome);
    setSelectProject(true);
    setSelectContact(true);
    setSelectInfo(true);
  };

  const handleClickProject = () => {
    setSelectHome(true);
    setSelectProject(!selectProject);
    setSelectContact(true);
    setSelectInfo(true);
  };

  const handleClickInfo = () => {
    setSelectHome(true);
    setSelectProject(true);
    setSelectContact(true);
    setSelectInfo(!selectInfo);
  };

  const handleClickContact = () => {
    setSelectHome(true);
    setSelectProject(true);
    setSelectContact(!selectContact);
    setSelectInfo(true);
  };

  const ShowProject = () => {
    return (
      <div className={styles.containerProject}>
        {projects.map((i, index) => {
          return (
            <a
              className={styles.aLink}
              href={i.github}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              <div>
                <h4>{i.name.toUpperCase()}</h4>
                <span style={{ color: "rgb(110, 109, 109)" }}>{i.info}</span>
                <br />
              </div>
            </a>
          );
        })}
      </div>
    );
  };
  return boolWelcome ? (
    <Welcome />
  ) : (
    <>
      <div className={styles.container}>
        <Layout>
          <Sections>
            <span className={styles.name}>Jorge Gurgel</span>
            <span className={styles.job}>Desenvolvedor Web</span>
            <div className={styles.item}>
              <span onClick={handleClickHome} className={styles.easyAll}>
                {selectHome ? (
                  <span>Home</span>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickProject} className={styles.easyAll}>
                {selectProject ? (
                  <span>Projetos</span>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickInfo} className={styles.easyAll}>
                {selectInfo ? (
                  <span>Info</span>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickContact} className={styles.easyAll}>
                {selectContact ? (
                  <span>Contatos</span>
                ) : (
                  <span
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    ~
                  </span>
                )}
              </span>
            </div>
          </Sections>

          <Sections style={selectHome ? sectionRight : sectionRightHome}>
            {selectContact === false && <Contact />}
            {selectInfo === false && <Info />}
            {selectProject === false && ShowProject()}
            {selectHome === false && (
              <span className={styles.mission}>
                Nascido em Janduís, Rio Grande do Norte. Eu acredito que a
                tecnologia veio para unir pessoas e negócios
              </span>
            )}
          </Sections>
        </Layout>
        <StylesColor />
      </div>
    </>
  );
};

export default Home;
