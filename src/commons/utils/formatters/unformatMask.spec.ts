import { testFalsyValues } from './testFalsyValuesHelper';
import { unformatMask } from './unformatMask';

describe('formatDate', () => {
  test('format falsy values', () =>
    testFalsyValues(unformatMask, {
      empty: '',
      nanValue: '-',
      nullValue: '-',
      undefineValue: '-',
    }));
  test('should return parsed value correctly', () => {
    const result = unformatMask('jdiojiofg7.2,38473');
    expect(result).toEqual('7238473');
  });
});
