import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
    
    > main {
        --vh-gap: clamp(1rem, 2vh, 4rem);
        --border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

        width: 100%;
        max-width: 112rem;
        justify-self: center;

        
        padding: clamp(2rem, 2vh, 4rem)  clamp(2rem, 4vw, 6rem);

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

            #ingredients {
                display: flex;
                flex-direction: column;
                gap: .8rem;

            }

            #ingredients-rol {
                padding: .5rem .8rem;
                display: flex;
                gap: 1.6rem;

                align-items: center;

                border: var(--border);
                border-radius: .5rem;

                flex-wrap: wrap;
            }
        }

        #action-buttons {
            margin-top: var(--vh-gap);

            display: flex;
            justify-content: stretch;
            gap: clamp(1.2rem, 2vw, 3.2rem);

            width: 100%;

            button {
                border-radius: .5rem;
                width: 100%;
            }
            
            button:last-of-type {
                border: var(--border);
                background: rgba(255, 255, 255, 0.1);
                opacity: 0.8;
            }
        }

    }

    @media (min-width: 960px) {
        display: grid;
        grid-template-rows: 9.6rem auto 7.8rem;

        > main {
            gap: 2.4rem; 

            #back-button {
                font-size: 2.4rem;

                svg {
                    height: 3.2rem;
                    width: 3.2rem;
                }
            }

            h2 {
                font-size: 3.2rem;
                margin-bottom: .8rem;
            }

            form {
                #first-row, #second-row {
                    flex-direction: row;
                }
                
                #first-row {
                    div:last-child {
                        width: 100%;
                    }
                }

                #second-row {
                    #ingredients {
                        width: 100%;
                    }
                }
            }
        }
    }
`

export const SelectImage = styled.div`
    display: flex;
    gap: .8rem;
    justify-content: center;
    align-items: center;

    width: 100%;

    background-color: transparent;
    border: 1px solid white;

    padding: 1.2rem 3.2rem;
    margin-top: .8rem;
    height: 5.3rem;

    border-radius: .5rem;

    span {
        font-weight: 500;
    }

    #remove-image {
        background-color: ${({ theme }) => theme.COLORS.RED_500};
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        width: fit-content;        
        padding: .2rem;

        border: none;

        cursor: pointer;

        > svg {
            height: 1.6rem;
            width: 1.6rem;
        }
    }

    @media (min-width: 960px) {
        min-width: 22.9rem;
        
        span {
            line-height: 2.4rem;
        }
    }
`
