import styled from "styled-components";

export const Container = styled.div`
  #page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
  }

  main {
    padding: 0 2rem 9rem;
    width: 100%;
    margin: clamp(2rem, 2vh, 4rem) auto;

    section {
      margin-bottom: clamp(2rem, 2vh, 4rem);
    }

    h2 {
      padding: 0 2rem;
      margin-bottom: clamp(1.2rem, 2vh, 3.2rem);
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: clamp(2rem, 3vw, 3.2rem);
    }
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-rows: 9.6rem auto 7.8rem;
  }
`;
