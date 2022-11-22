import styled from "styled-components";

export const Container = styled.div`

    --gradient-blue: ${({ theme }) => theme.COLORS.GRADIENT_BLUE};
    /* max-width: 112.2rem; */
    max-width: 100vw;

    overflow: hidden;

    padding: 3rem;

    .alice-carousel {
        position: relative;
    }


    .alice-carousel__next-btn, .alice-carousel__prev-btn {
        position: absolute;
        top: 0;

        width: 11.6rem;
        height: 44.8rem;

        text-align: right;

        display: flex;
        align-items: center;

        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, var(--gradient-blue) 100%);

        svg {
            width: 1.5rem;
            height: 2.75rem;
        }
    }

    .alice-carousel__next-btn {
        right: 0;
        justify-content: flex-end;
        
    }
    
    .alice-carousel__prev-btn {
        left: 0;
        justify-content: flex-end;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }    
`