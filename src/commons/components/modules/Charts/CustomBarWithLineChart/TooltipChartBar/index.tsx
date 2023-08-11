import * as S from './styles';

type TooltipChartBarProps = {
  valueOrigin: string;
  valueSale: string;
};

export const TooltipChartBar: React.FC<TooltipChartBarProps> = ({
  valueOrigin,
  valueSale,
}) => {
  const fontSize =
    // eslint-disable-next-line no-nested-ternary
    window.innerWidth < 540 ? 9 : window.innerWidth < 768 ? 10 : 13;
  return (
    <S.Container>
      <div>
        <span style={{ fontSize }}>{`Comissão vendas : ${valueSale}`}</span>
      </div>
      <div>
        <span
          style={{ fontSize }}
        >{`Comissão registros : ${valueOrigin}`}</span>
      </div>
    </S.Container>
  );
};
