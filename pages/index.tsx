import Head from 'next/head'
import styles from '../styles/Index.module.css'
import { multipleChoiceQuestions } from '../lib/animation/multipleChoiceQuestions';
import MultipleChoice from '../components/multipleChoiceCard';
import Layout from '../components/layout';
import { Page } from '../types/types';

export default function Home() {
  const percentilePage: Page = {
    title: "Percentile Page",
    route: "percentiles"
  }
  return (
    <div className={styles.container}>
      <Layout otherPage={percentilePage}>
        <Head>
          <title>ClimateScience animation | Jillian Breau</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            {multipleChoiceQuestions.map((multipleChoiceQuestion, i) => {
              return <MultipleChoice key={i} multipleChoiceQuestion={multipleChoiceQuestion} />
            })}
          </div>
        </main>

      </Layout>
      
    </div>
  )
}
