import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    * {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }

    > label {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > input {
        background: none;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 1.6rem 1.4rem;

        border-radius: 5px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }
    
`