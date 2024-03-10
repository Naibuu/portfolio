import { StyledSocial } from './styles'
import type { SocialProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Social = (props: SocialProps) => {
    return (
        <StyledSocial href={props.href}>
            <FontAwesomeIcon icon={props.icon} />
            <div />
        </StyledSocial>
    )
}
