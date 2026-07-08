import Navbar from "../Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";
import styles from "./MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
