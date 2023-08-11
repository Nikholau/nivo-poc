import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import { GoalProps } from '@modules/OptimizerWealth/types';

type TGoals = 'patrimony' | 'objective' | 'all';

const handleGetUserGoals = async (type: TGoals) => {
  const response = await mundoInvestApi.getUserGoals(type);

  return response.data;
};

export function useUserGoals(
  type: TGoals,
  options?: UseQueryOptions<GoalProps[]>
): UseQueryResult<GoalProps[]> {
  return useQuery(['goals', type], () => handleGetUserGoals(type), {
    ...options,
    refetchOnWindowFocus: false,
  });
}
