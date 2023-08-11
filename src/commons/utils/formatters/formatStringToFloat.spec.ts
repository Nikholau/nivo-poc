import {
  formatStringToFloatSmall,
  formatStringToFloatFull,
} from './formatStringToFloat';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatStringToFloatSmall', () => {
  test('format falsy values', () =>
    testFalsyValues(formatStringToFloatSmall, {
      empty: 0,
      nanValue: 0,
      nullValue: 0,
      undefineValue: 0,
    }));

  test('should format 1.200,00 to 1.2', () => {
    const result = formatStringToFloatSmall('1.200,00');
    expect(result).toBe(1.2);
  });

  test('should format 1.200,50 to 1.2', () => {
    const result = formatStringToFloatSmall('1.200,50');
    expect(result).toBe(1.2);
  });

  test('should format 75,32 to 75.32', () => {
    const result = formatStringToFloatSmall('75,32');
    expect(result).toBe(75.32);
  });

  test('should format 0,20 to 0.2', () => {
    const result = formatStringToFloatSmall('0,20');
    expect(result).toBe(0.2);
  });
});

describe('formatStringToFloatFull', () => {
  test('format falsy values', () =>
    testFalsyValues(formatStringToFloatFull, {
      empty: 0,
      nanValue: 0,
      nullValue: 0,
      undefineValue: 0,
    }));

  test('should format 1.200,00 to 1200', () => {
    const result = formatStringToFloatFull('1.200,00');
    expect(result).toBe(1200);
  });

  test('should format 1.200,50 to 1200.5', () => {
    const result = formatStringToFloatFull('1.200,50');
    expect(result).toBe(1200.5);
  });

  test('should format 75,32 to 75.32', () => {
    const result = formatStringToFloatFull('75,32');
    expect(result).toBe(75.32);
  });

  test('should format 0,20 to 0.2', () => {
    const result = formatStringToFloatFull('0,20');
    expect(result).toBe(0.2);
  });
});
