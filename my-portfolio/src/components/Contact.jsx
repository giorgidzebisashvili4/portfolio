// src/components/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import call from "../assets/icons/contact/call.svg";
import mail from "../assets/icons/contact/mail.svg";
import git from "../assets/icons/contact/git.svg";
import linkedin from "../assets/icons/contact/linkedin.svg";


function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <h2>Want to get in touch?</h2>
        <div className={styles["contact-links"]}>
          <div>
            <div className={styles.btn}>
              <img src={call} alt="mail" />
              <a href="" target="_blank" rel="">
                +995 598 60 41 39
              </a>
            </div>
            <div className={styles.btn}>
              <img src={mail} alt="mail" />
              <a href="" target="_blank" rel="">
                giorgidzebisashvili4@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className={styles.btn}>
              <a
                href="https://www.linkedin.com/in/giorgi-dzebisashvili-612bbb180/"
                target="_blank"
                rel=""
              >
                <img src={linkedin} alt="mail" />
              </a>
              <a
                href="https://www.linkedin.com/in/giorgi-dzebisashvili-612bbb180/"
                target="_blank"
                rel=""
              >
                linkedin
              </a>
            </div>
            <div className={styles.btn}>
              <a
                href="https://github.com/giorgidzebisashvili4"
                target="_blank"
                rel=""
              >
                <img src={git} alt="mail" />
              </a>
              <a
                href="https://github.com/giorgidzebisashvili4"
                target="_blank"
                rel=""
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
