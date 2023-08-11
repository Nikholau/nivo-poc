import { formatToCapitalized } from 'brazilian-values';

export const formatToCapitalizeString = (
  valueString: string,
  trimTrailingWhiteSpaces = true
): string => {
  const stringCapitalized = formatToCapitalized(valueString, {
    trimTrailingWhiteSpaces: !!trimTrailingWhiteSpaces,
  });
  return stringCapitalized;
};
