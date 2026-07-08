import { technologyCategories } from "../../constants/technologies";
import styles from "./Technologies.module.css";

function Technologies() {
  return (
    <section id="technologies" className={styles.technologies}>
      <h3 className={styles.subtitle}>Tecnologías</h3>
      <h2 className={styles.title}>Con qué trabajo</h2>
      <p className={styles.description}>
        Estas son algunas de las tecnologías y herramientas que utilizo
        para diseñar, desarrollar y automatizar soluciones de software.
      </p>

      <div className={styles.grid}>
        {technologyCategories.map(({ category, items }) => (
          <article key={category} className={styles.card}>
            <h3 className={styles.cardTitle}>{category}</h3>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
