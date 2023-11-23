import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>PaletteHaven</h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
