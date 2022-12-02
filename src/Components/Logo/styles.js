import styled from "styled-components";

export const Container = styled.button`
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 4.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    background-color: transparent;
    border: none;

    display: flex;
    gap: 2.4rem;
`