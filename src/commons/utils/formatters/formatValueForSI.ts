export function formatValueForSI(num: number): string {
  if (typeof num !== 'number' || Number.isNaN(num) || !num) return ' - ';

  const absoluteNum = Math.abs(num);

  const formatNum = (divisor: number) => Math.trunc(num / divisor);

  if (absoluteNum > 999 && absoluteNum < 1_000_000) {
    return `R$ ${formatNum(1000)} k`; // convert to K for number from > 1000 < 1 million
  }
  if (absoluteNum >= 1_000_000 && absoluteNum < 1_000_000_000) {
    return `R$ ${formatNum(1_000_000)} mi`; // convert to M for number from > 1 million
  }
  if (absoluteNum >= 1_000_000_000 && absoluteNum < 1_000_000_000_000) {
    return `R$ ${formatNum(1_000_000_000)} bi`; // convert to BI for number from > 1 million
  }

  return `R$ ${num.toFixed(0).toString()}`; // if value < 1000, nothing to do
}
