import { contactInfo } from "../../constants/contactInfo";
import styles from "./Contact.module.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className={styles.contact}>
      <h3 className={styles.subtitle}>Contacto</h3>
      <h2 className={styles.title}>Hablemos</h2>
      <p className={styles.description}>
        ¿Tienes un proyecto en mente o quieres conversar? Escríbeme y te
        responderé lo antes posible.
      </p>

      <div className={styles.grid}>
        <article className={styles.info}>
          <ul className={styles.infoList}>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className={styles.infoItem}>
                <Icon className={styles.icon} size={20} />
                <div>
                  <span className={styles.infoLabel}>{label}</span>
                  {href ? (
                    <a href={href} className={styles.infoValue}>
                      {value}
                    </a>
                  ) : (
                    <p className={styles.infoValue}>{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Asunto</label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} />
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
