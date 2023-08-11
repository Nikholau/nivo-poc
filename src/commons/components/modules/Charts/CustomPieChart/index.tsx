import React, { useRef } from 'react';

import { ResponsivePie, PieSvgProps } from '@nivo/pie';

import { useDimensions } from '@commons/hooks/useDimensions';
import { pieChartTheme } from '@commons/styles/themes/charts';
import { PieChartItemProps } from '@commons/types/charts';

import { CustomPieChartTooltip } from '../CustomPieChartTooltip';

import * as S from './styles';

type TBasePieChart = Omit<PieSvgProps<PieChartItemProps>, 'height' | 'width'>;
interface CustomPieChartProps extends TBasePieChart {
  totalValue: number;
  filterType?: '$' | '%';
  className?: string;
}

export const CustomPieChart: React.FC<CustomPieChartProps> = ({
  totalValue,
  filterType = '$',
  className = 'defaultStyles',
  ...props
}) => {
  const divElementRef = useRef<HTMLDivElement>();

  const { width, height } = useDimensions({
    refElement: divElementRef,
    resize: true,
  });

  return (
    <S.Container
      className={`${className}`}
      ref={divElementRef}
      height={height}
      width={width}
    >
      <ResponsivePie
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        colors={{ scheme: 'nivo' }}
        enableArcLinkLabels
        enableArcLabels
        innerRadius={0.55}
        padAngle={0.7}
        activeOuterRadiusOffset={8}
        cornerRadius={3}
        borderWidth={1}
        arcLabelsSkipAngle={15}
        arcLinkLabelsSkipAngle={15}
        arcLinkLabelsThickness={1.5}
        arcLinkLabelsTextColor="#fff"
        arcLinkLabelsDiagonalLength={6}
        arcLinkLabelsStraightLength={8}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabel={d => `${d.label}`}
        arcLabel={d => `${((d.value * 100) / totalValue).toFixed(0)}%`}
        arcLabelsTextColor="#fff"
        tooltip={({ datum: { value, color, label } }) => (
          <CustomPieChartTooltip
            color={color}
            value={value}
            label={label}
            filterType={filterType}
          />
        )}
        theme={pieChartTheme}
        margin={{ left: 20, right: 20, bottom: 24, top: 24 }}
        {...props}
      />
    </S.Container>
  );
};
