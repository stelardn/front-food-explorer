import styled from "styled-components";

export const Container = styled.div`
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 4.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    display: flex;
    gap: 2.4rem;



`