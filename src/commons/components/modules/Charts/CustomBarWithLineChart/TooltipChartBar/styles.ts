import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    background: ${theme.colors.white100};
    color: ${theme.colors.black};
    border-radius: ${theme.borders.minimal};
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `}
`;

type SquareProps = {
  color: string;
};

export const Square = styled.div<SquareProps>`
  ${({ color }) => css`
    width: 14px;
    height: 14px;

    background-color: ${color};
  `}
`;
