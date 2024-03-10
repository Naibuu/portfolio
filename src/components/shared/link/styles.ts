import styled from 'styled-components'

export const StyledLink = styled('a')`
    padding: 4px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: #ffffff10;
    box-shadow: 0 0.5px 0 #ffffff30 inset;
    border-radius: 6px;

    font-size: 13px;
    font-weight: 500;

    transition: 0.15s ease;
    cursor: pointer;

    span {
        font-size: 12px;
        font-weight: 800;

        transition: 0.15s ease;
    }

    &:hover {
        background-color: #ffffff15;

        span {
            background-color: transparent;
            box-shadow: none;
            color: var(--ui-lightblue);
        }
    }
`
