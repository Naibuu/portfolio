import { StyledTooltip } from './styles'
import type { TippyProps } from '@tippyjs/react'

export function Tooltip(props: TippyProps) {
    const { children, ...tippyProps } = props

    return <StyledTooltip {...tippyProps}>{children}</StyledTooltip>
}