import { formatAroundValue } from './formatAroundValue';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatAroundValue', () => {
  test('format falsy values', () => testFalsyValues(formatAroundValue, {}));

  test('should format 12 (2 digits) to 12', () => {
    const result = formatAroundValue('12');
    expect(result).toBe('12');
  });

  test('should format 787,32 (6 digits) to 787,30', () => {
    const result = formatAroundValue('787,32');
    expect(result).toBe('787,30');
  });

  test('should format 1234567 (7 digits or more) to 1234500', () => {
    const result = formatAroundValue('1234567');
    expect(result).toBe('1234500');
  });

  test('should format R$ 345,29 (7 digits or more) to R$ 345,00', () => {
    const result = formatAroundValue('R$ 345,29');
    expect(result).toBe('R$ 345,00');
  });
});
