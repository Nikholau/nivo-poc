import { WarningProps } from '@commons/types/optimizer';

import { formatBrlCurrency } from './formatCurrency';

export const formatWarningPhrase = (
  data: WarningProps,
  isInvestmentFund: boolean
): string => {
  const actionToWarning = data.action === 'VENDA' ? 'vender' : 'comprar';
  const valueFormatted = formatBrlCurrency(data.balancingValue, true).replace(
    /\s/,
    ' '
  );

  if (isInvestmentFund) {
    return `Vi aqui que você precisa ${actionToWarning} cerca de ${valueFormatted} de Fundo de ${data.segment}.`;
  }

  return `Vi aqui que você precisa ${actionToWarning} cerca de ${valueFormatted} de ${data.segment}.`;
};
