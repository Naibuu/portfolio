import styled from 'styled-components'

export const StyledFooter = styled('footer')`
    width: 100%;
    margin: 125px auto 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;

    > div {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        font-size: 15px;
        font-weight: 500;

        &:last-of-type {
            justify-content: flex-end;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;

            background: none;
            border: none;
            cursor: pointer;

            svg {
                width: 32px;
                border-radius: 4px;
            }
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;

        > div {
            align-items: center !important;
            justify-content: center !important;
            text-align: center;

            &:first-of-type {
                flex-direction: column;
            }
        }
    }

    @media (max-width: 350px) {
        > div {
            font-size: 12px;
        }
    }
`
