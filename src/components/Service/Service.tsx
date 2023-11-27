import styles from './Service.module.css';

interface ServiceProps {
  image: string;
  title: string;
  years: number;
  desc: string;
}

const Service = ({ image, title, years, desc }: ServiceProps) => {
  return (
    <div>
      <img src={`/services/${image}`} alt={`${title} image`} />
      <div className={styles.text__container}>
        <h2>{title}</h2>
        <p>{years} years in this industry</p>
        <p>{desc}</p>
        <a href='#contact' className={styles.cta__btn}>
          Contact with me
        </a>
      </div>
    </div>
  );
};

export default Service;
