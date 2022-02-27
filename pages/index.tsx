import Head from 'next/head'
import styles from '../styles/Index.module.css'
import { multipleChoiceQuestions } from '../lib/multipleChoiceQuestions';
import MultipleChoice from '../components/multipleChoiceCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClimateScience | Jillian Breau</title>
        <meta name="description" content="ClimateScience Olympiad animation by Jillian Breau" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {multipleChoiceQuestions.map((multipleChoiceQuestion, i) => {
            return <MultipleChoice key={i} multipleChoiceQuestion={multipleChoiceQuestion} />
          })}
        </div>
      </main>
    </div>
  )
}
