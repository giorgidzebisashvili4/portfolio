import styles from "./Project.module.css";

function Project(props) {
  return (
    <div className={styles["projects-container"]}>
      {props.photo && (
        <a href={props.links.live} target="_blank" rel="">
          <img
            className={styles["projects-photo"]}
            src={props.photo}
            alt={props.title}
          />
        </a>
      )}
      <div className={styles["about-text-section"]}>
        <div className="project-description">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>
            <b>build with: </b>
            {props.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </p>
        </div>
        <div className="button-links">
          {props.icons && (
            <a href={props.links.git} target="_blank" rel="">
              <img
                className={styles["projects-icons"]}
                src={props.icons.git}
                alt="git-icon"
              />
            </a>
          )}
          {props.icons && (
            <a href={props.links.live} target="_blank" rel="">
              <img
                className={styles["projects-icons"]}
                src={props.icons.live}
                alt="live-icon"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
