import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <article className={styles.content}>
        <p className={styles.greeting}>Hola, soy</p>
        <h1 className={styles.name}>Cristian Mayorga</h1>
        <h2 className={styles.role}>Desarrollador FullStack</h2>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            Ver proyectos
          </a>
          <a href="#" className={styles.secondaryButton} download>
            Descargar CV
          </a>
        </div>
      </article>
    </section>
  );
}

export default Hero;
