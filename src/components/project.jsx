import styles from "./Projects.module.css";

function Project(props) {
  return (
    <div className={styles["projects-container"]}>
      {props.photo && (
        <a href={props.link} target="_blank" rel="">
          <img src={props.photo} alt={props.title} />
        </a>
      )}
      <div className={styles["about-text-section"]}>
        <div className="project-description">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>
            <b>build with: </b>
            {props.techs?.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </p>
        </div>
        <div className="button-links">
          {props.git && (
            <a href={props.git} target="_blank" rel="">
              <img src={git} alt="git" />
            </a>
          )}
          {props.link && (
            <a href={props.link} target="_blank" rel="">
              <img src={openlink} alt="live" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
