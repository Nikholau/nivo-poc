import React, { useEffect, useRef, useState } from 'react';

import { ResponsiveLine, LineProps } from '@nivo/line';

import MIAnimated from '@commons/assets/animated/mi.webp';
import { CustomLineChartTooltip } from '@commons/components/modules/Charts';
import { useDimensions } from '@commons/hooks/useDimensions';
import { lineChartTheme } from '@commons/styles/themes/charts';

import * as S from './styles';
import { formatValueForSI } from '@commons/utils/formatters/formatValueForSI';

interface CustomLineChartProps extends LineProps {
  filterType: '%' | '$';
  error: boolean;
  className?: string;
  isFetching?: boolean;
}

export const CustomLineChart: React.FC<CustomLineChartProps> = ({
  filterType,
  isFetching,
  className = 'defaultStyles',
  error = true,
  ...props
}) => {
  const divElementRef = useRef<HTMLDivElement>();

  const { width, height } = useDimensions({
    refElement: divElementRef,
    resize: true,
  });

  const [loadingData, setLoadingData] = useState<'loading' | 'unset' | 'error'>(
    'loading'
  );
  const firstRender = useRef(true);

  const hideLoading = () => setLoadingData('unset');
  const showError = () => setLoadingData('error');
  const showLoading = () => setLoadingData('loading');

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (isFetching) {
      showLoading();
    }
  }, [isFetching]);

  useEffect(() => {
    if (props.data.length > 0) {
      hideLoading();
    }

    if (props.data.length === 0 && error) {
      showError();
    }
  }, [props.data, error]);

  if (loadingData === 'loading') {
    return (
      <S.Container
        className={`${className}`}
        width={width}
        height={height}
        ref={divElementRef}
      >
        <S.ImageWrapper>
          <img src={MIAnimated} alt="logo animada mundo invest" />
        </S.ImageWrapper>
      </S.Container>
    );
  }

  if (loadingData === 'error' && !props.data) {
    return <></>;
  }

  return (
    <S.Container
      className={`${className}`}
      width={width}
      height={height}
      ref={divElementRef}
    >
      <ResponsiveLine
        sliceTooltip={({ slice }) => (
          <CustomLineChartTooltip slice={slice} filterType={filterType} />
        )}
        colors={{ scheme: 'category10' }}
        enableSlices="x"
        isInteractive
        curve="monotoneX"
        useMesh
        enablePoints={false}
        lineWidth={1.25}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        layers={[
          'grid',
          'markers',
          'areas',
          'lines',
          'slices',
          'points',
          'axes',
          'legends',
          'crosshair',
        ]}
        axisLeft={{
          tickSize: 4,
          tickValues: 6,
          tickRotation: 0,
          format: value => `${formatValueForSI(Number(value) || 0)}`,
        }}
        theme={lineChartTheme}
        {...props}
      />
    </S.Container>
  );
};
