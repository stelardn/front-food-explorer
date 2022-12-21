import styled from "styled-components";

export const Container = styled.div`

    display: none;

    @media (min-width: 960px) {
        background-color: ${({ theme }) => theme.COLORS.BLUE_800};
        
        padding: 2.4rem 4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        /* position: absolute;
        left: 0;
        bottom: 0; */
        width: 100%;

        > button:first-of-type {
            gap: 1rem;
            
            h1 {
                color: rgba(255, 255, 255, 0.3);
                font-size: 2.4rem;
            }

            svg path {
                fill: rgba(255, 255, 255, 0.3);
            }

            svg {
                width: 3rem;
                height: 3rem;
            }
        }

        > p {
            font-family: 'DM Sans', sans-serif;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`