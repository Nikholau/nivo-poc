import { formatCdiForSavings } from './formatCdiForSavings';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatCdiForSavings', () => {
  test('format falsy values', () => testFalsyValues(formatCdiForSavings, {}));

  test('formats the value with currency symbol', () => {
    const result = formatCdiForSavings(0.085);
    expect(result).toEqual('5.95');
  });
});
