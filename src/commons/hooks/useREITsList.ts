import { useQuery, UseQueryResult } from 'react-query';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import { IREIT } from '@modules/OptimizerREITs/types';

const handleGetAllREITs = async () => {
  const response = await mundoInvestApi.getREITsList();

  return response.data;
};

export function useREITsList(): UseQueryResult<IREIT[]> {
  return useQuery('allREITs', handleGetAllREITs, {
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
}
