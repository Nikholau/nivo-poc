import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import {
  useAddStocksOnPortfolio,
  useDeleteStockFromPortfolio,
  useEditStockFromPortfolio,
  useStocksPortfolio,
} from '@modules/OptimizerStocks/hooks';
import { handleRefetchStocksRelatedQueries } from '@modules/OptimizerStocks/utils';

import { useInvestmentPortfolio } from '../optimizer';

export const useStocksTour = () => {
  const { pathname } = useRouter();
  const removeBar = pathname.split('/');
  const currentPathPage = removeBar[removeBar.length - 1];
  const [missingAmount, setMissingAmount] = useState<number>(0);
  const firstRender = useRef(true);

  const addStocksMutation = useAddStocksOnPortfolio({
    onSuccess: async () => {
      await handleRefetchStocksRelatedQueries();
    },
  });
  const editStockMutation = useEditStockFromPortfolio({
    onSuccess: async () => {
      await handleRefetchStocksRelatedQueries();
    },
  });
  const deleteFromPortfolio = useDeleteStockFromPortfolio();
  const { data: userStocksPortfolio } = useStocksPortfolio();

  const handleDeleteTutorialStock = () => {
    if (!userStocksPortfolio) {
      return;
    }

    const MERC4 = userStocksPortfolio?.find(stock => stock.ticker === 'MERC4');

    try {
      if (MERC4) {
        deleteFromPortfolio.mutateAsync({
          stockId: MERC4.id,
        });
      }
    } catch {
      //
    }
  };

  useEffect(() => {
    if (firstRender.current && currentPathPage === 'renda-variavel') {
      if (!userStocksPortfolio) {
        return;
      }

      handleDeleteTutorialStock();
      firstRender.current = false;
    }
  }, [currentPathPage, userStocksPortfolio]);

  useInvestmentPortfolio({
    onSuccess: data => {
      if (data?.missingData['Renda Variável']) {
        setMissingAmount(data?.missingData['Renda Variável']);
      } else {
        setMissingAmount(0);
      }
    },
  });

  const stepActionsStock = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        document.getElementById('Tour-Stocks-addStockButton').click();

        addStocksMutation.mutateAsync({
          variableIncomes: [
            {
              quantity: 10,
              ticker: 'MERC4',
            },
          ],
        });
        break;

      case 3:
        try {
          const StockTutorial = userStocksPortfolio.find(
            stock => stock.ticker === 'MERC4'
          );

          editStockMutation.mutateAsync({
            stockId: StockTutorial.id,
            quantity: 10,
            userPrice: Number(StockTutorial.lastQuote) * 0.87,
          });

          if (missingAmount > 0) {
            mundoInvestApi.deleteEstimatedValueFromPortfolio({
              investment_macro_class: 'Renda Variável',
              value: missingAmount + 10 * Number(StockTutorial.lastQuote),
            });
          }
        } catch {
          //
        }

        document.getElementById('Tour-Stocks-addStockButton').click();

        handleRefetchStocksRelatedQueries();
        break;

      case 4:
        document.getElementById('Tour-Stocks-card').click();

        break;

      case 7:
        document.getElementById('Tour-Stocks-card').click();
        break;

      case 10:
        handleDeleteTutorialStock();
        break;

      default:
        break;
    }
  };

  return { handleDeleteTutorialStock, stepActionsStock };
};
