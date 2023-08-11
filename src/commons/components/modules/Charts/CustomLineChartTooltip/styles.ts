import styled from 'styled-components';

interface IStockData {
  lineColor: string;
  isPercentage?: boolean;
}

export const Container = styled.div`
  padding: 8px;
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borders.minimal};

  > p {
    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(36, 36, 36, 0.6);
    font-size: ${({ theme }) => theme.sizes.small};
    font-weight: ${({ theme }) => theme.weights.semiBold};
  }

  .items-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 148px;
  }
`;

export const StockData = styled.div<IStockData>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: rgba(36, 36, 36, 0.6);

  p {
    color: ${({ theme }) => theme.colors.blackAlt};
    font-size: ${({ theme }) => theme.sizes.small};
    font-weight: ${({ theme }) => theme.weights.semiBold};
  }

  .line-bg {
    width: 14px;
    height: 14px;
    background: ${({ lineColor }) => lineColor};
  }

  .line-infos {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .line-value {
    padding-left: 6px;
  }

  .line-ticker {
    padding-right: 6px;
    min-width: 72px;
    max-width: 196px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
  }
`;
