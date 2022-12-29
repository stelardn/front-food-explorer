import styled from "styled-components";

export const Container = styled.div`
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