
import styles from '../styles/questions/MultipleChoice.module.css'
import '../i18n';
import { useTranslation } from "react-i18next";
import { MultipleChoiceQuestionType } from '../lib/multipleChoiceQuestions';

export default function MultipleChoice({ multipleChoiceQuestion }: { multipleChoiceQuestion: MultipleChoiceQuestionType }) {
  // @ts-ignore
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <p className={styles.question}>{t(multipleChoiceQuestion.question)}</p>
      <div className={`${styles.answer} ${styles.answer0}`}>
        <div className={`${styles.circle} ${multipleChoiceQuestion.answers[0].correct && styles.correct}`}></div>
        {t(multipleChoiceQuestion.answers[0].text)}
      </div>
      <div className={`${styles.answer} ${styles.answer1}`}>
        <div className={`${styles.circle} ${multipleChoiceQuestion.answers[1].correct && styles.correct}`}></div>
        {t(multipleChoiceQuestion.answers[1].text)}
      </div>
      <div className={`${styles.answer} ${styles.answer2}`}>
        <div className={`${styles.circle} ${multipleChoiceQuestion.answers[2].correct && styles.correct}`}></div>
        {t(multipleChoiceQuestion.answers[2].text)}
      </div>
    </div>
  )
}