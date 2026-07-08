import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <article className={styles.content}>
        <p className={styles.greeting}>Hola, soy</p>
        <h1 className={styles.name}>Cristian Mayorga</h1>
        <h2 className={styles.role}>Desarrollador Frontend</h2>
        <p className={styles.description}>
          Desarrollador especializado en la creación de interfaces web
          modernas, escalables y con foco en la experiencia de usuario.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            Ver proyectos
          </a>
          <a href="#" className={styles.secondaryButton} download>
            Descargar CV
          </a>
        </div>
      </article>

      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} />
      </div>
    </section>
  );
}

export default Hero;
