import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Layout from '../components/layout';
import { Page } from '../types/types';
import { ScoreData, PercentileData } from '../types/percentiles/types';
import { getJsonData, getDbData, calculatePercentilesJson, calculatePercentilesDb } from '../lib/percentiles/calculatePercentiles';

const animationPage: Page = {
  title: "Animation Page",
  route: ""
}

const Percentiles = ({
  jsonData,
  jsonPercentilesData,
  dbData,
  dbPercentilesData
}: {
  jsonData: Array<ScoreData>,
  jsonPercentilesData: Array<PercentileData>,
  dbData: Array<ScoreData>,
  dbPercentilesData: Array<PercentileData>
}) => {
  return (
    <div className={styles.container}>
      <Layout otherPage={animationPage}>
        <Head>
          <title>ClimateScience percentiles | Jillian Breau</title>
        </Head>
        <main className={styles.main}>
          <p>{`For the scores ${jsonData.map((obj) => obj.score).join(', ')} from a JSON file: `}</p>
          {jsonPercentilesData.map((jsonPercentile, i) => {
            return <p key={i}>{`The ${jsonPercentile.percentile * 100}th percentile is ${Math.round(jsonPercentile.value * 10) / 10}`}</p>
          })}
          <br></br><br></br>
          <p>{`For the scores ${dbData.map((obj) => obj.score).join(', ')} from a Firestore database: `}</p>
          {dbPercentilesData.map((dbPercentile, i) => {
            return <p key={i}>{`The ${dbPercentile.percentile * 100}th percentile is ${Math.round(dbPercentile.value * 10) / 10}`}</p>
          })}
        </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const jsonData: Array<ScoreData> = getJsonData();
  const jsonPercentilesData: Array<PercentileData> = calculatePercentilesJson();
  
  const dbData: Array<ScoreData> = await getDbData();
  const dbPercentilesData: Array<PercentileData> = await calculatePercentilesDb();

  return {
    props: {
      jsonData,
      jsonPercentilesData,
      dbData,
      dbPercentilesData
    }
  };
};

export default Percentiles;