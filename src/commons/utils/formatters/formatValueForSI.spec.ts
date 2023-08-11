import { formatValueForSI } from './formatValueForSI';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatValueForSI', () => {
  test('format falsy values', () => testFalsyValues(formatValueForSI, {}));

  test('should format 1000 to 1 k', () => {
    const result = formatValueForSI(1000);
    expect(result).toBe('R$ 1 k');
  });

  test('should format -1000 to -1 k', () => {
    const result = formatValueForSI(-1000);
    expect(result).toBe('R$ -1 k');
  });

  test('should format 999999 to 999 k', () => {
    const result = formatValueForSI(999_999);
    expect(result).toBe('R$ 999 k');
  });

  test('should format 1000000 to 1 mi', () => {
    const result = formatValueForSI(1_000_000);
    expect(result).toBe('R$ 1 mi');
  });

  test('should format -1000000 to -1 mi', () => {
    const result = formatValueForSI(-1_000_000);
    expect(result).toBe('R$ -1 mi');
  });

  test('should format 999999999 to 999 mi', () => {
    const result = formatValueForSI(999_999_999);
    expect(result).toBe('R$ 999 mi');
  });

  test('should format 1000000000 to 1 bi', () => {
    const result = formatValueForSI(1_000_000_000);
    expect(result).toBe('R$ 1 bi');
  });

  test('should format -1000000000 to -1 bi', () => {
    const result = formatValueForSI(-1_000_000_000);
    expect(result).toBe('R$ -1 bi');
  });

  test('should format 999999999999 to 999 bi', () => {
    const result = formatValueForSI(999_999_999_999);
    expect(result).toBe('R$ 999 bi');
  });

  test('should format 999.32 to 999', () => {
    const result = formatValueForSI(998.32);
    expect(result).toBe('R$ 998');
  });
});
