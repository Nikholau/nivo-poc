export interface WarningProps {
  message: string;
  segment: string;
  type: string;
  name?: string;
  action?: 'VENDA' | 'COMPRA' | 'PREENCHER';
  value?: number;
  balancingValue?: number;
}

export interface GeneralWarningsProps {
  stateInvestmentFunds?: WarningProps[];
  variableIncomes?: WarningProps[];
  fixedIncomes?: WarningProps[];
  investmentFunds?: WarningProps[];
}
