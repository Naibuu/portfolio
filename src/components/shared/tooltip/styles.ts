import styled from 'styled-components'
import Tippy, { TippyProps } from '@tippyjs/react'

export const StyledTooltip = styled(Tippy)<TippyProps>`
    padding: 5px 8px;

    background-color: #ffffff10;
    box-shadow: 0 0.5px 0 #ffffff30 inset;
    border-radius: 6px;

    font-size: 13px;
    font-weight: 500;

    &[data-state='hidden'] {
        opacity: 0;
    }
`
