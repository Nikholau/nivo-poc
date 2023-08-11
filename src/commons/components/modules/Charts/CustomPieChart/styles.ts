import styled, { css } from 'styled-components';

type SizeProps = {
  height: number;
  width: number;
};

export const Container = styled.div<SizeProps>`
  svg {
    overflow: visible;
  }

  ${({ height, width }) => css`
    flex: 1;
    min-height: 156px;
    ${width > 0 &&
    css`
      max-width: ${width}px;
    `}
    ${height > 0 &&
    css`
      max-height: ${height}px;
    `}

    @media screen and (min-width: 425px) {
      min-height: 198px;
    }
    @media screen and (min-width: 560px) {
      min-height: 240px;
    }

    @media screen and (min-width: 640px) {
      min-height: 282px;
    }

    @media screen and (min-width: 768px) {
      min-height: 348px;
    }

    @media screen and (min-width: 1024px) {
      min-height: initial;
    }
  `}
`;
