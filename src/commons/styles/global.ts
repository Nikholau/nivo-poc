import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth  !important;
    }

    body{
        background: ${props => props.theme.colors.black300};
        color: ${props => props.theme.colors.white100};
        width: 100vw;
        overflow-x: hidden;
    }

    *,
    input,
    button {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    input{
      outline: none;
    }

    a{
        text-decoration: none;
    }


    a:focus, button:focus{
    outline: none;
    }

    h1, h2, h3, h4, h5, h6, strong{
      font-weight: ${({ theme }) => theme.weights.bold}
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.black100};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.gray500};
      border-radius: calc(5 * ${({ theme }) => theme.borders.minimal});
    }

    .reactour__mask svg > rect:last-child {
      border-radius: ${({ theme }) => theme.borders.minimal};
      outline: 2px solid ${({ theme }) => theme.colors.blue500};
    }

    .reactour__popover {
      .content-popover {
        padding-top: 20px;
        line-height: 1.3;

        h2 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        ul, ol {
          padding-left: 24px;
        }

        .note {
          font-size: 12px;
        }
      }

      .dot-viewed {
        border: 0 !important;
        background: ${({ theme }) => theme.colors.blue100} !important;
      }

    }
`;
