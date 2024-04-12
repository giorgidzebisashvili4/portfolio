// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import weatherApp from "../assets/project-images/weatherApp.png";
import git from "../assets/icons/btns/git.svg";
import openlink from "../assets/icons/btns/openlink.svg";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <img src={weatherApp} alt="My Photo" />
      <div className={styles["about-text-section"]}>
        <div className="project-description">
          <h2>wather app</h2>
          <p>
            small description about this project sadasd dads Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Excepturi nostrum nesciunt
            sunt aut dolores amet alias earum sint placeat nemo facere molestias
            nam similique atque laudantium, optio et ullam numquam?
          </p>
          <p>tooles used: sass, react, webpack</p>
        </div>
        <div className="button-links">
          <a href="" target="_blank" rel="">
            <img src={git} alt="git" />
          </a>
          <a href="" target="_blank" rel="">
            <img src={openlink} alt="live" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
