import styled from 'styled-components';

interface ContainerProps {
  squareColor: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 6px 12px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.02);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  gap: 4px;

  .tooltip-square-color {
    padding: 8px;
    background: ${({ squareColor }) => squareColor};
  }

  span,
  strong {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;
