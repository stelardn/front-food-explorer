import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
     justify-content: space-between;
`

export const Main = styled.div`
    justify-self: flex-start;

    display: flex;
    flex-direction: column;

    padding: 0 clamp(6rem, 4vw, 12rem);

    > table {
        width: 100%;
        margin: 0 auto;
          
    }
`