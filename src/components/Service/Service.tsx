import styles from './Service.module.css';

interface ServiceProps {
  image: string;
  title: string;
  years: number;
  desc: string;
}

const Service = ({ image, title, years, desc }: ServiceProps) => {
  return (
    <div className={styles.service}>
      <img
        className={styles.img}
        src={`/services/${image}`}
        alt={`${title} image`}
      />
      <div className={styles.text__container}>
        <h2>{title}</h2>
        <p className={styles.years}>{years} years in this industry</p>
        <p className={styles.desc}>{desc}</p>
        <a href='#contact' className='cta__btn'>
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Service;
