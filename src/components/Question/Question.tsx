import styles from './Question.module.css';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface QuestionProps {
  question: string;
  content: string;
  open: boolean | null;
  toggle: any;
}

const Question = ({ question, content, open, toggle }: QuestionProps) => {
  return (
    <section className={styles.question}>
      <div className={styles.titleContainer} onClick={toggle}>
        <h2>{question}</h2>
        <div className={styles.icon}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className={styles.description}>
          <p>{content}</p>
        </div>
      </Collapse>
    </section>
  );
};

export default Question;
