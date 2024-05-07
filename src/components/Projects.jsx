// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import weatherApp from "../assets/project-images/weatherApp.png";
import portfolioPhoto from "../assets/project-images/portfolio.png";
import calculator from "../assets/project-images/calculator.png";
import git from "../assets/icons/btns/git.svg";
import openlink from "../assets/icons/btns/openlink.svg";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h2>My Projects</h2>
        <div className={styles["projects-container"]}>
          <a href="https://weatherapp-gdz.netlify.app/" target="_blank" rel="">
            <img src={weatherApp} alt="weatherapp-screenshot" />
          </a>
          <div className={styles["about-text-section"]}>
            <div className="project-description">
              <h2>wather app</h2>
              <p>
                Welcome to the Minimalist Weather App! This project serves as a
                practice ground for honing React skills and mastering API
                requests. With React and Vite at its core, this simple yet
                effective application offers a hands-on opportunity to explore
                API integration while delivering essential weather information
                in a clean, minimalist interface. Explore weather forecasts with
                me as I dive into React and API requests.
              </p>
              <p>
                {" "}
                build with: <span>vite</span>
                <span>react</span> <span>flexbox</span>
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
              <a
                href="https://weatherapp-gdz.netlify.app/"
                target="_blank"
                rel=""
              >
                <img src={openlink} alt="live" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles["projects-container"]}>
          <a
            href="https://giorgi-dzebisashvili.netlify.app/"
            target="_blank"
            rel=""
          >
            <img src={portfolioPhoto} alt="portfolio-screenshot" />
          </a>
          <div className={styles["about-text-section"]}>
            <div className="project-description">
              <h2>this portfolio website</h2>
              <p>
                Explore my minimalist portfolio website, crafted with simplicity
                in mind, this platform serves as a window into my professional
                journey, showcasing my background, skills, and projects. Crafted
                with React and Vite, it embodies modern web development
                principles while offering a seamless and intuitive user
                experience.Feel free to browse through my portfolio to learn
                more about my journey and expertise.
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
        <div className={styles["projects-container"]}>
          <a
            href="https://giorgidzebisashvili4.github.io/calculator/"
            target="_blank"
            rel=""
          >
            <img src={calculator} alt="calculator-screenshot" />
          </a>
          <div className={styles["about-text-section"]}>
            <div className="project-description">
              <h2>Calculator</h2>
              <p>
                Welcome to the Grid Calculator! One of my earliest projects,
                this endeavor marked the beginning of my journey into mastering
                front-end development fundamentals. Created as a hands-on
                exercise to delve into grid styling, DOM manipulation, and
                JavaScript essentials, this calculator project paved the way for
                honing crucial skills in building interactive web applications.
                Join me as we revisit the foundational stages of web development
                and explore the core concepts that lay the groundwork for future
                projects.
              </p>
              <p>
                {" "}
                build with: <span>javascript</span>
                <span>DOM</span> <span>grid</span>
              </p>
            </div>
            <div className="button-links">
              <a
                href="https://github.com/giorgidzebisashvili4/calculator"
                target="_blank"
                rel=""
              >
                <img src={git} alt="git" />
              </a>
              <a
                href="https://giorgidzebisashvili4.github.io/calculator/"
                target="_blank"
                rel=""
              >
                <img src={openlink} alt="live" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
