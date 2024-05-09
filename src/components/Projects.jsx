// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import weatherApp from "../assets/project-images/weatherApp.png";
import portfolioPhoto from "../assets/project-images/portfolio.png";
import calculator from "../assets/project-images/calculator.png";
import git from "../assets/icons/btns/git.svg";
import openlink from "../assets/icons/btns/openlink.svg";
import Project from "./Project";

let weatherAppData = {
  title: "Weather App",
  description:
    "Welcome to the Minimalist Weather App! This project serves as a practice ground for honing React skills and mastering API requests. With React and Vite at its core, this simple yet effective application offers a hands-on opportunity to explore API integration while delivering essential weather information in a clean, minimalist interface. Explore weather forecasts with me as I dive into React and API requests.",
  technologies: ["Vite", "React", "Flexbox"],
  links: {
    git: "https://github.com/giorgidzebisashvili4/weather-app",
    live: "https://weatherapp-gdz.netlify.app/",
  },
  photo: weatherApp,
  icons: {
    git: git,
    live: openlink,
  },
};

let portfolioData = {
  title: "My Portfolio",
  description:
    "Explore my minimalist portfolio website, crafted with simplicity in mind, this platform serves as a window into my professional journey, showcasing my background, skills, and projects. Crafted with React and Vite, it embodies modern web development principles while offering a seamless and intuitive user experience.Feel free to browse through my portfolio to learn more about my journey and expertise.",
  technologies: ["Vite", "React"],
  links: {
    git: "https://github.com/giorgidzebisashvili4/portfolio",
    live: "https://giorgi-dzebisashvili.netlify.app/",
  },
  photo: portfolioPhoto,
  icons: {
    git: git,
    live: openlink,
  },
};
let calculatorData = {
  title: "Calculator",
  description:
    "Welcome to the Grid Calculator! One of my earliest projects, this endeavor marked the beginning of my journey into mastering front-end development fundamentals. Created as a hands-on exercise to delve into grid styling, DOM manipulation, and JavaScript essentials, this calculator project paved the way for honing crucial skills in building interactive web applications. Join me as we revisit the foundational stages of web development and explore the core concepts that lay the groundwork for future projects.",
  technologies: ["JavaScript", "DOM", "Grid"],
  links: {
    git: "https://github.com/giorgidzebisashvili4/calculator",
    live: "https://giorgidzebisashvili4.github.io/calculator/",
  },
  photo: calculator,
  //live behove icons as it is
  icons: {
    git: git,
    live: openlink,
  },
};

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h2 className={styles["projects-title"]}>My Projects</h2>
        <Project {...weatherAppData} />
        <Project {...portfolioData} />
        <Project {...calculatorData} />
      </div>
    </section>
  );
}

export default Projects;
