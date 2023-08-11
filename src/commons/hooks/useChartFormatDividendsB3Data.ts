import { useMemo } from 'react';

import { formatDataChartBarB3 } from '@commons/utils';

import { IChartData, IDividendsB3 } from '@modules/OptimizerREITs/types';

export const useChartFormatDividendsB3Data = (dividendsB3: IDividendsB3) => {
  const dividendsFormatted = useMemo(() => {
    if (dividendsB3 === undefined) {
      return {
        keysChartB3: undefined,
        portfolioDividendsB3: undefined,
        maxValueChartB3: undefined,
      };
    }

    let keysChartB3: string[];
    let maxValueChartB3: number;
    let portfolioDividendsB3: IChartData[];

    if (dividendsB3) {
      const { data: dataPortfolio, keys, maxValueArray } = formatDataChartBarB3(
        dividendsB3
      );

      keysChartB3 = keys;
      maxValueChartB3 = maxValueArray;
      portfolioDividendsB3 = dataPortfolio;

      return { keysChartB3, portfolioDividendsB3, maxValueChartB3 };
    }

    return { keysChartB3: [''], portfolioDividendsB3: [], maxValueChartB3: 0 };
  }, [dividendsB3]);

  return dividendsFormatted;
};
