import styled from "styled-components";

export const ContainerRight = styled.div`

    width: clamp(34.8rem, 40vw, 47.6rem);

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding: 3.2rem clamp(2rem, 3vw, 6.4rem);
    margin: 0 clamp(2rem, 3vw, 6.4rem);

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

export const ContainerLeft = styled.div`
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


