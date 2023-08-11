import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomPieChartTooltip as BaseCustomTooltip } from './index';

export default {
  title: 'commons/modules/charts/CustomPieChartTooltip',
  component: BaseCustomTooltip,
} as ComponentMeta<typeof BaseCustomTooltip>;

const Template: ComponentStory<typeof BaseCustomTooltip> = args => (
  <div style={{ width: 'fit-content' }}>
    <BaseCustomTooltip {...args} />
  </div>
);

export const CustomPieChartTooltip = Template.bind({});

CustomPieChartTooltip.args = {
  label: 'Teste',
  value: 1000,
  color: '#7dbbc3',
};
