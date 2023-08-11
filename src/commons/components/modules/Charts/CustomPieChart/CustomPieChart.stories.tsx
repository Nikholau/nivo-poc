import { colorSchemes } from '@nivo/colors';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomPieChart as BasePieChartComponent } from './index';

export default {
  title: 'commons/modules/charts/CustomPieChart',
  component: BasePieChartComponent,
} as ComponentMeta<typeof BasePieChartComponent>;

const chartData = [
  { id: 'teste-1', label: 'fatia 1', value: 1000, color: colorSchemes.nivo[0] },
  { id: 'teste-2', label: 'fatia 2', value: 1000, color: colorSchemes.nivo[1] },
  { id: 'teste-3', label: 'fatia 3', value: 1000, color: colorSchemes.nivo[3] },
];

const Template: ComponentStory<typeof BasePieChartComponent> = args => (
  <div style={{ width: '50%', height: '50vh' }}>
    <BasePieChartComponent {...args} />
  </div>
);

export const CustomPieChart = Template.bind({});

CustomPieChart.args = {
  data: chartData,
  totalValue: 3000,
  margin: { top: 16, right: 0, bottom: 16, left: 0 },
  colors: { scheme: 'set2' },
};
