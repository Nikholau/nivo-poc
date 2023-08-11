import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

interface IDeleteEstimatedValues {
  macroClass:
    | 'Fundos de Investimento'
    | 'Fundos Imobiliários'
    | 'Renda Variável';
}

const handleDeleteEstimateValue = async ({
  macroClass,
}: IDeleteEstimatedValues): Promise<void> => {
  await mundoInvestApi.deleteEstimatedValueFromPortfolio({
    investment_macro_class: macroClass,
    value: 0,
  });
};

export function useDeleteEstimatedValue(
  options?: UseMutationOptions<unknown, unknown, IDeleteEstimatedValues>
): UseMutationResult<unknown, unknown, IDeleteEstimatedValues> {
  return useMutation<unknown, unknown, IDeleteEstimatedValues>(
    handleDeleteEstimateValue,
    {
      ...options,
    }
  );
}
