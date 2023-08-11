import styled, { css } from 'styled-components';

type SizeProps = {
  height: number;
  width: number;
};

export const Container = styled.div<SizeProps>`
  ${({ height, width }) => css`
    min-height: 198px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${width > 0 &&
    css`
      max-width: ${width}px;
    `};

    ${height > 0 &&
    css`
      max-height: ${height}px;
    `};

    @media screen and (max-width: 425px) {
      max-width: 350px;
    }

    @media screen and (max-width: 375px) {
      max-width: 303px;
    }

    @media screen and (max-width: 320px) {
      max-width: 248px;
    }

    @media screen and (min-width: 768px) {
      min-height: 282px;
    }

    @media screen and (min-width: 1024px) {
      min-height: 200px;
      height: 100%;
    }
  `}
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
