import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Layout from '../components/layout';
import { Page } from '../types/types';
import { ScoreData, PercentileData } from '../types/percentiles/types';
import { calculatePercentiles } from '../lib/percentiles/calculatePercentiles';

var data: Array<ScoreData> = require('../lib/percentiles/data/scoreData.json');

export default function Home() {
  const animationPage: Page = {
    title: "Animation Page",
    route: ""
  }

  const percentilesObjects: Array<PercentileData> = calculatePercentiles(data);

  return (
    <div className={styles.container}>
      <Layout otherPage={animationPage}>
        <Head>
          <title>ClimateScience percentiles | Jillian Breau</title>
        </Head>
        <main className={styles.main}>
          <p>{`For the scores ${data.map((obj) => obj.score).join(', ')}: `}</p>
          {percentilesObjects.map((percentilesObject, i) => {
            return <p key={i}>{`The ${percentilesObject.percentile * 100}th percentile is ${percentilesObject.value}.`}</p>
          })}
        </main>
      </Layout>
    </div>
  )
}