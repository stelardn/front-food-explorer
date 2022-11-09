import styled from "styled-components";

export const ContainerForm = styled.div`

    width: clamp(34.8rem, 40vw, 47.6rem);

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding: clamp(3.2rem, 7vw, 6.4rem) clamp(2rem, 4vw, 6.4rem);
    margin: 0 2rem;

    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_800};

    > h1 {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 3.2rem;
        align-self: center;
    }

    > button:last-of-type {
        align-self: center;
    }
`

export const ContainerLogo = styled.div`
    > h1 {
        size: clamp(2.4rem, 1vw, 3.2rem);
    }
`

export const Container = styled.div`

    display: flex; 
    align-items: center; 
    flex-direction: column;
    justify-content: space-evenly;

    height: 100vh;

    padding-top: 1.5rem;


    @media(min-width: 900px) {
        flex-direction: row;
    }

`


