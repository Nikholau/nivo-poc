export const formatStringToFloatSmall = (value: string): number => {
  if (!value) return 0;
  return parseFloat(value.replace(',', '.'));
};

export const formatStringToFloatFull = (value: string): number => {
  if (!value) return 0;
  return parseFloat(value.replace(/[.,]/g, m => (m === ',' ? '.' : '')));
};
