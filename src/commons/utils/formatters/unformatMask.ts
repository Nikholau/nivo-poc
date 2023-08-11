export function unformatMask(value: string): string {
  if (typeof value !== 'string') return '-';
  return value.replace(/\D/g, '');
}
