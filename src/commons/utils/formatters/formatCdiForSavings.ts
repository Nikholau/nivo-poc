export function formatCdiForSavings(cdi: number): string {
  if (typeof cdi !== 'number' || Number.isNaN(cdi)) return ' - ';
  return (cdi * 70).toFixed(2);
}
