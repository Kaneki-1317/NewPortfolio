import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>{/* Navbar */}</header>

      <main className={styles.main}>
        {/* Hero */}
        {/* About */}
        {/* Technologies */}
        {/* Projects */}
        {/* Contact */}
      </main>

      <footer className={styles.footer}>{/* Footer */}</footer>
    </div>
  );
}

export default MainLayout;
