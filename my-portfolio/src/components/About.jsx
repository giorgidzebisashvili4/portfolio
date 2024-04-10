/* eslint-disable no-unused-vars */
// src/components/About.jsx
import React from "react";
import styles from "./About.module.css";
import myPhoto from "../assets/images/my-photo.jpeg";

function About() {
  return (
    <section id="about" className={styles.About}>
      <img src={myPhoto} alt="My Photo" />
      <div className="about-text-section">
        <h2>Giorgi Dzebisashvili</h2>
        <h4>React Developer & Graphic Designer</h4>
        <p>
          Hello! I’m a blend of creativity and technology, transitioning from a
          vibrant career in graphic design to the ever-evolving world of web
          development. My background in business management and years of
          self-taught graphic design have equipped me with a diverse skill set.
          I've created compelling visuals across various platforms and
          industries, utilizing tools like Adobe Photoshop, Illustrator, After
          Effects, and Figma.
          <br />
          <br />
          Driven by a passion for continuous learning, I've recently expanded my
          expertise into software development, completing a course in React.js.
          This new journey leverages my design acumen, allowing me to integrate
          user-centric designs with functional development. I’m adaptable, quick
          to learn, and eager to apply my skills in a full-stack developer role.
          <br />
          <br />
          I’m looking for opportunities to blend my creative design and
          technical skills to create impactful digital solutions.
        </p>
        <button>Contact me</button>
      </div>
    </section>
  );
}

export default About;