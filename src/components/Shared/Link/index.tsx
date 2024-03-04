import { StyledLink } from './styles'
import type { LinkProps } from './types'

export const Link = (props: LinkProps) => {
    return (
        <StyledLink href={props.href} onClick={props.onClick}>
            {props.text} <span>→</span>
        </StyledLink>
    )
}
