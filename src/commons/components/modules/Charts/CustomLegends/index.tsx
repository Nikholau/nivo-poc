import React from 'react';

import { Container, LegendItem } from './styles';

interface CustomLegendsProps {
  style?: React.CSSProperties;
  legendItems: { title: string; color: string }[];
}

export const CustomLegends: React.FC<CustomLegendsProps> = ({
  legendItems,
  style,
}) => (
  <Container style={style}>
    {legendItems.map((item, index) => (
      <LegendItem key={index}>
        <div className="identifier-icon" />

        <p>{item}</p>
      </LegendItem>
    ))}
  </Container>
);
