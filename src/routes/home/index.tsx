import { PageWrapper } from '~components/pageWrapper'
import { StyledLanding } from './styles'

/** Components */
import { Logo } from '~components/logo'
import { Mail } from '~components/mail'
import { Social } from '~components/social'

import { SocialProps } from '~components/social/types'
import { Socials } from '~data/socials'

/** Animations */
import { Fade } from '~components/animation/fade'

export const HomePage = () => {
    return (
        <PageWrapper>
            <StyledLanding>
                <Fade>
                    <Logo />
                </Fade>
                <Fade transition={{ delay: 0.1 }}>
                    <p>
                        A hobby programmer and student from Greece who
                        specializes in frontend web development.
                    </p>
                </Fade>
                <Fade transition={{ delay: 0.2 }}>
                    <Mail to="contact@naibuu.dev" />
                    <div>
                        {Socials.map((props: SocialProps, index: number) => (
                            <Social
                                key={index}
                                icon={props.icon}
                                href={props.href}
                            />
                        ))}
                    </div>
                </Fade>
            </StyledLanding>
        </PageWrapper>
    )
}
