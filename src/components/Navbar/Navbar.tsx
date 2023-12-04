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
        <a href='#home'>
          <li className={styles.list__item}>Home</li>
        </a>
        <a href='#services'>
          <li className={styles.list__item}>Services</li>
        </a>
        <a href='#blueprint'>
          <li className={styles.list__item}>Blueprint</li>
        </a>
        <a href='#contact'>
          <li className={styles.list__item}>Contact</li>
        </a>
      </ul>

      <div className={styles.res__list}>
        <div className={styles.icon}>
          <HiMenuAlt3 onClick={onClick} />
        </div>
        <ul
          className={styles.res__menu}
          style={active ? { right: 0 } : { right: '-71%' }}
        >
          <a href='#home'>
            <li className={styles.list__item} onClick={onClick}>
              Home
            </li>
          </a>
          <a href='#services'>
            <li className={styles.list__item} onClick={onClick}>
              Services
            </li>
          </a>
          <a href='#blueprint'>
            <li className={styles.list__item} onClick={onClick}>
              Blueprint
            </li>
          </a>
          <a href='#the-best'>
            <li className={styles.list__item} onClick={onClick}>
              Guarantee
            </li>
          </a>
          <a href='#questions'>
            <li className={styles.list__item} onClick={onClick}>
              Questions
            </li>
          </a>
          <a href='#contact'>
            <li className={styles.list__item} onClick={onClick}>
              Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
