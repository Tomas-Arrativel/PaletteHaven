import styles from './Question.module.css';

interface QuestionProps {
  question: string;
  content: string;
}

const Question = ({ question, content }: QuestionProps) => {
  return (
    <section className={styles.question}>
      <h2>{question}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Question;
