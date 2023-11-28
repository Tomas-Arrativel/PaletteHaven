import { Service } from '../../components/exports';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.services__cont} id='services'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 170'>
        <path
          fill='#fff'
          fill-opacity='1'
          d='M0,96L80,101.3C160,107,320,117,480,101.3C640,85,800,43,960,42.7C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        ></path>
      </svg>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore What We Do</h2>
        <div className={styles.services}>
          <Service
            image='web-dev.jpg'
            title='Web development'
            years={2}
            desc='We bring your digital vision to life. Our seasoned web developers specialize in crafting bespoke and responsive websites tailored to your unique needs. From sleek and modern designs to seamless functionality, we are committed to delivering a web presence that not only captures your brand essence but also ensures a delightful user experience.'
          />
          <Service
            image='web-redes.webp'
            title='Web redesign'
            years={2}
            desc='We offer web redesign services. If your website is in need of a makeover, our team is ready to breathe new life into it. From refreshing the look to enhancing functionality, we transform your existing website into a modern and effective digital experience. We work collaboratively with you to ensure that each change aligns with your goals and reflects the unique identity of your brand.'
          />
          <Service
            image='web-maint.png'
            title='Web maintenance'
            years={2}
            desc='We provide web maintenance services to ensure your online presence stays seamless and up-to-date. With our web maintenance service, you can focus on your core business while we take care of the technical aspects, ensuring your website remains a reliable and effective tool for your audience. Trust us to keep your digital space in optimal condition with our comprehensive web maintenance solutions.'
          />
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#fff'
          fill-opacity='1'
          d='M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Services;
