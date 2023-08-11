/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { formatBrlCurrency } from '@commons/utils';
import { formatValueForSI } from '@commons/utils/formatters/formatValueForSI';

export const CustomPieCenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach(datum => {
    total += datum.value;
  });

  const checkTotalRender = (totalValue: number) => {
    if (totalValue === 0) return '';

    if (totalValue > 1000000) return formatValueForSI(total);

    return formatBrlCurrency(totalValue, true, 0);
  };

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '14px',
        fontWeight: 600,
        fill: '#fff',
      }}
    >
      {checkTotalRender(total)}
    </text>
  );
};
