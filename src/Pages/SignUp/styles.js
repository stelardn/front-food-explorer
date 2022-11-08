import styled from "styled-components";

export const ContainerRight = styled.div`

max-width: 47.6rem;

display: flex;
flex-direction: column;
gap: 3.2rem;

margin: 0 auto;
padding: clamp(4rem, 1vh, 6.4rem);

    /* > input {
        width: clamp(34.8rem, 10vh, 47.6rem);
    } */

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
    display: none;
`

export const Container = styled.div`

    @media(min-width: 900px) {
        .mobile-hidden {
            display: block;
        }

        display: flex;
        align-items: center;

        justify-content: space-around;
        
        margin: 0 auto;
    }

`


