import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
`

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: var(-gray--400);
    align-items: center;
    justify-content: center;
`

export const Loading = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 8px solid var(--gray-600);
    border-left: 8px solid var(--yellow-600);

    animation-name: ${spinner};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`