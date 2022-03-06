import { ScoreData, PercentileData } from '../../types/percentiles/types';

export function calculatePercentiles(data: Array<ScoreData>): Array<PercentileData> {
  const percentiles: Array<number> = [0.1, 0.5, 0.9];
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