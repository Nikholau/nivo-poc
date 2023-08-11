import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { GeneralWarningsProps } from '@commons/types/optimizer';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

const handleGetWarnings = async () => {
  const response = await mundoInvestApi.getPortfolioWarnings();

  return response.data;
};

export function usePortfolioWarnings(
  options?: UseQueryOptions<GeneralWarningsProps>
): UseQueryResult<GeneralWarningsProps> {
  return useQuery(['warnings'], handleGetWarnings, {
    refetchOnWindowFocus: false,
    ...options,
  });
}
