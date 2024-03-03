import { StyledTooltip } from './styles'
import type { TippyProps } from '@tippyjs/react'

export default function Tooltip(props: TippyProps) {
    const { children, ...tippyProps } = props

    return <StyledTooltip {...tippyProps}>{props.children}</StyledTooltip>
}
