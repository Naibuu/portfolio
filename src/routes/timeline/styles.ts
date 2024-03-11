import styled from 'styled-components'

export const StyledTimeline = styled('div')`
    p {
        margin-bottom: 15px;
        color: var(--ui-lightgray);
        line-height: 25px;
        font-size: 16px;
        font-weight: 500;
    }
`

export const Timeline = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 90px;

    margin: 20px 0 0 0;
    padding: 30px 0 0 25px;

    border-left: 2px solid #ffffff20;
`

export const Container = styled('div')`
    position: relative;
    max-width: 400px;

    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 16px;
    font-weight: 500;

    > svg > path {
        fill: var(--ui-lightblue);
    }

    &::before {
        height: 2px;
        width: 12px;

        position: absolute;
        left: -25px;
        content: '';

        background-color: #ffffff20;
    }

    &.translucent {
        margin-top: 30px;
        color: #ffffff90;
        font-style: italic;
        font-size: 14px;
        font-weight: 500;

        &::before {
            top: 14px;
        }
    }
`

export const Icon = styled('div')`
    height: 32px;
    min-width: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #79ccf420;
    border-radius: 6px;

    > svg > path {
        fill: var(--ui-lightblue);
    }
`
