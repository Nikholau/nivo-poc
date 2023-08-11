import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  position: relative;
  min-height: 320px;
`;

const GraphStyles = () => css`
  height: 100%;
  position: absolute;
  top: 0px;
  width: 100%;
`;

export const FirstGraph = styled.div`
  ${GraphStyles()};
`;

export const SecondGraph = styled.div`
  ${GraphStyles()};
`;

export const ThirdGraph = styled.div`
  ${GraphStyles()};
`;
