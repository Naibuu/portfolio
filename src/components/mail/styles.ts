import styled from 'styled-components'

export const StyledMail = styled('a')`
    height: 36px;
    width: 220px;
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff10;
    box-shadow: 0 0.5px 0 #ffffff30 inset;
    border-radius: 6px;

    font-size: 15px;
    font-weight: 500;

    svg {
        height: 16px;
        width: 16px;

        path {
            transition: 0.15s ease;
        }
    }

    &:hover {
        background-color: #ffffff15;
        transition: 0.15s ease;

        svg {
            path {
                fill: var(--ui-lightblue);
            }
        }
    }
`
