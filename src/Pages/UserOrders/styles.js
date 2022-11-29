import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (min-width: 960px) {
    display: grid;
    grid-template-rows: 9.6rem auto 7.8rem;
  }
`;

export const MainWide = styled.div`
  display: none;

  @media (min-width: 960px) {
    justify-self: flex-start;

    display: flex;
    flex-direction: column;

    padding: 0 clamp(3rem, 8vw, 12rem);
    width: 100vw;

    > h1 {
      font-weight: 500;
      font-size: clamp(2.2rem, 2vw, 3.2rem);
      margin: clamp(0.8rem, 2vh, 3.2rem) 0;
    }

    .table-scroll {
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE_600};
      border-radius: 0.8rem 0.8rem 0 0;
      width: 100%;

      overflow-y: auto;
      max-height: 60vh;
      margin-bottom: 20px;

      &::-webkit-scrollbar-button {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BLUE_600};
        border-radius: 1rem;
      }

      &::-webkit-scrollbar {
        width: 0.6rem;
        background-color: transparent;
      }

      td.status svg {
        margin-right: 0.8rem;
      }

      td.status {
        min-width: 13.7rem;
      }
    }

    table {
      width: 100%;
      border-radius: 0.8rem 0.8rem 0 0;
      border-collapse: collapse;

      * {
        font-size: clamp(1.2rem, 2vw, 1.4rem);
      }

      td,
      th {
        padding: clamp(0.8rem, 2vh, 1.6rem) clamp(0.8rem, 2vw, 2.4rem);
        text-align: start;
        color: ${({ theme }) => theme.COLORS.GREY_200};
        font-weight: 400;
        font-family: "Roboto", sans-serif;
      }

      thead {
        font-weight: 700;
        position: sticky;
        top: 0;
        background-color: ${({ theme }) => theme.COLORS.BLUE_1000};

        border-bottom: 2px solid #192227;

        th {
          font-weight: 700;
        }

        th:first-child {
          border-top-left-radius: 0.8rem;
        }

        th:last-child {
          border-top-right-radius: 0.8rem;
        }
      }

      tr {
        border-bottom: 2px solid #192227;
      }

      td,
      th {
        border-right: 2px solid #192227;
      }

      tr:last-child,
      td:last-child,
      th:last-child {
        border-right: none;
        border-bottom: none;
      }

      tr:nth-child(odd) td {
        background: rgba(0, 0, 0, 0.32);
      }
    }
  }
`;

export const MainMobile = styled.div`
  padding: 0 3rem;

  > h1 {
    font-weight: 500;
    font-size: clamp(2.2rem, 2vw, 3.2rem);
    margin: clamp(0.8rem, 2vh, 3.2rem) 0;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;
