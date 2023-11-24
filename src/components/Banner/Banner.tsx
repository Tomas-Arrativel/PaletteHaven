import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.text__container}>
        <h1>PaletteHaven</h1>
        <p>
          Elevate your online presence with PaletteHaven – where website
          solutions meet artistic precision.
        </p>
        <a className={styles.contact__btn}>Contact</a>
      </div>
      <div className={styles.img__container}>
        <img
          className={styles.image}
          src='./banner/latas-pintura.png'
          alt='image of paint'
        />
      </div>
    </div>
  );
};

export default Banner;
