import { StyledMail } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Mail = ({ to }: { to: string }) => {
    return (
        <StyledMail href={`mailto:${to}`} target="_blank">
            {to}
            <FontAwesomeIcon icon={faArrowRight} />
        </StyledMail>
    )
}
