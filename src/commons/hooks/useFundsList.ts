import { useQuery, UseQueryResult } from 'react-query';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import { IFundResume } from '@modules/FundsComparator/types';

const handleListAllFunds = async () => {
  const data = [];
  let page = 1;
  let total = 0;

  const response = await mundoInvestApi.getFundsList(page);

  data.push(...response.data.data);
  total = Math.ceil(response.data.total / 20000);

  if (page < total) {
    page += 1;
    const responseOther = await mundoInvestApi.getFundsList(page);
    data.push(...responseOther.data.data);
  }

  return data;
};

export function useFundsList(): UseQueryResult<IFundResume[]> {
  return useQuery('allFunds', handleListAllFunds, {
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
}
