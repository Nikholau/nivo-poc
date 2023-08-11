import { formatBrlCurrency } from './formatCurrency';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatBrlCurrency', () => {
  test('format falsy values', () => testFalsyValues(formatBrlCurrency, {}));

  test("returns ' - ' when valueToFormat is not a valid number", () => {
    const result = formatBrlCurrency('teste');
    expect(result).toBe(' - ');
  });

  test('should format value undefined with params', () => {
    const result = formatBrlCurrency(undefined, true, 2);
    expect(result).toBe(' - ');
  });

  test('formats the value with currency symbol', () => {
    const result = formatBrlCurrency(1000, true);
    expect(result.replace(/\s/, ' ')).toEqual('R$ 1.000,00');
  });

  test('formats the float value with currency symbol', () => {
    const result = formatBrlCurrency(10.0, true, 2);
    expect(result.replace(/\s/, ' ')).toEqual('R$ 10,00');
  });

  test('formats the value with currency symbol when passed as a string', () => {
    const result = formatBrlCurrency('1000', true);
    expect(result.replace(/\s/, ' ')).toEqual('R$ 1.000,00');
  });

  test('formats the value without currency symbol', () => {
    const result = formatBrlCurrency(1000, false);
    expect(result).toBe('1.000,00');
  });

  test('formats the value with custom fraction digits', () => {
    const result = formatBrlCurrency(1000, true, 3);
    expect(result.replace(/\s/, ' ')).toEqual('R$ 1.000,000');
  });

  test('should format value 0 as currency', () => {
    const result = formatBrlCurrency(0);
    expect(result.replace(/\s/, ' ')).toEqual('R$ 0,00');
  });
});
