export function formatBrlCurrency(
  valueToFormat: string | number,
  addCurrency = true,
  fractionDigits = 2
): string {
  const value = Number(valueToFormat);

  if (
    Number.isNaN(value) ||
    String(valueToFormat).length === 0 ||
    valueToFormat === null
  )
    return ' - ';

  if (addCurrency) {
    return value.toLocaleString('pt-br', {
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: fractionDigits,
      style: 'currency',
      currency: 'BRL',
    });
  }

  return value.toLocaleString('pt-br', {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  });
}
