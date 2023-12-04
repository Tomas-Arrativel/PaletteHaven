import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner} id='home'>
      <div className={styles.text__container}>
        <h1>PaletteHeaven</h1>
        <p>
          Elevate your online presence with PaletteHeaven – where website
          solutions meet artistic precision.
        </p>
        <div className={styles.benefits}>
          <h2>Our websites can:</h2>
          <ul>
            <li>
              ✔ Generate more and{' '}
              <span className={styles.bold}>better leads</span>,
            </li>
            <li>
              ✔ Build <span className={styles.bold}>trust</span>
            </li>
            <li>
              ✔ and Book more <span className={styles.bold}>calls</span>
            </li>
          </ul>
        </div>
        <p className={styles.cta__p}>
          If the proposition appears favorable, <br />
          <span>Why not consider giving it a try? ⬇</span>
        </p>
        <a href='#contact' className={styles.contact__btn}>
          Contact
        </a>
      </div>
      <div className={styles.img__container}>
        <img
          className={styles.image}
          src='./banner/latas-pintura.png'
          alt='image of paint'
        />
      </div>
    </section>
  );
};

export default Banner;
