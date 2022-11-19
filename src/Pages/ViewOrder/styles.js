import styled from "styled-components";

export const Container = styled.div`

    --border: 1px solid rgba(255, 255, 255, 0.1);

    > main {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        align-items: left;
        justify-content: center;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: clamp(2.4rem, 2vw, 3.2rem);
        }
    }

    @media (min-width: 960px) {
        display: grid;
        grid-template-rows: 9.6rem auto 7.8rem;
        height: 100vh;

        > main {
            flex-direction: row;
        }
    }

`

export const MyOrder = styled.div`
    > strong {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(1.6rem, 2vw, 2rem);
        font-weight: 500;
        line-height: 3.2rem;
        text-align: left;
    }

    max-width: 53rem;
    width: 100%;

    margin: 0 auto;

    justify-content: left;

    @media (min-width: 960px) {
        max-width: 44.4rem;
    }

`

export const OrderItem = styled.div`
    max-width: 44.4rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: clamp(1.2rem, 1vh, 1.6rem) 0;

    .item-details {
        p {
            display: flex;
            align-items: center;

            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.6rem, 2vw, 2rem);
            font-weight: 500;
            line-height: 3.2rem;
            text-align: left;
            color: ${({ theme }) => theme.COLORS.WHITE};

            span {
                margin-left: .8rem;

                font-family: 'Roboto', sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
        }

        button {
            color: ${({ theme }) => theme.COLORS.RED_100};
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;

            background-color: transparent;
            border: none;

            cursor: pointer;
        }
    }

    > img {
        width: 7.2rem;
        height: 7.2rem;
    }
`

export const Payment = styled.div`
    max-width: 53rem;
    width: 100%;
    margin: 0 auto;

    #display-payment {
        display: grid;
        text-align: center;

        #select-payment{
            display: flex;
            margin-top: clamp(1.2rem, 1vh, 3.2rem);

            button {
                width: 100%;
                border: none;
                background-color: transparent;
                border: var(--border);

                display: flex;
                gap: 1.4rem;
                align-items: center;
                justify-content: center;

                padding: clamp(1rem, 2vh, 3.2rem) 0;
                
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-family: 'Roboto', sans-serif;
                font-size: 1.6rem;
                font-weight: 400; 
                
                svg {
                    width: 2.4rem;
                    height: auto;
                }
            }

            button:first-of-type {
                border-top-left-radius: .5rem;
            }
            
            button:nth-of-type(2) {
                border-top-right-radius: .5rem;
            }
            
            button.selected {
                background-color: ${({ theme }) => theme.COLORS.BLUE_600};
            }
        }

        #current-payment {
            min-height: 27.4rem;
            border: var(--border);
            padding: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_200};

            img {
                margin-bottom: .8rem;
                max-height: 19rem;
                width: auto;
            }
        }
    }

    
`

export const CreditPayment = styled.div`
    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: clamp(1.2rem, 2vh, 3.2rem);

    input {
        width: 100%;
    }

    #credit-second-row {
        display: flex;
        gap: clamp(1.2rem, 2vh, 3.2rem);
    }
`

export const CheckoutPayment = styled.div`
    svg {
        height: 10.4rem;
        margin-bottom: 3.2rem;
    }
`