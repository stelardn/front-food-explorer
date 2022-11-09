import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.RED_500};

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    border: none;
    border-radius: 5px;

    padding: 1.2rem 2.4rem;

    cursor: pointer;

    &&:hover {
        filter: brightness(1.05);
    }

`
