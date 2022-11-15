import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    background: rgba(0, 0, 0, 0.32);

    width: 100%;
    

    @media (min-width: 960px) {
        justify-content: space-between;

        #main {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 3.4rem auto;
            grid-template-areas: 'back-button heart-button'
            'meal-img meal-details';
            gap: 4rem;

            margin: 0 clamp(3rem, 4vw, 12rem);

            #meal-picture {
                width: 100%;
                height: auto;

                align-self: center;
                justify-self: center;
            }
            
            
            .price-calculation {
                flex-direction: row;
                gap: 5.6rem;
            }

            .details {
                display: flex;
                flex-direction: column;
                justify-items: left;
                align-items: left;
                text-align: left;

                h3 {
                    margin-bottom: 8px;
                }


                .ingredients {
                    display: flex;
                    align-items: center;
                    justify-content: left;
                    text-align: center;

                    gap: 1.6rem;

                    margin-top: 2.4rem;
                    margin-bottom: 4rem;

                    color: ${({ theme }) => theme.COLORS.GREY_100};

                    flex-wrap: wrap;

                    > .ingredient img {
                        width: clamp(7rem, 6vw, 9rem);
                        height: clamp(7rem, 6vw, 9rem);
                    }
                }

                .include-amount button svg {
                    display: block;
                } 

            }
        }
    }
`

export const Main = styled.div`

    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.2rem;

    padding: 2rem 4rem 4rem;

    > button {
        align-self: flex-start;
        font-size: clamp(1.6rem, 2vw, 2.4rem);
    }

    > svg {
        justify-self: flex-end;
        align-self: flex-end;
        grid-area: heart-button;
    }

    #meal-picture {
        height: clamp(17.6rem, 40vw, 22rem);
        width: clamp(17.6rem, 40vw, 22rem);
        grid-area: meal-img;
    }

    > .details {
        grid-area: meal-details;

        > h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: clamp(2.4rem, 4vw, 5.6rem);
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        > p {
            font-family: 'Roboto',sans-serif;
            
            font-size: clamp(1.4rem, 2vw, 2.4rem);
            line-height: 130%;

            color: ${({ theme }) => theme.COLORS.GRAY_200};

            width: clamp(22rem, 45vw, 60rem);

        }

        .ingredients {
            display: none; 
        }

        .price-calculation {
            display: flex;
            flex-direction: column;
            align-items: center;
        }


        .include-amount {
            display: flex;
            gap: 1.6rem;

            > button svg {
                display: none;
            }
        }
    } 

`

