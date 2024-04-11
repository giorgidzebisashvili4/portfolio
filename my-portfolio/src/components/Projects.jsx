// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import weatherApp from "../assets/project-images/weatherApp.png";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <img src={weatherApp} alt="My Photo" />
      <div className="about-text-section">
        <h2>wather app</h2>
        <p>small description about this project</p>
        <p>tooles used: sass, react, webpack</p>
        <div className="button-links">
          <a href="" target="_blank" rel="">
            <img src="" alt="git" />
          </a>
          <a href="" target="_blank" rel="">
            <img src="" alt="live" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
