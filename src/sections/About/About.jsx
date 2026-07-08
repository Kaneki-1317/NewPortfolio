import styles from "./About.module.css";

const infoList = [
  { label: "Ubicación", value: "Colombia" },
  { label: "Rol", value: "Desarrollador Full Stack" },
  { label: "Disponibilidad", value: "Disponible" },
  { label: "Experiencia", value: "X años programando" },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} />
      </div>

      <article className={styles.content}>
        <h3 className={styles.subtitle}>Sobre mí</h3>
        <h2 className={styles.title}>Quién soy</h2>

        <p className={styles.paragraph}>
          Soy un desarrollador Full Stack enfocado en construir productos
          web modernos, funcionales y fáciles de mantener.
        </p>
        <p className={styles.paragraph}>
          Me apasiona resolver problemas reales a través del código,
          aprender nuevas tecnologías y mejorar constantemente la
          experiencia de usuario en cada proyecto.
        </p>
        <p className={styles.paragraph}>
          Disfruto trabajar tanto en el frontend como en el backend,
          buscando siempre soluciones limpias y escalables.
        </p>

        <ul className={styles.infoList}>
          {infoList.map(({ label, value }) => (
            <li key={label}>
              <span className={styles.infoLabel}>{label}:</span> {value}
            </li>
          ))}
        </ul>

        <button type="button" className={styles.cvButton}>
          Descargar CV
        </button>
      </article>
    </section>
  );
}

export default About;
