import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../../constants/navLinks";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logo} onClick={closeMenu}>
        CM
      </a>

      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={closeMenu}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a href="#" className={styles.cvButton} download>
          Descargar CV
        </a>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
