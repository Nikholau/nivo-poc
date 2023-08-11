import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { mundoInvestApi } from '@services/api/mundoInvestApi';

import {
  useAddREITsOnPortfolio,
  useDeleteREITFromPortfolio,
  useEditREITFromPortfolio,
  useREITsPortfolio,
} from '@modules/OptimizerREITs/hooks';
import { handleRefetchREITsQueries } from '@modules/OptimizerREITs/utils';

import { useInvestmentPortfolio } from '../optimizer';

export const useReitsTour = () => {
  const { pathname } = useRouter();
  const removeBar = pathname.split('/');
  const currentPathPage = removeBar[removeBar.length - 1];
  const [missingAmount, setMissingAmount] = useState<number>(0);
  const firstRender = useRef(true);

  const { data: userReitsPortfolio } = useREITsPortfolio();

  const addREITsMutation = useAddREITsOnPortfolio({
    onSuccess: async () => {
      await handleRefetchREITsQueries();
    },
  });
  const editREITsMutation = useEditREITFromPortfolio({
    onSuccess: async () => {
      await handleRefetchREITsQueries();
    },
  });
  const deleteReitFromPortfolio = useDeleteREITFromPortfolio();

  const handleDeleteTutorialREIT = () => {
    if (!userReitsPortfolio) {
      return;
    }

    const CARE = userReitsPortfolio.find(stock => {
      return stock.ticker === 'CARE11';
    });

    try {
      if (CARE) {
        deleteReitFromPortfolio.mutateAsync({
          reitId: CARE.id,
        });
      }
    } catch {
      //
    }
  };

  useEffect(() => {
    if (firstRender.current && currentPathPage === 'fundos-imobiliarios') {
      if (!userReitsPortfolio) {
        return;
      }

      handleDeleteTutorialREIT();
      firstRender.current = false;
    }
  }, [currentPathPage, userReitsPortfolio]);

  useInvestmentPortfolio({
    onSuccess: data => {
      if (data?.missingData['Fundos Imobiliários']) {
        setMissingAmount(data?.missingData['Fundos Imobiliários']);
      } else {
        setMissingAmount(0);
      }
    },
  });

  const stepActionsReits = async (currentStep: number) => {
    switch (currentStep) {
      case 1:
        document.getElementById('Tour-REITs-addButton').click();
        break;

      case 2:
        addREITsMutation.mutateAsync({
          variableIncomes: [
            {
              quantity: 10,
              ticker: 'CARE11',
            },
          ],
        });
        break;

      case 3:
        try {
          const CARE = userReitsPortfolio.find(
            stock => stock.ticker === 'CARE11'
          );

          editREITsMutation.mutateAsync({
            reitId: CARE.id,
            quantity: 10,
            user_price: Number(CARE.lastQuote) * 1.35,
          });

          if (missingAmount > 0) {
            mundoInvestApi.deleteEstimatedValueFromPortfolio({
              investment_macro_class: 'Fundos Imobiliários',
              value: missingAmount + 10 * Number(CARE.lastQuote),
            });
          }
        } catch {
          //
        }

        document.getElementById('Tour-REITs-addButton').click();
        break;

      case 4:
        document.getElementById('Tour-REITs-card').click();
        break;

      case 7:
        document.getElementById('Tour-REITs-card').click();
        break;

      case 9:
        document.getElementById('Tour-REITs-Change').click();
        break;

      case 12:
        handleDeleteTutorialREIT();
        break;

      default:
        break;
    }
  };
  return { handleDeleteTutorialREIT, stepActionsReits };
};
