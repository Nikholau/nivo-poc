/* eslint import/no-duplicates: "off" */
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string, pattern?: string): string {
  if (typeof date !== 'string' || date === '' || !date) return ' - ';

  const parsedDate = parseISO(date);
  return format(parsedDate, pattern || 'PPPP', { locale: ptBR });
}
