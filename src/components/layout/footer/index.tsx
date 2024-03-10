import { useNavigate } from 'react-router-dom'
import { StyledFooter } from './styles'

/** Components */
import { Link } from '~components/link'
import { Social } from '~components/social'
import { SocialProps } from '~components/social/types'
import { Socials } from '~data/socials'

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
