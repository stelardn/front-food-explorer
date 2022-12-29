import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BLUE_1000};
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }
`