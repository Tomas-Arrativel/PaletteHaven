import styles from './Blueprint.module.css';

const Blueprint = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text__container}>
        <h2 className={styles.title}>
          We have an unique and carefully crafted{' '}
          <span className={styles.bold}>Blueprint</span>
        </h2>
        <p className={styles.process}>
          We follow a meticulous web development{' '}
          <span className={styles.bold}>process</span> to bring your digital
          vision to <span className={styles.bold}>life</span>. Our approach is
          designed to ensure{' '}
          <span className={styles.bold}>
            transparency, collaboration, and exceptional results
          </span>{' '}
          for every project.
        </p>
        <a href='#contact' className='cta__btn'>
          Get in touch
        </a>
      </div>
      <div className={styles.image}>
        <img
          src='./blueprint/blueprint.jpg'
          alt='Image of an empty blueprint'
        />
      </div>
    </section>
  );
};

export default Blueprint;
