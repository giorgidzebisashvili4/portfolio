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

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div>
        <h2>Skills</h2>
        <p>
          Experienced in building modern web applications and reusable user
          interface components using React.js, Javascript (ES6), TypeScript,
          HTML5, SASS/SCSS, CSS3. Currently learning Node.js, Express.js, and
          MongoDB to connect backend functionality to future applications.
        </p>
      </div>
      <div className="front-end">
        <h3>Front End</h3>
        <div>
          <h4>html</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>css</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>JavaScript</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>React</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Vite</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Sass</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Tailwind</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
      </div>
      <div className="back-tools">
        <h3>Back End</h3>

        <div>
          <h4>NodeJs</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Express</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>MongoDB</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
      </div>
      <div className="development-tools">
        <h3>development Tools</h3>
        <div>
          <h4>git</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>npm</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>webpack</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
      </div>
      <div className="design-tools">
        <h3>Design Tools</h3>
        <div>
          <h4>Figma</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Photoshop</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>Illustrator</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
        <div>
          <h4>After Effects</h4>
          <img src={jsSvg} alt="JavaScript Logo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
