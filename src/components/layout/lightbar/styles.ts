import styled, { keyframes } from 'styled-components'

const FadeAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const StyledLightbar = styled('div')`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: -1;

    > canvas {
        position: absolute;
        top: 0;
        left: 50%;

        height: 300px;
        width: 1000px;

        transform: translateX(-50%);
        z-index: -1;
    }

    > div {
        height: 600px;
        width: 100%;

        mask-image: radial-gradient(
            1000px 250px at center 30%,
            black,
            transparent
        );
        background-color: #79ccf410;

        transform: translateY(-300px);
        animation: ${FadeAnimation} 2s ease-out forwards;
    }
`
