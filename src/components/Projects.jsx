// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import weatherApp from "../assets/project-images/weatherApp.png";
import portfolioPhoto from "../assets/project-images/portfolio.png";
import git from "../assets/icons/btns/git.svg";
import openlink from "../assets/icons/btns/openlink.svg";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div>
        <a href="https://gdzweatherapp.netlify.app/" target="_blank" rel="">
          <img src={weatherApp} alt="My Photo" />
        </a>
        <div className={styles["about-text-section"]}>
          <div className="project-description">
            <h2>wather app</h2>
            <p>
              small description about this project sadasd dads Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi nostrum nesciunt
              sunt aut dolores amet alias earum sint placeat nemo facere
              molestias nam similique atque laudantium, optio et ullam numquam?
            </p>
            <p>
              {" "}
              build with: <span>vite</span>
              <span>react</span>
            </p>
          </div>
          <div className="button-links">
            <a
              href="https://github.com/giorgidzebisashvili4/weather-app"
              target="_blank"
              rel=""
            >
              <img src={git} alt="git" />
            </a>
            <a href="https://gdzweatherapp.netlify.app/" target="_blank" rel="">
              <img src={openlink} alt="live" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://giorgi-dzebisashvili.netlify.app/"
          target="_blank"
          rel=""
        >
          <img src={portfolioPhoto} alt="My Photo" />
        </a>
        <div className={styles["about-text-section"]}>
          <div className="project-description">
            <h2>this portfolio website</h2>
            <p>
              small description about this project sadasd dads Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi nostrum nesciunt
              sunt aut dolores amet alias earum sint placeat nemo facere
              molestias nam similique atque laudantium, optio et ullam numquam?
            </p>
            <p>
              build with: <span>vite</span>
              <span>react</span>
            </p>
          </div>
          <div className="button-links">
            <a
              href="https://github.com/giorgidzebisashvili4/portfolio"
              target="_blank"
              rel=""
            >
              <img src={git} alt="git" />
            </a>
            <a
              href="https://giorgi-dzebisashvili.netlify.app/"
              target="_blank"
              rel=""
            >
              <img src={openlink} alt="live" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
