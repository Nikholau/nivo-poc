import { WarningProps } from '@commons/types/optimizer';

import { formatWarningPhrase } from './formatWarningPhrase';

const mockValues = {
  message: 'string',
  segment: 'bla',
  type: 'string',
  name: 'string',
  action: 'VENDA',
  value: 100,
  balancingValue: 100,
} as WarningProps;

describe('formatWarningPhrase', () => {
  test('should return parsed value correctly with second param as true', () => {
    const result = formatWarningPhrase(mockValues, true);

    expect(result).toEqual(
      'Vi aqui que você precisa vender cerca de R$ 100,00 de Fundo de bla.'
    );
  });
  test('should return parsed value correctly with second param as false', () => {
    const result = formatWarningPhrase(
      { ...mockValues, action: 'COMPRA' },
      false
    );
    expect(result.trim()).toEqual(
      'Vi aqui que você precisa comprar cerca de R$ 100,00 de bla.'
    );
  });
});
