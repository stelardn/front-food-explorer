import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: .8rem;
    padding: 1rem 1.6rem;

    width: fit-content;


    > svg {
        cursor: pointer;
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }


`