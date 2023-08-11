import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

import { barChartTheme, lineChartTheme } from '@commons/styles/themes/charts';
import { formatBrlCurrency } from '@commons/utils';

import { TooltipChartBar } from './TooltipChartBar';

import * as S from './styles';

type Item = { x: string; y: number };

type BarItem = {
  origin: number;
  sale: number;
  month: string;
  saleColor: string;
  originColor: string;
};

export type SecondGraphProps = { id: string; data: Item[] };

export type ThirdGraphProps = { id: string; data: Item[] };

type CustomBarWithLineChart = {
  firstGraph: BarItem[];
  secondGraph: SecondGraphProps;
  thirdGraph: ThirdGraphProps;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLegendAxis = ({ innerWidth }: any) => {
  return (
    <>
      <text
        x={-28}
        y={-12}
        style={{ fontSize: '12px', color: '#fff' }}
        fill="#fff"
      >
        Cadastros
      </text>

      <text
        x={innerWidth - 18}
        y={-12}
        style={{ fontSize: '12px', color: '#fff' }}
        fill="#fff"
      >
        Vendas
      </text>
    </>
  );
};

export const CustomBarWithLineChart: React.FC<CustomBarWithLineChart> = ({
  firstGraph,
  secondGraph,
  thirdGraph,
}) => {
  return (
    <S.Container>
      <S.FirstGraph>
        <ResponsiveBar
          data={firstGraph}
          groupMode="stacked"
          indexBy="month"
          keys={['origin', 'sale']}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.4}
          valueScale={{ type: 'linear' }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          borderColor={{ from: 'color' }}
          borderWidth={0.5}
          colors={({ id, data }) => String(data[`${id}Color`])}
          axisLeft={null}
          labelTextColor="#fff"
          layers={[
            CustomLegendAxis,
            'bars',
            'grid',
            'legends',
            'annotations',
            'axes',
            'markers',
          ]}
          theme={{ ...barChartTheme }}
          label={({ indexValue, id }) => {
            const shouldRender =
              String(id).includes('sale') && window.innerWidth > 450;

            if (shouldRender) {
              let total = 0;
              const label = firstGraph.find(obj => obj.month === indexValue);
              total = label ? label.origin + label.sale : 0;
              const fontSize =
                // eslint-disable-next-line no-nested-ternary
                window.innerWidth < 540 ? 6 : window.innerWidth < 768 ? 8 : 12;
              return (
                <>
                  <tspan
                    y={-15}
                    style={{
                      fontWeight: 'bold',
                      fontSize,
                    }}
                  >
                    {!!total && formatBrlCurrency(total)}
                  </tspan>
                </>
              ) as unknown as string;
            }
          }}
        />
      </S.FirstGraph>

      <S.SecondGraph>
        <ResponsiveLine
          data={[secondGraph]}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          enableSlices="x"
          colors="#118f00"
          useMesh
          curve="monotoneX"
          enablePoints={false}
          enableGridX={false}
          enableGridY={false}
          lineWidth={10}
          yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
          axisLeft={null}
          axisRight={{
            tickSize: 6,
            tickValues: 6,
            tickRotation: 0,
            format: e => Math.floor(e) === e && e,
          }}
          axisBottom={null}
          theme={{ ...lineChartTheme, textColor: '#118f00' }}
          layers={[
            'grid',
            'markers',
            'areas',
            'slices',
            DashedLine,
            'points',
            'axes',
            'legends',
            'crosshair',
          ]}
        />
      </S.SecondGraph>

      <S.ThirdGraph>
        <ResponsiveLine
          data={[thirdGraph]}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          enableSlices="x"
          useMesh
          colors="#ffdf12"
          curve="monotoneX"
          enablePoints={false}
          enableGridX={false}
          enableGridY={false}
          lineWidth={10}
          yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
          axisLeft={{
            tickSize: 6,
            tickValues: 6,
            tickRotation: 0,
            format: e => Math.floor(e) === e && e,
          }}
          axisBottom={null}
          theme={{ ...lineChartTheme, textColor: '#ffdf12' }}
          layers={[
            'grid',
            'markers',
            'areas',
            'slices',
            DashedLine,
            'points',
            'axes',
            'legends',
            'crosshair',
          ]}
          sliceTooltip={({ slice: { points } }) => {
            const requiredObject = firstGraph[points[0].index];
            return (
              <TooltipChartBar
                valueOrigin={formatBrlCurrency(requiredObject.origin)}
                valueSale={formatBrlCurrency(requiredObject.sale)}
              />
            );
          }}
        />
      </S.ThirdGraph>
    </S.Container>
  );
};

const stepTwoStyles = {
  'Número de registro': {
    strokeDasharray: '6, 4',
    strokeWidth: 1,
    opacity: 1,
  },
  Comissão: {
    strokeDasharray: '6, 4',
    strokeWidth: 1,
    opacity: 1,
  },
};
const DashedLine = ({ series, lineGenerator, xScale, yScale }) =>
  series.map(({ id, data, color }) => (
    <path
      key={id}
      d={lineGenerator(
        data.map(d => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y),
        }))
      )}
      fill="none"
      stroke={color}
      style={stepTwoStyles[id]}
    />
  ));
