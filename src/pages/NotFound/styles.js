import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

  #banner {
    width: 100%;
    padding: 2rem;

    #hero {
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0.8rem;
      padding: 2rem;
      width: 100%;

      > img {
        display: none;
      }

      #headlines {
        font-family: "Poppins", sans-serif;
        text-align: left;

        h1 {
          font-size: clamp(2.4rem, 4vw, 4rem);
          font-weight: 500;
        }

        p, a {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          line-height: 2.24rem;
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
      }
    }
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-rows: auto 9.6rem;
    #banner {
      display: flex;

      align-items: center;
      justify-content: center;
      
      #hero {
        position: relative;

        max-width: 100rem;
        height: 26rem;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
          display: flex;
          height: auto;
          width: clamp(42rem, 2vw, 65rem);
          position: absolute;
          z-index: 1;
          bottom: -1rem;
          left: -4rem;

          filter: grayscale(90%);
        }

        #headlines {
          padding: 4.6rem;

          h1 {
            font-size: 4rem;
            line-height: 5.6rem;
          }

          p, a {
            font-size: 1.6rem;
            line-height: 2.24rem;
          }
        }
      }
    }
}
`