import { Link } from '~components/Shared/Link'
import { useNavigate } from 'react-router-dom'
import { StyledFooter } from './styles'

/** Components */
import { Social } from '~components/Shared/Social'
import { SocialProps } from '~components/Shared/Social/types'
import { Socials } from '~data/Socials'

export const Footer = () => {
    const navigate = useNavigate()

    return (
        <StyledFooter>
            <div>
                <p>
                    Copyright © {new Date().getFullYear()}. Naibuu. All rights
                    reserved.
                </p>
                <Link
                    text="Work"
                    onClick={() => {
                        navigate('/work')
                        scrollTo(0, 0)
                    }}
                />
            </div>
            <div>
                {Socials.map((props: SocialProps, index: number) => (
                    <Social key={index} icon={props.icon} href={props.href} />
                ))}
                <a href="https://github.com/Naibuu/portfolio">Source Code</a>
            </div>
        </StyledFooter>
    )
}
