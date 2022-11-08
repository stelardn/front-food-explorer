import styled from 'styled-components';

export const Container = styled.button`
    background: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 2.4rem;

    border: none;

    cursor: pointer;

    &&:hover {
        filter: brightness(0.9);
    }

    display: flex;
    align-items: center;

    > svg {
        height: 1.4rem;
        width: 2.2rem;
        background: none;
        border: none;
    }

`
