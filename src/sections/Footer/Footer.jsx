import { navLinks } from "../../constants/navLinks";
import { socialLinks } from "../../constants/socialLinks";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.logo}>Cristian Mayorga</p>
          <p className={styles.tagline}>
            Construyendo experiencias web limpias y funcionales.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Navegación rápida">
          <ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.socialList}>
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a href={href} aria-label={label}>
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} Cristian Mayorga.</p>
        <p>Desarrollado con React.</p>
      </div>
    </footer>
  );
}

export default Footer;
