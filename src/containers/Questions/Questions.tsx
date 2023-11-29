import { Question } from '../../components/exports';
import styles from './Questions.module.css';

const Questions = () => {
  return (
    <section className={styles.container}>
      <h2>Questions that may arise:</h2>
      <Question
        question='What is your pricing structure?'
        content='Simply put, we price each project based on what it needs. Whether it is a small or big website, we make sure the cost matches the work involved. We know every client and project is unique, so we customize the pricing to be fair and clear. It is about making sure you get value for what you are investing in, no matter the size or complexity of your project.'
      />
      <Question
        question='How long does it take to complete a website?'
        content='As we mentioned earlier, the timeframe for completing a website depends on the specific requirements and complexity of the project. For simpler websites with basic features, the process typically takes around 5-11 days. On the other hand, more intricate and complex projects may require up to 13-19 days to ensure thorough development and testing.'
      />
      <Question
        question='Do you offer ongoing maintenance and support?'
        content='Yes, we provide ongoing support for your website, and there is a nominal cost associated with it. We believe the value it adds far outweighs the expense. Additionally, if you are considering a redesign, we offer this service at a reasonable cost. While it may seem higher, the investment is justified by the significant enhancements and improvements we bring to ensure your website meets your evolving needs and expectations.'
      />
    </section>
  );
};

export default Questions;
