import styles from './Navbar.module.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  const changeOnScroll = () => {
    window.scrollY >= 70 ? setScroll(true) : setScroll(false);
  };

  window.addEventListener('scroll', changeOnScroll);
  return (
    <nav
      className={
        scroll ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }
    >
      <h2 className={styles.title}>PaletteHeaven</h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>Home</li>
        <li className={styles.list__item}>About</li>
        <li className={styles.list__item}>Contact</li>
      </ul>

      <div className={styles.res__list}>
        <div className={styles.icon}>
          <HiMenuAlt3 onClick={onClick} />
        </div>
        <ul
          className={styles.res__menu}
          style={active ? { right: 0 } : { right: '-71%' }}
        >
          <li className={styles.list__item} onClick={onClick}>
            Home
          </li>
          <li className={styles.list__item} onClick={onClick}>
            Services
          </li>
          <li className={styles.list__item} onClick={onClick}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
