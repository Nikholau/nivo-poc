type ReturnValidations = {
  empty?: unknown;
  undefineValue?: unknown;
  nanValue?: unknown;
  nullValue?: unknown;
};

export const testFalsyValues = <Formatter extends (params: unknown) => void>(
  formatter: Formatter,
  { empty, undefineValue, nanValue, nullValue }: ReturnValidations
) => {
  const result = formatter('');
  expect(result).toEqual(empty ?? ' - ');

  const result2 = formatter(NaN);
  expect(result2).toEqual(nanValue ?? ' - ');

  const result3 = formatter(undefined);
  expect(result3).toEqual(undefineValue ?? ' - ');

  const result4 = formatter(null);
  expect(result4).toEqual(nullValue ?? ' - ');
};
