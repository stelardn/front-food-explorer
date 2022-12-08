import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    background-color: transparent;

    border: 1px dashed ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: .8rem;

    padding: 1rem 1.6rem;

    width: fit-content;

    > svg {
        cursor: pointer;
    }

    > input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 1.9rem;

        padding: 0;

        outline: none;
        border: none;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        width: 6.8rem;
    }


`