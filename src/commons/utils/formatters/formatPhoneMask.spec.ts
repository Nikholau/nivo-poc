import { formatPhoneMask } from './formatPhoneMask';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatPhoneMask', () => {
  test('format falsy values', () =>
    testFalsyValues(formatPhoneMask, {
      empty: '',
      nanValue: '',
      nullValue: '',
      undefineValue: '',
    }));

  test('should return parsed value correctly', () => {
    const phone = '11987654321';
    const formattedPhone = formatPhoneMask(phone);
    expect(formattedPhone).toBe('(11) 98765-4321');
  });
});
