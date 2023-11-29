import styles from './LikeYou.module.css';

const LikeYou = () => {
  return (
    <section className={styles.container}>
      <div className={styles.like__you}>
        <h2 className={styles.titles}>Does this sounds like you? 🤔</h2>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            ❌ You are tired of your website not bringing in{' '}
            <span className='bold'>any results</span> at all?
          </li>
          <li className={styles.list__item}>
            ❌ You're wondering what <span className='bold'>could have </span>{' '}
            happened if you had had a <span className='bold'>website</span>{' '}
            before?
          </li>
          <li className={styles.list__item}>
            ❌ You desire a <span className='bold'>quality website</span>, but
            you're uncertain about whom you can rely on?
          </li>
          <li className={styles.list__item}>
            ❌ You find yourself questioning when the{' '}
            <span className='bold'>SEO</span> efforts will begin to{' '}
            <span className='bold'>show results?</span>
          </li>
        </ul>
      </div>
      <div className={styles.solution}>
        <h2 className={styles.titles}>
          Well, we have the Solution for You! 🎉
        </h2>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            ✨ Because we <span className='bold'>stay genuine</span>, avoiding{' '}
            <span className='bold'>unrealistic</span> expectations.
          </li>
          <li className={styles.list__item}>
            ✨ We have real <span className='bold'>experience.</span>
          </li>
          <li className={styles.list__item}>
            ✨ We deliver work of <span className='bold'>exceptional.</span>{' '}
            quality.
          </li>
          <li className={styles.list__item}>
            ✨ We offer the most <span className='bold'>competitive rates</span>{' '}
            within our expertise.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LikeYou;
