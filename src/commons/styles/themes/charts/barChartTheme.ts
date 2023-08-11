import { CompleteTheme, Theme } from '@nivo/core';

interface Outline extends Partial<CompleteTheme['annotations']['outline']> {
  rx?: string;
}
interface ExtendedTheme extends Theme {
  annotations: Partial<{
    outline: Outline;
    text: Partial<CompleteTheme['annotations']['text']>;
    link: Partial<CompleteTheme['annotations']['link']>;
    symbol: Partial<CompleteTheme['annotations']['symbol']>;
  }>;
}

export const barChartTheme: ExtendedTheme = {
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
  annotations: {
    link: {
      stroke: '#0d0316',
      strokeWidth: 0,
      outlineWidth: 0,
      outlineColor: '#ffffff',
    },
    outline: {
      fill: 'none',
      stroke: '#fff',
      strokeWidth: 2,
      outlineWidth: 0,
      outlineColor: '#ffffff',
      rx: '4px',
    },
  },
};
