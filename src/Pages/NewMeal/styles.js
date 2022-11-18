import styled from "styled-components";

export const Container = styled.div`
    
    > main {
        --vh-gap: clamp(1rem, 2vh, 4rem);
        --border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

        max-width: 112rem;
        
        padding: 2rem;
        display: flex;
        flex-direction: column;

        gap: 1rem;

        > form {
            display: flex;
            flex-direction: column;

            gap: var(--vh-gap);

            label {
                font-size: 1.6rem;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
            }

            #first-row, #second-row {
                display: flex;
                flex-direction: column;
                gap: var(--vh-gap);
            }

            #pick-image {
                display: none;
            }

            #select-image {
                margin-top: .8rem;

                display: flex;
                gap: .8rem;
                justify-content: center;
                align-items: center;

                background-color: transparent;
                border: 1px solid white;

                padding: 1.2rem 3.2rem;

                border-radius: .5rem;

                span {
                    font-weight: 500;
                }
            }

            #ingredients {
                padding: .8rem;
                display: flex;
                gap: .8rem;

                border: var(--border);
                border-radius: .5rem;

                flex-wrap: wrap;
            }
        }

        button:last-of-type {
            background: rgba(255, 255, 255, 0.1);
            opacity: 0.8;
            border: var(--border);
            border-radius: .5rem;
        }
    }
`
