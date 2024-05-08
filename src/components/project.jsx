function Project(props) {
  return (
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
            Welcome to the Grid Calculator! One of my earliest projects, this
            endeavor marked the beginning of my journey into mastering front-end
            development fundamentals. Created as a hands-on exercise to delve
            into grid styling, DOM manipulation, and JavaScript essentials, this
            calculator project paved the way for honing crucial skills in
            building interactive web applications. Join me as we revisit the
            foundational stages of web development and explore the core concepts
            that lay the groundwork for future projects.
          </p>
          <p>
            {" "}
            <b>build with: </b>
            <span>javascript</span>
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
  );
}

export default Project;
