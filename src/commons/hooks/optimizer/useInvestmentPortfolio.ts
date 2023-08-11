import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { PortfolioPercentagesProps } from '@commons/types/optimizer';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

const handleGetInvestmentPortfolio = async () => {
  const response = await mundoInvestApi.getUserInvestmentPortfolioPercentages();

  return response.data;
};

export function useInvestmentPortfolio(
  options?: UseQueryOptions<PortfolioPercentagesProps>
): UseQueryResult<PortfolioPercentagesProps> {
  return useQuery(['portfolio'], handleGetInvestmentPortfolio, {
    ...options,
    refetchOnWindowFocus: false,
  });
}
