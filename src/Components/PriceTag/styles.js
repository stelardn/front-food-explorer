import styled from "styled-components";

export const Container = styled.div`
    /* width: 22rem; */
    /* height: 5.1rem; */

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.BLUE_100};
`