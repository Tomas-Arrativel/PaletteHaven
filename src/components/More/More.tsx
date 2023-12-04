import styles from './More.module.css';

const More = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text__container}>
        <h2>But wait, there's more!</h2>
        <h3>
          If, for any reason, you're <span className='bold'>not satisfied</span>{' '}
          with the website, we offer a{' '}
          <span className='bold'>100% money-back</span> guarantee.
        </h3>
        <p>No risk on you, all the risk on us.</p>
        <a href='#contact' className='cta__btn'>
          Contact with us now!
        </a>
      </div>
      <div className={styles.img__container}>
        <img src='./more/csg.png' alt='Customer satisfaction guaranteed' />
      </div>
    </section>
  );
};

export default More;
