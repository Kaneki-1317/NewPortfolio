import { projects } from "../../constants/projects";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h3 className={styles.subtitle}>Proyectos</h3>
      <h2 className={styles.title}>Proyectos destacados</h2>
      <p className={styles.description}>
        Una selección de proyectos en los que he aplicado mis habilidades
        como desarrollador para resolver problemas reales.
      </p>

      <div className={styles.list}>
        {projects.map(({ id, title, description, image, technologies }) => (
          <article key={id} className={styles.card}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>

              <ul className={styles.techList} aria-label={`Tecnologías usadas en ${title}`}>
                {technologies.map((tech) => (
                  <li key={tech} className={styles.techBadge}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <button type="button" className={styles.primaryButton}>
                  Ver proyecto
                </button>
                <button type="button" className={styles.secondaryButton}>
                  GitHub
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
