/* eslint-disable no-unused-vars */
// src/components/About.jsx
import React from "react";
import styles from "./About.module.css";
import myPhoto from "../assets/images/my-photo.jpg";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="about-container">
        <img src={myPhoto} alt="My Photo" />
        <div className="about-text-section">
          <h2>Giorgi Dzebisashvili</h2>
          <h4>React Developer & Graphic Designer</h4>
          <p>
            Hello! I’m Giorgi Dzebisashvili, a versatile creative professional
            passionate about both graphic design and full-stack development.
            With a solid foundation in graphic design, I've crafted engaging
            visuals across diverse industries, refining my eye for detail and
            user-centric design.
            <br />
            <br />
            Driven by a hunger for new challenges, I recently delved into
            full-stack development. Through dedicated learning, I've mastered
            technologies like React.js and begun integrating design principles
            into my coding process. Each project reflects my commitment to
            innovation and my determination to push boundaries.
            <br />
            <br />
            Explore my portfolio to see how I blend creativity with technical
            expertise, creating seamless digital experiences. I’m always open to
            collaboration and eager to discuss how we can turn your ideas into
            reality. Let’s connect and bring your vision to life!
          </p>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default About;
