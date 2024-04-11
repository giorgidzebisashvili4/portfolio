import React from "react";
import styles from "./Skills.module.css";
import jsSvg from "../assets/icons/fornt-end/js.svg";
import html from "../assets/icons/fornt-end/html.svg";
import css from "../assets/icons/fornt-end/css.svg";
import react from "../assets/icons/fornt-end/react.svg";
import sass from "../assets/icons/fornt-end/sass.svg";
import tailwind from "../assets/icons/fornt-end/tailwind.svg";
import vite from "../assets/icons/fornt-end/vite.svg";

import express from "../assets/icons/back-end/express.svg";
import mongoDB from "../assets/icons/back-end/mongoDB.svg";
import nodejs from "../assets/icons/back-end/nodejs.svg";

import git from "../assets/icons/development-tools/git.svg";
import jest from "../assets/icons/development-tools/jest.svg";
import npm from "../assets/icons/development-tools/npm.svg";
import webpack from "../assets/icons/development-tools/webpack.svg";

import figma from "../assets/icons/design-tools/figma.svg";
import aftereffects from "../assets/icons/design-tools/aftereffects.svg";
import illustrator from "../assets/icons/design-tools/illustrator.svg";
import photoshop from "../assets/icons/design-tools/photoshop.svg";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles["skill-header"]}>
        <h2>Skills</h2>
        <p>
          Experienced in building modern web applications and reusable user
          interface components using React.js, Javascript (ES6), TypeScript,
          HTML5, SASS/SCSS, CSS3. Currently learning Node.js, Express.js, and
          MongoDB to connect backend functionality to future applications.
        </p>
      </div>
      <div className={styles["skill-icon"]}>
        <div className={styles["front-end"]}>
          <h3>Front End</h3>
          <div className={styles["front-end-icons"]}>
            <div>
              <h4>html</h4>
              <img src={html} alt="html Logo" />
            </div>
            <div>
              <h4>css</h4>
              <img src={css} alt="css Logo" />
            </div>
            <div>
              <h4>JavaScript</h4>
              <img src={jsSvg} alt="JavaScript Logo" />
            </div>
            <div>
              <h4>React</h4>
              <img src={react} alt="react Logo" />
            </div>
            <div>
              <h4>Vite</h4>
              <img src={vite} alt="vite Logo" />
            </div>
            <div>
              <h4>Sass</h4>
              <img src={sass} alt="sass Logo" />
            </div>
            <div>
              <h4>Tailwind</h4>
              <img src={tailwind} alt="tailwind Logo" />
            </div>
          </div>
        </div>
        <div className="back-tools">
          <h3>Back End</h3>
          <div className={styles["back-end-icons"]}>
            <div>
              <h4>NodeJs</h4>
              <img src={nodejs} alt="nodejs Logo" />
            </div>
            <div>
              <h4>Express</h4>
              <img src={express} alt="express Logo" />
            </div>
            <div>
              <h4>MongoDB</h4>
              <img src={mongoDB} alt="mongoDB Logo" />
            </div>
          </div>
        </div>
        <div className="development-tools">
          <h3>development Tools</h3>
          <div className={styles["development-tools-icons"]}>
            <div>
              <h4>git</h4>
              <img src={git} alt="git Logo" />
            </div>
            <div>
              <h4>npm</h4>
              <img src={npm} alt="npm Logo" />
            </div>
            <div>
              <h4>webpack</h4>
              <img src={webpack} alt="webpack Logo" />
            </div>
            <div>
              <h4>jest</h4>
              <img src={jest} alt="jest Logo" />
            </div>
          </div>
        </div>
        <div className="design-tools">
          <h3>Design Tools</h3>
          <div className={styles["design-tools-icons"]}>
            <div>
              <h4>Figma</h4>
              <img src={figma} alt="figma Logo" />
            </div>
            <div>
              <h4>Photoshop</h4>
              <img src={photoshop} alt="photoshop Logo" />
            </div>
            <div>
              <h4>Illustrator</h4>
              <img src={illustrator} alt="illustrator Logo" />
            </div>
            <div>
              <h4>After Effects</h4>
              <img src={aftereffects} alt="aftereffects Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
