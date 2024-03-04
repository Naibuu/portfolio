import styled from 'styled-components'

export const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;

    height: fit-content;
    min-height: 1000px;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const StyledWork = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: 2.5em;
    }

    p {
        max-width: 500px;
        color: var(--ui-lightgray);
        line-height: 30px;
        font-size: 16px;
        font-weight: 500;
    }

    div:last-of-type {
        display: flex;
    }

    @media (max-width: 1000px) {
        padding: 10px;
    }
`

export const StyledCarousel = styled('div')`
    margin-top: 50px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        max-width: 1000px;

        position: relative;
        box-sizing: border-box;

        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        &.translucent {
            opacity: 0.2;
            filter: saturate(0);
        }
    }

    button {
        height: 36px;
        width: 36px;
        position: absolute;
        z-index: 2;

        &:first-of-type {
            left: 15px;
        }

        &:last-of-type {
            right: 15px;
        }

        opacity: 0.5;
        font-size: 24px;

        background-color: transparent;
        border: none;

        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }
`
