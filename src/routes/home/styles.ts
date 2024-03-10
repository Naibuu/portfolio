import styled from 'styled-components'

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

    p {
        max-width: 400px;
        margin-bottom: 15px;

        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 16px;
        font-weight: 500;
    }

    div {
        display: flex;
        align-items: center;
        gap: 5px;

        div {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
        align-items: center;

        p {
            text-align: center;
            max-width: 380px;
        }
    }
`
