export interface ILinePointItem {
  x: string | number;
  y: string | number;
}

export interface IChartDataItem {
  id: string;
  color: string;
  data: ILinePointItem[];
}

export interface LineChartProps {
  id: string;
  color: string;
  data: ILinePointItem[];
}

export interface PieChartItemProps {
  id: string;
  label: string;
  value: number;
  color: string;
}
