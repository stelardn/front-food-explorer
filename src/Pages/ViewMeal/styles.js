import styled from "styled-components";

export const Container = styled.div`

    > svg {
        align-self: flex-end;
    }

    > img {
        height: 17.6rem;
        width: 17.6rem;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: clamp(2.4rem, 4vw, 5.6rem);
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
        font-family: 'Roboto',sans-serif;
        
        font-size: clamp(1.4rem, 2vw, 2.4rem);
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.GRAY_200};

        text-align: center;

        height: 4.4rem;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        text-overflow: ellipsis;
    }

    .include-amount {
        display: flex;
        align-items: center;
        gap: 1.6rem;
    }

    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 5.6rem 4rem 4rem;

    width: clamp(30rem, 4vw, 60rem);
    
`

