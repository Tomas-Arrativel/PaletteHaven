import { Service } from '../../components/exports';
import styles from './Services.module.css';

const Services = () => {
  return (
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
  );
};

export default Services;
