import styled from "styled-components";

export const Container = styled.div`
  --gradient-blue: ${({ theme }) => theme.COLORS.GRADIENT_BLUE};
  /* max-width: 112.2rem; */

  overflow: hidden;

  padding: 2rem;

  .alice-carousel {
    max-width: 31rem;
    position: relative;
  }

  .alice-carousel__next-btn,
  .alice-carousel__prev-btn {
    position: absolute;
    top: 0;

    width: clamp(5.8rem, 5vw, 11.6rem);
    height: 44.8rem;

    text-align: right;

    display: flex;
    align-items: center;

    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      var(--gradient-blue) 100%
    );

    svg {
      width: 1.5rem;
      height: 2.75rem;
      cursor: pointer;
    }
  }

  .alice-carousel__next-btn {
    right: 0;
    justify-content: flex-end;
  }

  .alice-carousel__prev-btn {
    left: 0;
    justify-content: flex-start;
    /* transform: matrix(-1, 0, 0, 1, 0, 0); */
    background: linear-gradient(
      270deg,
      rgba(0, 10, 15, 0.272541) 0%,
      var(--gradient-blue) 100%
    );
  }

  @media (min-width: 768px) {
    .alice-carousel {
      max-width: 65rem;
      padding-left: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .alice-carousel {
      max-width: 95rem;
    }
  }

  @media (min-width: 1440px) {
    .alice-carousel {
      max-width: 112.2rem;
    }
  }
`;
