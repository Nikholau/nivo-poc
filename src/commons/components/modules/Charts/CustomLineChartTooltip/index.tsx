import React from 'react';

import { SliceTooltipProps } from '@nivo/line';

import { formatBrlCurrency } from '@commons/utils';

import { Container, StockData } from './styles';

type TooltipProps = Omit<SliceTooltipProps, 'axis'>;

interface ITooltip extends TooltipProps {
  isFund?: boolean;
  isAge?: boolean;
  filterType?: '$' | '%';
}

export const CustomLineChartTooltip: React.FC<ITooltip> = ({
  slice,
  isFund,
  isAge,
  filterType,
}) => (
  <Container>
    <p>
      {isAge
        ? `${slice.points[0].data.x} anos`
        : new Date(slice.points[0].data.xFormatted).toLocaleDateString()}
    </p>

    <div className="items-wrapper">
      {slice.points.map(point => (
        <StockData
          key={`tooltip-${point.id}`}
          lineColor={point.color}
          isPercentage={filterType !== '$'}
        >
          <div className="line-bg" />
          <div className="line-infos">
            <p className="line-ticker">
              {isFund ? String(point.serieId).split('_')[0] : point.serieId}
            </p>
            |
            <p className="line-value">
              {filterType === '$' &&
                formatBrlCurrency(Number(point.data.y), true)}

              {filterType === '%' && point.data.yFormatted}

              {filterType !== '$' && filterType !== '%' && point.data.y}
            </p>
          </div>
        </StockData>
      ))}
    </div>
  </Container>
);
