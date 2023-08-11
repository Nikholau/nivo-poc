import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import { ISearchStock } from '@modules/StocksComparator/types';

const handleGetStocksList = async (): Promise<ISearchStock[]> => {
  const response = await mundoInvestApi.getVariableIncomeAssets();

  return response.data;
};

export function useStocksList(
  options?: UseQueryOptions<ISearchStock[]>
): UseQueryResult<ISearchStock[]> {
  return useQuery('allStocks', handleGetStocksList, {
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
    ...options,
  });
}
