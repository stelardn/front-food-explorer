import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({ theme }) => theme.COLORS.BLUE_800};

    > div:first-of-type {
        gap: 1rem;

        h1 {
            font-size: 2.4rem;
        }

        svg {
            width: 3rem;
            height: 3rem;
        }
    }

    > div:nth-of-type(2) {
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 1.2rem 1.4rem;
        gap: 1.4rem;

        width: fit-content;

        border-radius: 5px;

        height: 4.8rem;
        
        background: ${({ theme }) => theme.COLORS.BLUE_700};
        
        > input {
            background: none;
            border: none;
            width: 41rem;

            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;

            &:focus {
                outline: none;
            }
        }

    }

`