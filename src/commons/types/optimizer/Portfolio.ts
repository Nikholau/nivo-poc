export interface IPortfolioHistoryItem {
  identifier: string;
  quote: string;
  dailyOscillation: number;
  amount: number;
  date: string;
  accumulatedProfitability: number;
  difVar: number;
  difVarSquare: number;
}

export interface IPortfolio {
  history: IPortfolioHistoryItem[];
  dailyVariance: number;
  dailyStandardDeviation: number;
  yearlyVariance: number;
  yearlyStandardDeviation: number;
  daysCount: number;
  yearsCount: number;
  totalReturn: number;
  dailyReturnAverage: number;
  yearlyReturnAverage: number;
  returnPerRisk: number;
}

export interface IPortfolioPerformance {
  wallet: IPortfolio;
  walletD: IPortfolio;
}
