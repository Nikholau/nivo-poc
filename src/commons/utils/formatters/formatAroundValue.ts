export function formatAroundValue(value: string): string {
  if (typeof value !== 'string' || value === '') return ' - ';

  if (value.length === 6) {
    return `${value.slice(0, -1)}0`; // Ex: Input: 'R$ 849' Output: 'R$ 800'
  }
  if (value.length >= 7) {
    return `${value.slice(0, -2)}00`; // Ex: Input: 'R$ 1.500,70' Output: '1.500,00'
  }
  return value;
}
