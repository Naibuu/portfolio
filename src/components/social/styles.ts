import styled from 'styled-components'

export const StyledSocial = styled('a')`
    position: relative;
    overflow: hidden;
    z-index: 1;

    height: 36px;
    width: 36px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 20px;
        width: 20px;

        path {
            transition: 0.15s ease;
        }
    }

    div {
        position: absolute;
        z-index: -1;

        height: 100%;
        width: 100%;

        background-color: #ffffff10;
        border-radius: 6px;

        transform: scale(0.9);
        opacity: 0;

        transition: 0.1s ease-in-out;
    }

    &:hover {
        svg {
            path {
                fill: var(--ui-lightblue);
            }
        }

        div {
            transform: scale(1);
            opacity: 1;
        }
    }

    &:active {
        div {
            transform: scale(0.9);
        }
    }
`
