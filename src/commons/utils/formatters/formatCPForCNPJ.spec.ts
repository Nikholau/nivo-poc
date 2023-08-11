import { formatCPForCNPJ } from './formatCPForCNPJ';
import { testFalsyValues } from './testFalsyValuesHelper';

describe('formatCPForCNPJ', () => {
  test('format falsy values', () =>
    testFalsyValues(formatCPForCNPJ, {
      empty: '',
      nanValue: '',
      nullValue: '',
      undefineValue: '',
    }));

  test('formats a full value number (14 digits) to CNPJ', () => {
    const result = formatCPForCNPJ(11222333000199);
    expect(result).toEqual('11.222.333/0001-99');
  });

  test('formats a full value number (11 digits) to CPF', () => {
    const result = formatCPForCNPJ(11122233399);
    expect(result).toEqual('111.222.333-99');
  });

  test('formats a full value string (14 digits) to CNPJ', () => {
    const result = formatCPForCNPJ('77111555000422');
    expect(result).toEqual('77.111.555/0004-22');
  });

  test('formats a full value string (11 digits) to CPF', () => {
    const result = formatCPForCNPJ('77711155522');
    expect(result).toEqual('777.111.555-22');
  });

  test('formats a half value as number (12 digits) to CNPJ', () => {
    const result = formatCPForCNPJ(771115550004);
    expect(result).toEqual('77.111.555/0004');
  });

  test('formats a half value as number (8 digits) to return a partial CPF', () => {
    const result = formatCPForCNPJ(44499966);
    expect(result).toEqual('444.999.66');
  });

  test('formats a half value as string (12 digits) to CNPJ', () => {
    const result = formatCPForCNPJ('559993330002');
    expect(result).toEqual('55.999.333/0002');
  });

  test('formats a half value as string (8 digits) to return a partial CPF', () => {
    const result = formatCPForCNPJ('22277744');
    expect(result).toEqual('222.777.44');
  });
});
