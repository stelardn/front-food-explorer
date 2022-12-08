import styled from "styled-components";

export const Container = styled.div`
    > button {
        cursor: pointer;
    }

    width: 10rem;

    * {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        width: 2.4rem;
        height: 3.2rem;
        text-align: center;
    }

    display: flex;
    align-items: center;
    gap: 1.4rem;
`