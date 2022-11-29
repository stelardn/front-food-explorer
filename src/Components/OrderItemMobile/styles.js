import styled from "styled-components";

export const Container = styled.div`
  max-width: 63rem;
  width: 100%;
  margin: 0 auto;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  &:hover {
    filter: brightness(1.5);
  }

  padding: 2.4rem 4rem;

  margin-bottom: 1.6rem;

  .status {
    h3 {
      font-weight: 500;
      font-size: clamp(2rem, 2vw, 2.4rem);
    }
  }

  .status,
  #details {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  #details {
    span {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  #items {
    margin-top: 1.6rem;
  }
`;
