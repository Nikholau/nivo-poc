export interface PortfolioPercentagesProps {
  graph: {
    'Renda Fixa': number;
    'Renda Variável': number;
    'Fundos de Investimento': number;
    'Fundos Imobiliários': number;
  };
  missingData: {
    'Renda Fixa': number;
    'Renda Variável': number;
    'Fundos de Investimento': number;
    'Fundos Imobiliários': number;
  };
  currencyGraph: {
    Brasil: number;
    Internacional: number;
    Outros: number;
  };
}
