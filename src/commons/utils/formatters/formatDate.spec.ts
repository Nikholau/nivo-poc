import { formatDate } from './formatDate';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatDate', () => {
  test('format falsy values', () => testFalsyValues(formatDate, {}));

  test('should return parsed date correctly', () => {
    const result = formatDate('2035-06-30T21:17:14.792Z');
    expect(result).toEqual('sábado, 30 de junho de 2035');
  });

  test('should return parsed date with the pattern given by parameter', () => {
    const result = formatDate('2035-06-30T21:17:14.792Z', 'dd/MM/yyyy');
    expect(result).toEqual('30/06/2035');
  });
});
