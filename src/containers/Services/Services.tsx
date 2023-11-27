import { Service } from '../../components/exports';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.services}>
      <Service
        image='web-dev.jpg'
        title='Web development'
        years={2}
        desc='We can make the best webs in the market'
      />
    </div>
  );
};

export default Services;
