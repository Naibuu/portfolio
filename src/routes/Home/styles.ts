import styled from 'styled-components'

export const PageWrapper = styled('div')`
    position: relative;
    z-index: 2;

    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const StyledLanding = styled('div')`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    svg.brand {
        height: 125px;
        width: 200px;
    }

    > p {
        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 16px;
        font-weight: 500;
        max-width: 400px;
    }

    > div {
        margin-top: 20px;

        display: flex;
        align-items: center;
        gap: 5px;

        > div {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
        align-items: center;

        > p {
            text-align: center;
            max-width: 380px !important;
        }
    }

    @media (max-width: 500px) {
        > div {
            flex-direction: column;
            gap: 2px;
        }
    }
`