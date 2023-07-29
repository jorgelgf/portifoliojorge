import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../component/layout/indes";
import Sections from "../../component/sections";
import StylesColor from "../../component/stylesColor";
import { useEffect, useState } from "react";
import Welcome from "../../component/wellcome";
import { projects } from "../../service/projects";
console.log(projects);
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
      <div
        style={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontSize: ".8rem",
        }}
      >
        {projects.map((i, index) => {
          return (
            <a
              href={i.github}
              target="_blank"
              key={index}
              rel="noreferrer"
              style={{ textDecoration: "none", color: "rgb(172, 169, 169)" }}
            >
              {" "}
              <div>
                <h4>{i.name.toUpperCase()}</h4>
                <p style={{ color: "rgb(110, 109, 109)" }}>{i.info}</p>
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
            <p className={styles.name}>Jorge Gurgel</p>{" "}
            <p className={styles.job}>Desenvolvedor Web</p>
            <div className={styles.item}>
              <span onClick={handleClickHome} className={styles.easyAll}>
                {" "}
                {selectHome ? (
                  <p>home</p>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickProject} className={styles.easyAll}>
                {" "}
                {selectProject ? (
                  <p>projeto</p>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickInfo} className={styles.easyAll}>
                {" "}
                {selectInfo ? (
                  <p>info</p>
                ) : (
                  <span style={{ fontSize: "1.5rem" }}>~</span>
                )}
              </span>
              <span onClick={handleClickContact} className={styles.easyAll}>
                {" "}
                {selectContact ? (
                  <p>contatos</p>
                ) : (
                  <span
                    style={{
                      fontSize: "1.5rem",
                      transition: " opacity 1s ease-out",
                    }}
                  >
                    ~
                  </span>
                )}
              </span>
            </div>
          </Sections>
          <Sections
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0rem 1rem 2rem 2rem",
              fontWeight: "600",

              fontSize: ".85rem",
            }}
          >
            {selectProject === false && ShowProject()}
            {selectHome === false && (
              <span style={{ marginBottom: "1rem" }}>
                Nascido em Janduís, Rio Grande do Norte. Sou programador WEB. Eu
                acredito que a tecnologia veio para unir pessoas e negócios
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
