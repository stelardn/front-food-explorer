import styled from "styled-components";

export const Container = styled.div`
    .mobile-hidden {
        display: none;
    }

    @media (min-width: 960px) {
        .mobile-hidden {
            display: flex;
        }

        .mobile {
            display: none;
        }
    }

`

export const ContainerMobile = styled.div`

    background-color: ${({ theme }) => theme.COLORS.BLUE_800};

    display: flex;
    gap: clamp(1.2rem, 2vw, 2.4rem);

    padding: 1.6rem;

    align-items: center;
    justify-content: space-around;

    .logo-btn {
        padding: 0;
        background-color: transparent;
        border: none;

        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }

    > button {
        padding: 12px;
    }

    > svg {
        width: 3.2rem;
        height: 3.2rem;

        cursor: pointer;
    }

`

export const ContainerDesktop = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BLUE_800};
    width: 100%;
    height: 9.6rem;


    > header {
        display: flex;
        gap: clamp(1.6rem, 2vw, 3.2rem);

        width: 100%;
        max-width: 102.4rem;

        margin: 0 auto;

        align-items: center;
        justify-content: space-between;

        * * {
            flex-wrap: nowrap;
        }

        > button:first-of-type {
            gap: 1rem;

            h1 {
                font-size: 2.4rem;
            }

            svg {
                width: 3rem;
                height: 3rem;
            }
        }

        > #right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 1.4rem;
            gap: 1.6rem;

            width: fit-content;

            
            > svg {
                width: 3.2rem;
                height: 3.2rem;
                
                cursor: pointer;
            }
        }
    }

`