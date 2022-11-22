import styled from "styled-components";

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.6rem;

    overflow-x: visible;

    padding: 5.6rem 4rem 4rem;
    width: 30rem;

    position: relative;
           
    > svg {
        position: absolute;
        z-index: 2;
        top: 1.6rem;
        right: 1.6rem;
    }

    > img {
        height: 17.6rem;
        width: 17.6rem;
    }

    #title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;

        overflow-x: visible;
        width: 30rem;
        
        h3 {
            height: 3.36rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    p {
        font-family: 'Roboto',sans-serif;
        
        font-size: 1.4rem;
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
`