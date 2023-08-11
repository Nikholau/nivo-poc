import React from 'react';

import { DatumId } from '@nivo/pie';

import { formatBrlCurrency } from '@commons/utils';

import { Container } from './styles';

interface CustomPieChartTooltipProps {
  color: string;
  label?: DatumId;
  customValue?: string;
  value?: number;
  filterType?: '$' | '%';
}

export const CustomPieChartTooltip: React.FC<CustomPieChartTooltipProps> = ({
  label,
  value,
  color,
  customValue,
  filterType = '$',
}) => (
  <Container squareColor={color}>
    <div className="tooltip-square-color" />
    <strong>{label}</strong> -
    {filterType === '$' ? (
      <span>{customValue || formatBrlCurrency(value || 0, true)}</span>
    ) : (
      <span>{value}%</span>
    )}
  </Container>
);
