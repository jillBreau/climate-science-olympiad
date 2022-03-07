import { ScoreData, PercentileData } from '../../types/percentiles/types';
import db from '../../fbase';
import fb from 'firebase';

export const getJsonData = (): Array<ScoreData> => {
  const jsonData: Array<ScoreData> = require('../../lib/percentiles/data/scoreData.json');
  return jsonData;
}

export const calculatePercentilesJson = (): Array<PercentileData> => {
  const percentiles: Array<number> = [0.1, 0.5, 0.9];

  const data = getJsonData();
  const values: Array<number> = data.map((obj) => obj.score);

  const results: Array<PercentileData> = [];

  percentiles.forEach((percentile) => {
    let result: PercentileData;
    if (values.length === 0) {
      result = {
        percentile,
        value: 0,
      };
    } else {
      const index: number = (values.length - 1) * percentile;
      const lower: number = Math.floor(index);
      const upper: number = lower + 1;
      const weight: number = index % 1;

      if (upper >= values.length) {
        result = {
          percentile,
          value: values[lower],
        };
      } else {
        result = {
          percentile,
          value: values[lower] * (1 - weight) + values[upper] * weight,
        };
      }
      results.push(result);
    }
  });
  return results;
};

export const getDbData = async (): Promise<Array<ScoreData>> => {
  const dbData: Array<ScoreData> = [];
  const dbScores = await db.collection('scores').get() as fb.firestore.QuerySnapshot<ScoreData>;
  dbScores.forEach(dbScore => {
    dbData.push(dbScore.data());
  });
  return dbData;
}

export const calculatePercentilesDb = async (): Promise<Array<PercentileData>> => {
  const percentiles: Array<number> = [0.1, 0.5, 0.9];

  const data = await getDbData();
  const values: Array<number> = data.map((obj) => obj.score);

  const results: Array<PercentileData> = [];

  percentiles.forEach((percentile) => {
    let result: PercentileData;
    if (values.length === 0) {
      result = {
        percentile,
        value: 0,
      };
    } else {
      const index: number = (values.length - 1) * percentile;
      const lower: number = Math.floor(index);
      const upper: number = lower + 1;
      const weight: number = index % 1;

      if (upper >= values.length) {
        result = {
          percentile,
          value: values[lower],
        };
      } else {
        result = {
          percentile,
          value: values[lower] * (1 - weight) + values[upper] * weight,
        };
      }
      results.push(result);
    }
  });
  return results;
};

/**
 * TODO: If any of these utility functions, or the React components used in this project
 * to display the output of the utility functions, were to go to production, I would write
 * unit tests for each of the pure utility functions and the components.
 * 
 * I would also improve my knowledge of Firebase and Firestore, to implement a more efficient
 * method of getting the score data from a database. I would store the firebase credentials
 * used for configuration in environment variables.
 * 
 * I would ensure getDbData() was not called in 2 places, as this is unnecessary. The current
 * implementation is meant to keep all utility functions in this standalone file while also
 * displaying the output in a React component for easy review.
 * 
 * If the team and score data from the Firestore database was going to be updated frequently,
 * and the Percentiles React component was going to be using as a dashboard to monitor updated
 * statistics, I would change getStaticProps to getServerSideProps (and of course improve UI).
 */