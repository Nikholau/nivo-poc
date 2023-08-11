import { formatToCapitalizeString } from './formatToCapitalizeString';

describe('formatToCapitalizeString', () => {
  it('should return parsed value correctly', () => {
    const inputString = 'uma string de teste';
    const outputString = formatToCapitalizeString(inputString);
    expect(outputString).toBe('Uma String de Teste');
  });
});
