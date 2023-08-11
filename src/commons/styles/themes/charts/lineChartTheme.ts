import { Theme } from '@nivo/core';

export const lineChartTheme: Theme = {
  textColor: '#ddd',
  axis: {
    domain: {
      line: {
        stroke: '#ddd',
        strokeWidth: 0.8,
      },
    },
  },
  crosshair: {
    line: {
      stroke: '#ddd',
      strokeOpacity: 0.5,
      strokeWidth: 0.65,
    },
  },
  grid: {
    line: {
      stroke: '#ddd',
      strokeWidth: 0.25,
      opacity: 0.25,
    },
  },
};
