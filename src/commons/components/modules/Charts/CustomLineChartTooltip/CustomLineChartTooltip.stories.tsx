import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomLineChartTooltip as BaseCustomLineChartTooltip } from './index';

const sliceMock = {
  id: 'slice-1',
  points: [
    {
      id: 'point-1',
      index: 0,
      serieId: 'Linha 1',
      serieColor: '',
      x: 0,
      y: 0,
      color: 'red',
      borderColor: '',
      data: {
        x: '2022-01-01',
        xFormatted: '2022-01-01',
        y: 20,
        yFormatted: 20,
      },
    },
    {
      id: 'point-1',
      serieId: 'Linha 2',
      color: 'green',
      data: {
        x: '2022-01-02',
        xFormatted: '2022-01-02',
        y: 35,
        yFormatted: 35,
      },
    },
  ],
};

export default {
  title: 'commons/modules/charts/CustomLineChartTooltip',
  component: BaseCustomLineChartTooltip,
} as ComponentMeta<typeof BaseCustomLineChartTooltip>;

const Template: ComponentStory<typeof BaseCustomLineChartTooltip> = args => (
  <div style={{ width: 'fit-content' }}>
    <BaseCustomLineChartTooltip {...args} />
  </div>
);

export const CustomLineChartTooltip = Template.bind({});

CustomLineChartTooltip.args = {
  isFund: false,
  isAge: false,
  filterType: '$',
  slice: sliceMock,
};
